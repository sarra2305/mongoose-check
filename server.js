require('dotenv').config();
const express = require('express');
const { default: mongoose } = require('mongoose');
const connectDB = require('./config/connectdb');
const ContactRouter = require('./route/contact');


const app = express();




connectDB();
app.use(express.json());
app.use('/router/contact', ContactRouter);



app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
} );