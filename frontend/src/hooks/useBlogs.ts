import { useCallback, useState } from "react";

import { deleteBlogAPI, getBlogsAPI, addBlogAPI } from "../api/blogs";

import { IAddBlogAPIPayload } from "../types/types";

export const useBlogs = () => {
  const [loading, setLoading] = useState(false);

  const fetchBlogs = useCallback(async () => {
    try {
      setLoading(true);
      const blogsAPIResponse = await getBlogsAPI();
      return blogsAPIResponse.result;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteBlogPost = useCallback(async (blogId: string) => {
    try {
      setLoading(true);
      const deleteBlogAPIResponse = await deleteBlogAPI(blogId);
      return deleteBlogAPIResponse;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  const addBlogPost = useCallback(async (blog: IAddBlogAPIPayload) => {
    try {
      setLoading(true);
      return await addBlogAPI(blog);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, fetchBlogs, deleteBlogPost, addBlogPost };
};
