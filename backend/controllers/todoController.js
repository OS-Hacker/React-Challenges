import Todo from "../models/todo.model.js";

export const getTodoController = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      success: true,
      message: "Todos fetched successfully",
      todos,
    });
  } catch (error) {
    console.log(error);
  }
};

// create
export const createTodoController = async (req, res) => {
  try {
    const { title } = req.body; // Now this will work

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const newTodo = await Todo.create({ title });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update
export const updateTodoController = async (req, res) => {
  try {
    // Create and save the new todo
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedTodo) {
      res.status(404).json({
        success: false,
        message: "Todo Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Todo updated successfully",
      updatedTodo,
    });
  } catch (error) {
    console.log(error);
  }
};

// delete
export const deleteTodoController = async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);

    if (!deletedTodo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
      deletedTodo,
    });
  } catch (error) {
    console.log(error);
  }
};
