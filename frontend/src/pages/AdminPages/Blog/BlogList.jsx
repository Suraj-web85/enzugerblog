import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AdminBlog.css";
import BlogTableRow from "./BlogTableRow";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    fetch("http://localhost:3001/getBlogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => setError(error)); // Store the error object
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/deleteBlog/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
        } else {
          throw new Error(result.message || "Failed to delete blog");
        }
      })
      .catch((error) => setError(error.message));
  };

  const handleBlogAdded = (newBlog) => {
    // Add the new blog to the state
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  };

  return (
    <div className="blog-list-container">
      <div className="blog-list-header">
        <h2>Blog List</h2>
        <Link className="add-product-btn com-btn" to="add-blog">
          + Add Blog
        </Link>
      </div>
      {error && <p className="error">{error.message}</p>}
      <div className="blg-lst-tble-whle">
        <table className="e-a-pr-tb sspara ">
          <thead>
            <tr>
              <th>Content</th>
              <th>Title</th>
              <th>Category</th>
              <th>Last Time</th>
              <th>Date</th>
              <th>Actions</th>
              <th>img</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <BlogTableRow
                blog={blog}
                key={blog.id}
                onDelete={handleDelete} // Pass the delete handler
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BlogList;
