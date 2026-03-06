import mongoose from "mongoose";

const DB_URL = "mongodb://127.0.0.1:27017/TEST_DB";

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("db successfully connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
