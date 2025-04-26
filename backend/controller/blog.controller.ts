import { ICreateBlogSchema, IDeleteBlogSchema } from "../routes/blog.routes";

import {
  addBlogToDB,
  deleteBlogFromDB,
  getAllBlogsFromDB,
} from "../repository/blogs/blog.repository";

export async function addBlog(payload: ICreateBlogSchema) {
  try {
    return await addBlogToDB(payload);
  } catch (error) {
    throw error;
  }
}

export async function deleteBlog(payload: IDeleteBlogSchema) {
  try {
    return await deleteBlogFromDB(payload);
  } catch (error) {
    throw error;
  }
}

export async function getAllBlogs() {
  try {
    return await getAllBlogsFromDB();
  } catch (error) {
    throw error;
  }
}
