const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/myusers'); //Replace with you connection String
    }catch (err){
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
