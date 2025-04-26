import express from "express";
import { z } from "zod";

import { loginUser, registerUser } from "../controller/user.controller";

import { generateJWTToken } from "../utils/jwt.utils";

import { authMiddleware, AuthRequest } from "../middleware/auth.middleware";

const userRouter = express.Router();

const RegisterUserSchema = z.object({
  name: z.string().min(3).describe("Name must be at least 3 characters long"),
  email: z.string().email().describe("Email must be a valid email address"),
  password: z
    .string()
    .min(6)
    .describe("Password must be at least 6 characters long"),
});

export type IRegisterUserSchema = z.infer<typeof RegisterUserSchema>;

userRouter.post("/register", async (req, res) => {
  try {
    const payload = req.body as IRegisterUserSchema;
    const result = await registerUser(payload);
    res.json({ message: "User registered successfully", result });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

const LoginUserSchema = z.object({
  email: z.string().email().describe("Email must be a valid email address"),
  password: z
    .string()
    .min(6)
    .describe("Password must be at least 6 characters long"),
});

export type ILoginUserSchema = z.infer<typeof LoginUserSchema>;

userRouter.post("/login", async (req, res) => {
  try {
    const payload = req.body as ILoginUserSchema;
    const user = await loginUser(payload);
    const token = generateJWTToken(user.userId.toString());
    res.json({ message: "User logged in successfully", user, token });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

userRouter.post("/profile", authMiddleware, async (req, res) => {
  try {
    res.json({
      message: "User profile fetched successfully",
      user: (req as AuthRequest).user,
    });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

export default userRouter;
