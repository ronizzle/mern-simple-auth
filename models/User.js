const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    middle_name: {
        type: String,
        required: false,
    },
    last_name: {
        type: String,
        required: true
    },
    contact_number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date_created: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('users', UserSchema);
