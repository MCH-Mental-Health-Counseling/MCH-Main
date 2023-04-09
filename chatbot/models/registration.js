const mongoose = require('mongoose');
const { Schema } = mongoose;

const registrationSchema = new mongoose.Schema({
    name: String,
    email: String,
    registerDate: Date
});

mongoose.model('registration', registrationSchema);
