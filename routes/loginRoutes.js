const User = require("../chatbot/models/user");
const bcrypt = require("bcrypt");

// Signup route
module.exports = app => {
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

            // Return user data
            res.status(200).json({ user: { name: user.name, email: user.email } });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Internal server error" });
        }
    });
}