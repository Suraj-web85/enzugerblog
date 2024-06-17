import React from "react";
import "./AdminBlog.css"; // Ensure your CSS file is imported

function BlogTableRow({ blog, onDelete }) {
  const truncateContent = (content) => {
    if (content.length > 100) {
      return content.substring(0, 100) + "...";
    }
    return content;
  };
  return (
    <tr>
      <td className="ellipsis-content" >{truncateContent(blog.content)}</td>
      <td className="ellipsis-title">{blog.title}</td>
      <td className="ellipsis-title">{blog.category}</td>
      <td>{blog.lastTime}</td>
      <td>{blog.date}</td>
      <td>
        <button className="del-btn" onClick={() => onDelete(blog.id)}>
          Delete
        </button>
      </td>
      <td>
        {blog.img && <img src={`http://localhost:3001${blog.img}`} alt="Blog Image" className="blog-img" />}
      </td>
    </tr>
  );
}

export default BlogTableRow;
