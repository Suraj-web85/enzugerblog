import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "../../styles/Shop.css";

import StarRating from "../../components/common/Starcontainer";
import Pagination from "../../components/common/Pagination";

import { VscSettings } from "react-icons/vsc";
import { CartContext } from "../../context/CartContext";
import products from "../../assets/data/products";

import { toast } from "react-toastify";

function Shop() {
  const { addToCart } = useContext(CartContext);

  const [currentPage, setCurrentPage] = useState(1);
  
  const [totalProducts, setTotalProducts] = useState(products.length);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [productsData, setProductsData] = useState(products);
  const [filterActive, setFilterActive] = useState("fil-box");

  const filterToggle = () => {
    setFilterActive(
      filterActive === "fil-box" ? "fil-box filteractive" : "fil-box"
    );
  };
  const productPerPage = 3;

  const handleAddToCart = (product) => {
    addToCart(product);

    toast.success(`${"Product"} added to cart!`, {
      position: "top-center",
      autoClose: 2000, // 5 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const sanitizeTitle = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "")
      .replace(/\s+/g, "-")
      .trim();
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    const filterProducts = () => {
      let filteredProducts = products;

      // Filter by category
      if (selectedCategory) {
        filteredProducts = filteredProducts.filter(
          (product) => product.productCategory === selectedCategory
        );
      }

      // Sort based on selected filter
      switch (selectedFilter) {
        case "rating":
          filteredProducts.sort((a, b) => b.productRating - a.productRating);
          break;
        case "latest":
          break;
        case "lowToHigh":
          filteredProducts.sort(
            (a, b) => a.productOfferPrice - b.productOfferPrice
          );
          break;
        case "highToLow":
          filteredProducts.sort(
            (a, b) => b.productOfferPrice - a.productOfferPrice
          );
          break;
        default:
          break;
      }

      return filteredProducts;
    };
    const filteredProducts = filterProducts();
    setTotalProducts(filteredProducts.length);
    const lastIndex = currentPage * productPerPage;
    const firstIndex = lastIndex - productPerPage;
    setProductsData(filteredProducts.slice(firstIndex, lastIndex));
  }, [
    selectedFilter,
    selectedCategory,
    setTotalProducts,
    products,
    currentPage,
  ]);

  return (
    <div className="en-sh-con con sflex">
      <div className={`sh-div ${filterActive}`}>
        <div className="sh-cat-box">
          <h2 className="mpara">Product categories</h2>
          <ul className="cat-list para">
            <li onClick={() => setSelectedCategory("")}>All Categories</li>
            <li onClick={() => setSelectedCategory("Nutrition")}>Nutrition</li>
            {/* <li onClick={() => setSelectedCategory("Fashion")}>Fashion</li> */}
            {/* <li onClick={() => setSelectedCategory("Beverage")}>Beverage</li> */}
          </ul>
        </div>
        <div className="sh-fil-box">
          <select
            name="filterby"
            className="sspara"
            id=""
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            <option value="">Sort By Popularity</option>
            <option value="rating">Sort By Average Rating</option>
            <option value="latest">Sort By Latest</option>
            <option value="lowToHigh">Sort By Price:Low to High</option>
            <option value="highToLow">Sort By Price:High to Low</option>
          </select>
        </div>
      </div>
      <div className="sh-div sflex">
        <div className="sspara sh-sec sflex">
          <div className="sh-filbtn sflex" onClick={filterToggle}>
            <VscSettings />
          </div>
          <span>Showing all {totalProducts} Results</span>
        </div>
        <div className="sh-sec">
          {productsData &&
            productsData.map((i, index) => (
              <div key={index} className="sh-item-con">
                <Link to={`/product/${sanitizeTitle(i.productTitle)}`}>
                  <img src={i.productImg} alt={i.productTitle} />
                </Link>
                <div className="sh-item-info">
                  <div className="sh-item-inf">
                    <h3>{i.productTitle}</h3>
                    <StarRating rating={i.productRating} />
                    <br />
                    <del>₹{i.productMRP.toFixed(2)}</del> &nbsp;
                    <ins className="mpara">
                      ₹{i.productOfferPrice.toFixed(2)}
                    </ins>
                    <p className="para">
                      You Save :{" "}
                      <span>
                        ₹ {(i.productMRP - i.productOfferPrice).toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <div className="sh-item-btn">
                    <Link
                      onClick={() => handleAddToCart(i)}
                      className="com-btn para"
                      to="/shop"
                    >
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="sh-sec">
          {products.length > productPerPage && (
            <Pagination
              products={products}
              productPerPage={productPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              setProductsData={setProductsData}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;
