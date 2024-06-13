const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL);//|| 'mongodb://127.0.0.1:27017/portfolio'

const connection = mongoose.connection;

connection.on('error',()=>{
    console.log("Error connecting to database");
});

connection.on('connected',()=>{
    console.log("Mongo DB connected successfully");
})
module.exports = connection;