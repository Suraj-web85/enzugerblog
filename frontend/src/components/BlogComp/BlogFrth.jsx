import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BlogFrth.css";
import BlogTitle from "./BlogTitle";
import { GoDotFill } from "react-icons/go";
import BlogCate from "../../assets/data/BlogCate.json";

function BlogFrth() {
  const [selectedCategory, setSelectedCategory] = useState("immunity");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const filteredArticles = selectedCategory
  ? BlogCate.find((category) => category.category === selectedCategory)?.blogs.slice(0, 6) || []
  : BlogCate.flatMap((category) => category.blogs.slice(0, 6));



  return (
    <div className="mn-dv-of-blg-frth">
      <div className="hd-tit">
        <BlogTitle title="Explore Articles" />
      </div>

      <div className="sb-dvo-blfrth">
          <div className="df-btn-cntr-kro">
            {BlogCate.map((category) => (
              <button
                key={category.category}
                onClick={() => handleCategoryClick(category.category)}
                className={`btns-ctr-slt ${
                  selectedCategory === category.category ? "active" : ""
                }`}
              >
                {category.category.toUpperCase()}
              </button>
            ))}
        </div>

        <div className="ct-wse-sc-mn-dv">
          <div className="ct-wse-sub-cnt">
            {filteredArticles.map((item) => (
              <Link
                to={`/blog/category/${selectedCategory}/${item.title.replace(
                  /\?/g,
                  "-"
                )}/${item.id}`}
                key={item.id}
              >
                <div className="ctry-ig-wth-cnt">
                  <div className="ig-cntr-frst-ctr">
                    <img src={`/images/${item.img}`} alt="Article" />
                    <p>
                      {`${item.lastTime} Min read `} <GoDotFill /> {item.Date}
                    </p>
                  </div>
                  <div className="cnt-cntr-scnd-ctr">
                    <h3>{truncateText(item.title, 50)}</h3>
                    <p className="article-single-content-description">
                      {truncateText(item.content, 50)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
            {selectedCategory &&
              BlogCate.filter((item) => item.category === selectedCategory)
                .length === 0 && (
                <p className="no-articles-message">
                  Sorry, there are currently no articles available for this
                  category.
                </p>
              )}
          </div>
        </div>
        <div className="center-con">
          <Link
            to={`/blog/category/${selectedCategory}`}
            className="viwemore-link"
          >
            <button type="button" className="viwemore">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogFrth;
