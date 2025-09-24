import mongoose from 'mongoose'

const connectDB=async()=>{
    try {
        const connectionInstance=await mongoose.connect("mongodb://127.0.0.1:27017/youtubBackend")
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.Connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error",error)
        process.exit(1)
    }
}

export default connectDB