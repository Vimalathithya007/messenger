const express = require("express")

const mongoose = require('mongoose')

const colors=require('colors');
const userRoutes=require('./routes/userRoutes')
const chatRoutes=require('./routes/chatRoutes')
const {notFound,errorHandler}=require('./middleware/errorMiddleware.js')


dotenv.config();
//connectDB();
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true})
const db=mongoose.connection
db.on('error',error => console.error(error))
db.once('open',() => console.log('Connected to Mongoose'))