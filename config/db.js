const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI

const connectdb = async () => {
    try {
        const db = await mongoose.connect(mongoURI);
        console.log(`MongoDB Connected to ${db.connection.host}`.blue.underline);
    } catch (err) {
        console.log(err);
        process.exit(1)
    }
}

module.exports = connectdb