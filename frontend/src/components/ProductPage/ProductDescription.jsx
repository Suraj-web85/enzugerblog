import React from "react";

const ProductDescription = ({ product }) => {
  const { image1, image2, heading1, heading2, description1, description2 } =
    product;

  return (
    <div className="dynamic-product-info sflex con">
      <div className="edp-sec">
        <div className="edp-imgcon sflex">
          <img src={image1} alt="Product 1" />
        </div>
        <div className="edp-tcon">
          <h2 className="mh">{heading1}</h2>
          <p className="mpara">{description1}</p>
        </div>
      </div>
      <div className="edp-sec">
        <div className="edp-tcon">
          <h2 className="mh">{heading2}</h2>
          <p className="mpara">{description2}</p>
        </div>
        <div className="edp-imgcon sflex">
          <img src={image2} alt="Product 2" />
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
