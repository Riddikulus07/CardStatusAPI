// config/db.config.js

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
        });
        console.log('Connected to MongoDB Successfully! ');
    } catch (error) {
        console.error('Coukld not connect to MongoDB due to :', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
