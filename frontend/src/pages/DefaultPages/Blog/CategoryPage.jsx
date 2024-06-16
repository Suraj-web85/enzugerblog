import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import BlogCate from "../../../assets/data/BlogCate.json";
import { Link } from "react-router-dom";
import "./CategoryPage.css";
import BlogPagination from "../../../components/BlogComp/BlogPagination";
import BlogTitle from "../../../components/BlogComp/BlogTitle";
import { GoDotFill } from "react-icons/go";

const ARTICLES_PER_PAGE = 6;

function CategoryPage() {
  const { category } = useParams();
  const { search } = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedArticles, setPaginatedArticles] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(search);
    const page = parseInt(queryParams.get("page")) || 1;
    setCurrentPage(page);
  }, [search]);

  useEffect(() => {
    const filteredCategory = BlogCate.find(
      (item) => item.category === category
    );
    const articles = filteredCategory ? filteredCategory.blogs : [];
    const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
    const endIndex = startIndex + ARTICLES_PER_PAGE;
    setPaginatedArticles(articles.slice(startIndex, endIndex));
  }, [category, currentPage]);

  const handlePageChange = (newPage) => {
    navigate(`/blog/category/${category}?page=${newPage}`);
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const filteredCategory = BlogCate.find((item) => item.category === category);

  const filteredArticlesCount = filteredCategory
    ? filteredCategory.blogs.length
    : 0;

  return (
    <div className="ct-wse-sc-mn-dv">
      <BlogTitle title={category} className="tit-of-sgle-cte-pge" />
      <p className="lntgh-blg">
        {filteredArticlesCount} {filteredArticlesCount === 1 ? "Blog" : "Blogs"}{" "}
      </p>
      <div className="ct-wse-sub-cntr">
        {paginatedArticles.length > 0 ? (
          paginatedArticles.map((item) => (
            <Link
              to={`/blog/category/${category}/${item.title.replace(
                /\?/g,
                "-"
              )}/${item.id}`}
              key={item.id}
            >
              <div className="ctry-ig-wth-cnt">
                <div className="ig-cntr-frst-ctr">
                  <img src={`/images/${item.img}`} alt={item.title} />
                  <p>
                    {item.lastTime} Min read <GoDotFill /> {item.Date}
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
          ))
        ) : (
          <p>No articles available for this category.</p>
        )}
      </div>
      <BlogPagination
        totalItems={filteredArticlesCount}
        setProductsData={setPaginatedArticles}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        itemsPerPage={ARTICLES_PER_PAGE}
      />
    </div>
  );
}

export default CategoryPage;
