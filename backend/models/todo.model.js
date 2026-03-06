import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// Create the model
const Todo = new mongoose.model("Todo", todoSchema);

export default Todo;
