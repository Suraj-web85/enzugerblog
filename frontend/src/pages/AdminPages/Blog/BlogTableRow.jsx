import React from "react";
import "./AdminBlog.css"; // Ensure your CSS file is imported

function BlogTableRow({ blog, handleActionClick }) {
  return (
    <tr>
      <td>{blog.content}</td>
      <td>{blog.title}</td>
      <td>{blog.category}</td>
      <td>{blog.lastTime}</td>
      <td>{blog.date}</td>
      <td>
        <button className="action-btn" onClick={(e) => handleActionClick(e, blog)}>
          ⋮
        </button>
      </td>
      <td>
        {blog.img && <img src={`http://localhost:3001${blog.img}` }alt="Blog Image" className="blog-img" />}
      </td>
    </tr>
  );
}

export default BlogTableRow;
