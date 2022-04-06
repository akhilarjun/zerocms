const mongoose = require('mongoose');
const collection = new mongoose.Schema({
    fields: [
        {
            fieldType: {
                type: String,
                required: true,
                enum: [''],
            },
        },
    ],
});

module.exports = Collection = mongoose.model('Collection', collection);
