import React, { useEffect,useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./BlogOwl.css";

// import blogs from "../../assets/data/BlogPgTp.json";
import BlogTitle from "./BlogTitle";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import ReactDOM from "react-dom";


function BlogOwl() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/getBlogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);
  
  
  
  useEffect(() => {
    const navContainer = document.querySelector(".owl-nav");
    const dotsContainer = document.querySelector(".owl-dots");
    const prevButton = document.querySelector(".owl-prev");
    const nextButton = document.querySelector(".owl-next");

    if (navContainer && dotsContainer) {
      navContainer.insertBefore(dotsContainer, navContainer.childNodes[1]);
    }

    if (prevButton && nextButton) {
      prevButton.innerHTML = ""; 
      nextButton.innerHTML = ""; 

      const prevIcon = document.createElement("div");
      prevIcon.className = "custom-nav-btn prev-slide";
      prevButton.appendChild(prevIcon);

      const nextIcon = document.createElement("div");
      nextIcon.className = "custom-nav-btn next-slide";
      nextButton.appendChild(nextIcon);

      const renderIcon = (element, IconComponent) => {
        ReactDOM.render(<IconComponent size={30} className="ic-on-prv-nxt" />, element);
      };

      renderIcon(prevIcon, IoIosArrowBack);
      renderIcon(nextIcon, IoIosArrowForward);
    }
  }, [blogs]);

  return (
    <>
      <div className="ti-tl-lg">
        <BlogTitle title="More Articles" className="hd-tp-rd" />
      </div>
      <OwlCarousel
        className="owl-theme"
        responsive={{
          0: {
            items: 1,
          },
          560: {
            items: 1,
          },
          900: {
            items: 1,
          },
          1200: {
            items: 1,
          },
        }}
        autoplay={true}
        autoplayTimeout={3000}
        autoplayHoverPause={true}
        loop={true}
        autoHeight={true}
        margin={0}
        stagePadding={0}
        nav
        dots
        // onTranslated={handleTranslate}
      >
        {blogs.map((blog) => (
          <div className="blg-owl-sb-dv" key={blog.id}>
            <div className="cn-cnrf">
              <div className="gbsr-ctr">
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
              </div>
              <div className="mg-cnr">
              <img src={`http://localhost:3001${blog.img}`} alt={blog.title} />
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </>
  );
}

export default BlogOwl;
