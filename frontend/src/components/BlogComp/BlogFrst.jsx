import React, { useState, useEffect } from "react";
import "./BlogFrst.css";
import { GoDotFill } from "react-icons/go";
import BlogTopSec from "../../assets/data/BlogPgTp.json";
import { Link } from "react-router-dom";

function BlogFrst() {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 944);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className={`brd-rd ${isSmallScreen ? "grid" : "flex"}`}>
      {BlogTopSec.map((item, index) => {
        const bgImg = {
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/${item.img}') no-repeat center / cover`,
        };

        const flexStyle = isSmallScreen
          ? index === hoveredIndex || (index === 0 && hoveredIndex === null)
            ? { height: "250px" }
            : { height: "130px" }
          : index === hoveredIndex || (index === 0 && hoveredIndex === null)
          ? { flex: 1.6 }
          : { flex: 1 };

        const contentVisible =
          index === hoveredIndex || (index === 0 && hoveredIndex === null)
            ? "visible"
            : "hidden";
        const opacity =
          index === hoveredIndex || (index === 0 && hoveredIndex === null)
            ? 1
            : 0;

        return (
          <div
            className={`fs-blgt sm-bg-tp ${
              isSmallScreen ? "small-screen" : ""
            }`}
            style={{ ...bgImg, ...flexStyle }}
            key={item.id}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="sb-fs-conte-pr">
              <div
                className="rnd-dk-rha-hu"
                style={{
                  visibility: contentVisible,
                  opacity: opacity,
                  transition: "opacity 0.5s ease",
                }}
              >
                <h3 className="hd-wr">{item.heading}</h3>
                <p className="pg-sm-cnt ltr-gps df">{item.content}</p>
                <div className="pg-sm-cnt dflex-algn-cntr ">
                  <span>{item.category}</span>
                  <GoDotFill className="dot-fil" />
                  <span>{item.timePeriod} Min Read</span>
                  <GoDotFill className="dot-fil" />
                  <span>{item.Date}</span>
                </div>
                <Link to={`/blog/${item.id}`}>
                  <button type="button" className="rd-mre-bn-blow">
                    Read more
                  </button>
                </Link>
              </div>
              {
                <h3
                  className={`hd-wr sht ${
                    index === hoveredIndex ||
                    (index === 0 && hoveredIndex === null)
                      ? "visi"
                      : "truncated-heading"
                  } `}
                >
                  {item.heading}
                </h3>
              }
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BlogFrst;
