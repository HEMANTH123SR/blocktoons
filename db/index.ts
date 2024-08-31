import mongoose from "mongoose";

export const connectDB = async () => {
  try {
     await mongoose.connect(process.env.MONGO_URL as string);
    console.log(`mongoDB connnected: `);
  } catch (err) {
    console.log(`mongoDB connection error: ${err}`);
  }
};