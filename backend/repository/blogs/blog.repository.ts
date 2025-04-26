import mongoose from "mongoose";

import { ICreateBlogSchema, IDeleteBlogSchema } from "../../routes/blog.routes";

import { Blog } from "../schema";

export async function addBlogToDB(payload: ICreateBlogSchema) {
  try {
    const insertPayload = {
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
    return await Blog.findByIdAndDelete(payload.blogId);
  } catch (error) {
    throw error;
  }
}

export async function getAllBlogsFromDB() {
  try {
    return await Blog.find().select("+password").populate({
      path: "authorId"
    });
  } catch (error) {
    throw error;
  }
}
