import { useState } from "react";
import { useNavigate } from "react-router";

import { useBlogs } from "../hooks/useBlogs";

import Button from "../components/ui/Button";
import H2 from "../components/ui/Typography";
import Input from "../components/ui/Input";

const AddBlog = () => {
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
  });

  const { addBlogPost } = useBlogs();

  const navigate = useNavigate();

  const handleBlogChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewBlog({
      ...newBlog,
      [name]: value,
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addBlogPost(newBlog);
      alert("Blog added successfully");
    } catch (error) {
      alert("Failed to add blog! Try again later");
    } finally {
      setNewBlog({
        title: "",
        content: "",
      });
      navigate("/");
    }
  };

  return (
    <div>
      <H2>Add Blog</H2>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col p-4 gap-4 mt-6">
          <Input
            type="text"
            placeholder="Title"
            value={newBlog.title}
            name="title"
            onChange={handleBlogChange}
          />
          <textarea
            rows={10}
            cols={30}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Content"
            value={newBlog.content}
            name="content"
            onChange={handleBlogChange}
          />
          <Button>Add Blog</Button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
