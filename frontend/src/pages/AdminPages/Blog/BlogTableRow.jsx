import React from "react";
import './AdminBlog.css '

function BlogTableRow({ blog, handleActionClick }) {
  return (
    <tr>
      <td>{blog.content}</td>
      <td>{blog.title}</td>
      <td>{blog.category}</td>
      <td>{blog.lastTime}</td>
      <td>{blog.date}</td>
      <td>
        <button
          className="action-btn"
          onClick={(e) => handleActionClick(e, blog)}
        >
          ⋮
        </button>
      </td>
      <td>
        {blog.img && (
          <img src={blog.img} alt="Blog Image" className="blog-img" />
        )}
      </td>
    </tr>
  );
}

export default BlogTableRow;
