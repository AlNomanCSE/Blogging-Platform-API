import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/taskdb`
    );
    console.log("🛢 MongoDB Connected !! ");
  } catch (error) {
    console.log("🔌 MongoDB Connection Error :", error);
    process.exit();
  }
};

export default connectDB;
