const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config()

const connectDb = async () => {
  const database = process.env.DB
  try {
   mongoose.connect(database)
   console.log('Database connected 🧠')
 } catch (error) {
   console.error(error)
 }
}

module.exports = connectDb;