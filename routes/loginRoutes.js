const User = require("../chatbot/models/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const cors = require('cors');
const express = require('express');

module.exports = app => {

    // Use middleware to parse JSON data and handle CORS
    app.use(express.json());
    app.use(cors());

    // Define JWT secret key
    const JWT_SECRET = 'mysecret';

    // Helper function to generate JWT token
    const generateToken = (user) => {
        return jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1d' });
    };

    // Helper function to verify JWT token
    const verifyToken = (req, res, next) => {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).send({ message: 'Unauthorized' });
        }
        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            req.userId = decoded.userId;
            next();
        } catch (error) {
            return res.status(401).send({ message: 'Unauthorized' });
        }
    };

    // Signup route
    app.post("/api/signup", async (req, res) => {
        const { name, email, password } = req.body;
        
        try {
            // Check if user already exists
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ message: "User already exists" });
            }

            // Create new user
            user = new User({ name, email, password });
            
            const token = generateToken(user);
            res.cookie('token', token, { httpOnly: true });
            // Hash password
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            // Save user to database
            await user.save();

            // Return success message
            res.status(201).json({ message: "User created successfully" });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Internal server error" });
        }
    });

    // Login route
    app.post("/api/login", async (req, res) => {
        const { email, password } = req.body;

        try {
            // Check if user exists
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: "Invalid credentials" });
            }

            // Check password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: "Invalid credentials" });
            }
            const token = generateToken(user);
            res.cookie('token', token, { httpOnly: true });
            // Return user data
            res.status(200).json({ user });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Internal server error" });
        }
    });


    // Endpoint for getting user profile
    app.get('/api/profile', verifyToken, async (req, res) => {
        try {
            const user = await User.findById(req.userId);
            if (!user) {
                return res.status(404).send({ message: 'User not found' });
            }
            res.send(user);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Server error' });
        }
    });

    app.post('/api/logout', (req, res) => {
        res.clearCookie('token');
        res.send({ message: 'Logged out' });
    });


}