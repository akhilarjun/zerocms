const mongoose = require('mongoose');
const organization = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    business: String,
    emailId: String,
    addressLineOne: {
        type: String,
        required: true,
    },
    addressLineTwo: String,
    addressLineThree: String,
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
});

module.exports = Organization = mongoose.model('Organization', organization);
