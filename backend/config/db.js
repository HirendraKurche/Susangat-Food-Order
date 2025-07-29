import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://hirendrakurche423:1234567809@cluster0.zhivqp3.mongodb.net/Food-Delivery').then(() => 
        console.log("MongoDB connected successfully"));
}