import express from "express";
import cors from "cors";
import { connectDB } from "./db/connectDb.js";
import todoRouter from "./routes/todo.routes.js";

const app = express();

// connect database
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use(todoRouter);

// server running
const port = 8080;
app.listen(port, () => console.log(`server is running on port ${port}`));
