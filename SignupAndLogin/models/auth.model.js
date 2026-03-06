import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    cPassword: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    hobbies: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true },
);

export const authModel = new mongoose.model("user", authSchema);
