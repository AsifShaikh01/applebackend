//Importing the necessary modules

const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();
// require("dotenv").config();

//Using a database

const connection = mongoose.connect(process.env.mongoURL);

module.exports = { connection };
