const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017';
const DB_NAME = 'zero-cms';

const connect = async () => {
    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('DB Connected...');
};

module.exports = connect;
