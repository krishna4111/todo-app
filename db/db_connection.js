const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv").config();

const connectWithDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connect to db successfully");
  } catch (error) {
    console.error("error when connect with db", error);
  }
};

module.exports = { connectWithDb };
