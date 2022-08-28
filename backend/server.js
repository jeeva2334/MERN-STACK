// dotenv initiazing
require('dotenv').config()

//express app initiazing

const mongoose = require('mongoose');
const express = require('express');
const app = express();


//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,res.method)
    next()
})

//external route initiazing
const workoutRoutes = require('./route/workouts')
app.use('/workout',workoutRoutes)

//initialzing db and connection
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("mongo connected");
        app.listen(process.env.PORT,()=>{
            console.log("port is running http://localhost:4000");
        });
    })
    .catch((err)=>{
        console.log(err);
    })

//defining routes
app.get('/',(req,res)=>{
    res.send({msg:"Message"})
})