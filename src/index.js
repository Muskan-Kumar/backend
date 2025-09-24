// require('dotenv').config({path:'./env'})
// import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/index.js'
import { app } from './app.js'
const PORT=process.env.PORT || 8000

dotenv.config({
    path:'./.env'
})

connectDB()
.then(()=>{
    app.listen(PORT,()=>console.log(`Server is running at port ${process.env.PORT}`))
})
.catch((err)=>{
    console.log("MONGO DB connection failed !!!",err)
})









/*
(async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017")
        app.on("error",(error)=>{
            console.log("ERROR: ",error)
            throw error
        })
        app.listen(process.env.PORT,()=>console.log(`App is listening on port ${process.env.PORT}`))
    } catch (error) {
        console.log("ERROR: ",error)
        throw error
    }
})()
*/