import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("✅ DB Connected");
    } catch (error) {
        console.log("❌ DB Error:");
        console.log(error.message);   // 👈 VERY IMPORTANT
    }
};

export default connectDb;
