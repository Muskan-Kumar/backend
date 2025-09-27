import mongoose from 'mongoose'

const connectDB=async()=>{
    try {
        const connectionInstance=await mongoose.connect("mongodb://127.0.0.1:27017/youtubeBackend")
        console.log(`\nMongoDB connected !! DB HOST: ${connectionInstance.Connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error",error)
        process.exit(1)
    }
}

export default connectDB







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