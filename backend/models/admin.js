const mongoose = require('mongoose');

// ***** Build Your Admins Model Schema *****
const adminSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

module.exports = mongoose.model('Admins', adminSchema);
