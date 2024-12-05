import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export default connectDB;
