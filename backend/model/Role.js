const mongoose = require('mongoose');

const role = new mongoose.Schema({
    roleName: {
        type: String,
        required: true,
    },
    roleType: {
        type: String,
        required: true,
    },
    roleRestrictions: {
        type: [String],
        required: true,
        default: [],
    },
});

module.exports = Role = mongoose.model('Role', role);
