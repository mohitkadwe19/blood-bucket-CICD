const mongoose = require('mongoose');
const db = process.env.MONGODB_URI

// create database connection using try and catch block
try {
    mongoose.connect(db, { useNewUrlParser: true });
    console.log(' db connection successful')
} catch (err) {
    console.log(err);
}

