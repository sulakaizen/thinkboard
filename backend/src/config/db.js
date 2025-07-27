import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://sulacoder:7JfdWC8yISeCrIiw@cluster0.f0he2fy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("MONGODB CONNECTED SUCCESSFULLY!");
    } catch (error) {
        console.log("Error connecting to MONGODB", error);
    }
}