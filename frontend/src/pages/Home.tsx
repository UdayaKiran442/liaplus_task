import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router";

import Button from "../components/ui/Button";
import H2 from "../components/ui/Typography";

import { useBlogs } from "../hooks/useBlogs";

import { IBlog } from "../types/types";

import { logoutUser } from "../redux/userReducer";

const Home = () => {
  const [allBlogs, setAllBlogs] = useState<IBlog[]>([]);

  const { user } = useSelector((state: any) => state.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { fetchBlogs, deleteBlogPost } = useBlogs();

  const getAllBlogs = async () => {
    try {
      const blogs = await fetchBlogs();
      setAllBlogs(blogs);
    } catch (error) {
      alert("Failed to fetch blogs! Try again later");
    }
  };

  const onDelete = async (blogId: string) => {
    try {
      await deleteBlogPost(blogId);
      await getAllBlogs();
    } catch (error) {
      alert("Failed to delete blog! Try again later");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logoutUser());
    navigate("/sign-in");
  };

  useEffect(() => {
    getAllBlogs();
  }, [fetchBlogs, deleteBlogPost, user]);

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <div className="flex items-center mb-10">
        <H2>Latest Blogs</H2>
        <div className="flex gap-2 ml-auto">
          {user.role === "admin" && (
            <button
              onClick={() => navigate("/add-blog")}
              className="bg-black text-white py-2 px-4 rounded-md hover:bg-black/80"
            >
              Add Blog
            </button>
          )}
          <button
            onClick={handleLogout}
            className="bg-black text-white py-2 px-4 rounded-md hover:bg-black/80"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {allBlogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200 overflow-hidden flex flex-col"
          >
            <div className="flex-1 flex flex-col p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-semibold mb-2 text-gray-900 line-clamp-2">
                  {blog.title}
                </h2>
                {user.role === "admin" && (
                  <Trash2
                    onClick={() => onDelete(blog._id)}
                    className="text-red-500 hover:text-red-400 transition duration-200 cursor-pointer"
                  />
                )}
              </div>
              <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                {blog.content}
              </p>
              <div className="flex items-center justify-between mt-auto mb-1">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700">
                    {blog.authorId.name}
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
