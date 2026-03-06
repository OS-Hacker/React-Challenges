import express from "express";
import connectDB from "./db/connectDB.js";
import cors from "cors";
import router from "./routes/auth.routes.js";

const app = express();

// connect DB
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use(router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
