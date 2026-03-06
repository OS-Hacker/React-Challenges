import express from "express";
import { loginController, signupController } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/auth/signup", signupController);

router.post("/auth/login", loginController);

export default router;
