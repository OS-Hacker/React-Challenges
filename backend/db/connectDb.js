import mongoose from "mongoose";

export const connectDB = async () => {
  const URL = "mongodb://127.0.0.1:27017/todoDB";
  try {
    mongoose.connect(URL);
    console.log("db connected successful");
  } catch (error) {
    console.log(error);
  }
};

