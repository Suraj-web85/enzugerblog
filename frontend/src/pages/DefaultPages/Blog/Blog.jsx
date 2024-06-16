import React, { useEffect } from "react";
import "./Blog.css";
import BlogFrst from "../../../components/BlogComp/BlogFrst";
import BlogScnd from "../../../components/BlogComp/BlogScnd";
import BlogThrd from "../../../components/BlogComp/BlogThrd";
import BlogFrth from "../../../components/BlogComp/BlogFrth";
import BlogOwl from "../../../components/BlogComp/BlogOwl";

function Blog() {
  return (
    <>
      <div className="mn-bg-cn-trsm">
        <BlogFrst />
        <BlogScnd />
        <BlogThrd />
        <BlogFrth />
        <BlogOwl />
      </div>
    </>
  );
}

export default Blog;
