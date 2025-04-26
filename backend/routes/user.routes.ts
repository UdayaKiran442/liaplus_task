import express from "express";
import { z } from "zod";

import { registerUser } from "../controller/user.controller";

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
userRouter.post("/login", (req, res) => {});

export default userRouter;
