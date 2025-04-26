import { useEffect } from "react";
import { useState } from "react";

import Button from "../components/ui/Button";

import { useBlogs } from "../hooks/useBlogs";

import { IBlog } from "../types/types";

const Home = () => {
  const [allBlogs, setAllBlogs] = useState<IBlog[]>([]);

  const { fetchBlogs } = useBlogs();

  const getAllBlogs = async () => {
    try {
      const blogs = await fetchBlogs();
      setAllBlogs(blogs);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, [fetchBlogs]);

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800 tracking-tight">
        Latest Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {allBlogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200 overflow-hidden flex flex-col"
          >
            <div className="flex-1 flex flex-col p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-900 line-clamp-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                {blog.content}
              </p>
              <div className="flex items-center justify-between mt-auto mb-1">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700">
                    {blog.authorId}
                  </span>
                </div>
                <span className="text-gray-400 text-xs">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </span>
              </div>
              <Button>Read More</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
