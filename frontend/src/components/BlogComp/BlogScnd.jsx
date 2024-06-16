import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BlogScnd.css";
// import '../../components/BlogTitle/BlogTitle'
import BlogTitle from "./BlogTitle";

function BlogScnd({ selectedCategory }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  useEffect(()=>{
const handleResize = () => {
  setIsSmallScreen(window.innerWidth <= 944)
};
handleResize();
window.addEventListener('resize',handleResize)
return () => window.removeEventListener('resize',handleResize)
  },[])
  return (
    <div className="mn-blg-cn-scnd">
      {isSmallScreen && <BlogTitle title="Top Stories" />}
      <div className="sb-blg">
        <div className="br-tp">
          <Link to={`/blog/category/immunity`}>
            <div className="rn-sc-dj">
              <img src="/images/immunity.jpg" alt="" />
              <h3>Immunity</h3>
            </div>
          </Link>
        </div>
        <div className="br-tp">
          <Link to={`/blog/category/nutrition`}>
            <div className="rn-sc-dj">
              <img src="/images/nutri.jpg" alt="" />
              <h3>Nutrition</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogScnd;
