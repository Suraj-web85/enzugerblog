import React from "react";

function ProductTableRow({ product, handleActionClick }) {
  return (
    <tr className="sspara">
      <td>{product.productTitle}</td>
      <td>{product.productCategory}</td>
      <td>₹ {product.productMRP}</td>
      <td>{product.inStock}</td>
      <td>
        <span
          className={`dyn-span ${
            product.productStatus === "published"
              ? "published-span"
              : "draft-span"
          }`}
        >
          {product.productStatus}
        </span>
      </td>
      <td>
        <button
          className="action-btn"
          onClick={(event) => handleActionClick(event, product)}
        >
          ⋮
        </button>
      </td>
    </tr>
  );
}

export default ProductTableRow;
