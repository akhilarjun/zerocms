const mongoose = require('mongoose');

const user = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    emailId: {
        type: String,
        required: true,
    },
    roleId: {
        type: String,
        required: true,
    },
    orgId: {
        type: String,
        required: true,
    },
});

module.exports = User = mongoose.model('User', user);
