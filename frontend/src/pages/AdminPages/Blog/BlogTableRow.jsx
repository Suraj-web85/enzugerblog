import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineAddToPhotos, MdDeleteOutline } from "react-icons/md";

function BlogTableRow({ blog, handleActionClick }) {
  return (
    <tr className="sspara">
      <td>{blog.content}</td>
      <td>{blog.title}</td>
      <td>{blog.category}</td>
      <td>{blog.lastTime}</td>
      <td>{blog.date}</td>
      <td>
        <button
          className="action-btn"
          onClick={(event) => handleActionClick(event, blog)}
        >
          ⋮
        </button>
      </td>
    </tr>
  );
}

export default BlogTableRow;
