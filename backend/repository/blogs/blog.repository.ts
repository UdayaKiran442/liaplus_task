import mongoose from "mongoose";

import { ICreateBlogSchema, IDeleteBlogSchema } from "../../routes/blog.routes";

import { Blog } from "../schema";

export async function addBlogToDB(payload: ICreateBlogSchema) {
  try {
    const insertPayload = {
      blogId: new mongoose.Types.ObjectId(),
      title: payload.title,
      content: payload.content,
      authorId: payload.authorId,
    };
    return await Blog.create(insertPayload);
  } catch (error) {
    throw error;
  }
}

export async function deleteBlogFromDB(payload: IDeleteBlogSchema) {
  try {
    return await Blog.findOneAndDelete({ blogId: payload.blogId });
  } catch (error) {
    throw error;
  }
}
  
export async function getAllBlogsFromDB() {
  try {
    return await Blog.find();
  } catch (error) {
    throw error;
  }
}