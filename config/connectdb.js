const mongoose  = require('mongoose');



const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017")
    console.log("DB is connected");
  } catch (error) {
    console.log("DB connection failed : ", error);
  }
};

module.exports = connectDB;