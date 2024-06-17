import React, { useState } from "react";
import "./AdminProduct.css";

import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import products from "../../../assets/data/products";
  
import { FaRegEdit } from "react-icons/fa";
import {
  MdOutlineAddBox,
  MdDeleteOutline,
  MdOutlineAddToPhotos,
} from "react-icons/md";
import ProductTableRow from "./ProductTableRow";

const AdminProducts = () => {
  const [actionMenu, setActionMenu] = useState({
    show: false,
    x: 0,
    y: 0,
    product: null,
  });
  const handleActionClick = (event, product) => {
    const { clientX, clientY } = event;
    console.log(clientX + "and" + clientY);
    setActionMenu({ show: true, x: clientX, y: clientY, product });
  };
  const handleCloseMenu = () => {
    setActionMenu({ show: false, x: 0, y: 0, product: null });
  };

  return (
    <div className="e-a-prod-con">
      <div className="sflex" style={{ justifyContent: "flex-end" }}>
        <Link className="add-product-btn com-btn" to="add-new">
          + Add Product
        </Link>
      </div>
      <div className="e-a-pr-tb-con">
        <table className="e-a-pr-tb sspara">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ProductTableRow
                product={product}
                key={index}
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
            <button onClick={() => {}}>
              <MdDeleteOutline /> Delete
            </button>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default AdminProducts;
