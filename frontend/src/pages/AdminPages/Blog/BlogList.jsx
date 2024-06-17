import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AdminBlog.css";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineAddToPhotos, MdDeleteOutline } from "react-icons/md";
import BlogTableRow from "./BlogTableRow"; // Assuming you have created this component
import AddBlog from "./AddBlog";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [actionMenu, setActionMenu] = useState({
    show: false,
    x: 0,
    y: 0,
    blog: null,
  });

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
      .catch((error) => setError(error.message))
      .finally(() => {
        // Close action menu after delete
        handleCloseMenu();
      });
  };

  const handleActionClick = (event, blog) => {
    const { clientX, clientY } = event;
    setActionMenu({ show: true, x: clientX, y: clientY, blog });
  };

  const handleCloseMenu = () => {
    setActionMenu({ show: false, x: 0, y: 0, blog: null });
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
              handleActionClick={handleActionClick}
            />
          ))}
        </tbody>
      </table>
      </div>
      
      {actionMenu.show && (
        <div className="act-btn-overlay" onClick={handleCloseMenu}>
          <div
            className="act-dialog para"
            style={{ top: actionMenu.y, left: actionMenu.x - 160 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => {}}>
              <FaRegEdit /> Edit
            </button>
            <button onClick={() => {}}>
              <MdOutlineAddToPhotos /> Duplicate
            </button>
            <button onClick={() => handleDelete(actionMenu.blog.id)}>
              <MdDeleteOutline /> Delete
            </button>
          </div>
        </div>
      )}
      {/* <AddBlog onBlogAdded={handleBlogAdded} /> */}
    </div>
  );
}

export default BlogList;
