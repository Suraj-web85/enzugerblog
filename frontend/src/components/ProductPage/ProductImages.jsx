import React from "react";

import { useState, useEffect, useRef } from "react";

import E1 from "@images/Enzugerbottle.webp";
import E2 from "@images/Eb/E.webp";
import E3 from "@images/Eb/E1.webp";
import E4 from "@images/Eb/Energies.webp";
import E5 from "@images/Eb/EnzugerIngredients.webp";
import E6 from "@images/Eb/Enzuger-Nutrition-Fact.webp";

// const images = [E1, E2, E3, E4, E5, E6];

function ProductImages({ product }) {

  const images = product.productImages;
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const handleMouseMove = (e) => {
      container.querySelectorAll(".prod-bimg img").forEach((img) => {
        const x = e.clientX - img.offsetLeft;
        const y = e.clientY - img.offsetTop;
        img.style.transformOrigin = `${x}px ${y}px`;
        img.style.transform = "scale(1.5)";
      });
    };
    const handleMouseLeave = () => {
      container.querySelectorAll(".prod-bimg img").forEach((img) => {
        img.style.transformOrigin = "center";
        img.style.transform = "scale(1)";
      });
    };
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (!slideRef.current) return;
    const scrollWidth = slideRef.current.scrollWidth;
    const childrenElementCount = slideRef.current.childElementCount;
    const width = scrollWidth / childrenElementCount;
    setWidth(width);
  }, []);

  const [slideIndex, setSlideIndex] = useState(1);
  const [width, setWidth] = useState(0);
  const [start, setStart] = useState(0);
  const [change, setChange] = useState(9);

  const slideRef = useRef();

  const pushSlide = (n) => {
    setSlideIndex((prev) => prev + n);
    slideShow(slideIndex + n);
  };
  const slideShow = (n) => {
    if (n < 1) {
      setSlideIndex(images.length);
    }
    if (n > images.length) {
      setSlideIndex(1);
    }
  };

  // Drg

  const dragStart = (e) => {
    setStart(e.clientX);
  };
  const dragOver = (e) => {
    let touch = e.clientX;
    setChange(start - touch);
  };
  const dragEnd = (e) => {
    if (change > 0) {
      slideRef.current.scrollLeft += width;
    } else {
      slideRef.current.scrollLeft -= width;
    }
  };

  useEffect(() => {
    if (!slideRef.current || !width) return;
    let numOfThumb = Math.round(slideRef.current.offsetWidth / width);
    slideRef.current.scrollLeft =
      slideIndex > numOfThumb ? (slideIndex - 1) * width : 0;
  }, [width, slideIndex]);

  return (
    <div className="prod-imgs">
      <div className="prod-bimg-con" ref={containerRef}>
        {images &&
          images.map((img, index) => (
            <div
              key={index}
              className="prod-bimg"
              style={{ display: index + 1 === slideIndex ? "block" : "none" }}
            >
              <img src={img} alt="" />
            </div>
          ))}
      </div>
      <div className="prod-simg-con sflex">
        <span className="esli-prev" onClick={() => pushSlide(-1)}>
          &#10094;
        </span>
        <div
          className="prod-slider sflex"
          ref={slideRef}
          onDragOver={dragOver}
          onDragEnd={dragEnd}
          onDragStart={dragStart}
        >
          {images && images.map((img, index) => (
            <div
              key={index}
              className={`slider-img ${
                index + 1 === slideIndex && "active-slide-img"
              }`}
              onClick={() => setSlideIndex(index + 1)}
            >
              <img src={img} alt="" />
            </div>
          ))}
        </div>
        <span className="esli-next" onClick={() => pushSlide(1)}>
          &#10095;
        </span>
      </div>
    </div>
  );
}

export default ProductImages;
