import { useCallback, useState } from "react";

import { getBlogsAPI } from "../api/blogs";


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

  return { loading, fetchBlogs };
};
