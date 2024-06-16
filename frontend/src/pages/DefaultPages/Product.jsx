import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import products from "../../assets/data/products";

import "../../components/ProductPage/Product.css";
import ProductDetails from "../../components/ProductPage/ProductDetails";

const sanitizeTitle = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, "-")
    .trim();
};

// Function to get product by sanitized title
const getProductBySanitizedTitle = (sanitizedTitle, products) => {
  const sanitizedToOriginalMap = products.reduce((map, product) => {
    map[sanitizeTitle(product.productTitle)] = product.productTitle;
    return map;
  }, {});

  const originalTitle = sanitizedToOriginalMap[sanitizedTitle];
  return products.find((product) => product.productTitle === originalTitle);
};

function Product() {
  const { productTitle: sanitizedTitle } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = getProductBySanitizedTitle(sanitizedTitle, products);
    setProduct(foundProduct);
  }, [sanitizedTitle]);

  return (
    <div>
      {product ? (
        <ProductDetails product={product} />
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default Product;
