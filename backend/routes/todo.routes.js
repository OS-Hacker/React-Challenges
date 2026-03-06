import express from "express";
import {
  createTodoController,
  deleteTodoController,
  getTodoController,
  updateTodoController,
} from "../controllers/todoController.js";

const todoRouter = express.Router();

// get/read
todoRouter.get("/todo", getTodoController);

// create
todoRouter.post("/todo/create", createTodoController);

// update
todoRouter.put("/todo/edit/:id", updateTodoController);

// delete
todoRouter.delete("/todo/delete/:id", deleteTodoController);

export default todoRouter;
