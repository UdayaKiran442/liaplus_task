import express from "express";
import { z } from "zod";

import {
  addBlog,
  deleteBlog,
  getAllBlogs,
} from "../controller/blog.controller";

import {
  authMiddleware,
  adminMiddleware,
  AuthRequest,
} from "../middleware/auth.middleware";

const blogRouter = express.Router();

const CreateBlogSchema = z.object({
  title: z.string().min(3).describe("Title must be at least 3 characters long"),
  content: z
    .string()
    .min(3)
    .describe("Content must be at least 3 characters long"),
});

export type ICreateBlogSchema = z.infer<typeof CreateBlogSchema> & {
  authorId: string;
};

blogRouter.post(
  "/create",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const payload = req.body as ICreateBlogSchema;
      payload.authorId = (req as AuthRequest).user.userId;
      const result = await addBlog(payload);
      res.json({ message: "Blog added successfully", result });
    } catch (error: any) {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }
);

const DeleteBlogSchema = z.object({
  blogId: z.string().describe("Blog ID must be a valid string"),
});

export type IDeleteBlogSchema = z.infer<typeof DeleteBlogSchema>;

blogRouter.post(
  "/delete",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const payload = req.body as IDeleteBlogSchema;
      const result = await deleteBlog(payload);
      res.json({ message: "Blog deleted successfully", result });
    } catch (error: any) {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }
);

blogRouter.get("/all", authMiddleware, async (req, res) => {
  try {
    const result = await getAllBlogs();
    res.json({ message: "Blogs fetched successfully", result });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

export default blogRouter;
