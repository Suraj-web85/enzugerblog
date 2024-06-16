import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { IoStarSharp } from "react-icons/io5";
import { LiaStarHalfAltSolid } from "react-icons/lia";
import trustIndData from "../../../assets/data/TrustInd.json";

export default function Owl() {
  const maxLength = 100;
  // const truncatedText = 
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<IoStarSharp className="srats" key={i} />);
    }
    if (hasHalfStar) {
      stars.push(<LiaStarHalfAltSolid className="srats" key="half" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <IoStarSharp
          className="srats"
          key={`empty-${i}`}
          style={{ color: "white" }}
        />
      );
    }

    return stars;
  };

  return (
    <div>
      {trustIndData && trustIndData.length > 0 ? (
        <OwlCarousel
          className="ol-cr-tr-nd"
          responsive={{
            0: {
              items: 1,
            },
            900: {
              items: 2,
            },
            1200: {
              items: 3,
            },
          }}
          autoplay={true}
          autoplayTimeout={3000}
          autoplayHoverPause={true}
          loop={true}
          autoHeight={true}
        >
          {trustIndData.map((item) => (
            <div className="eh-ol-itm" key={item.id}>
              <div className="rat-ind-us">{renderStars(item.rating)}</div>
              <span className="nm-us-tst">{item.name}</span>
              <p className="pgo-tr-ind scroll-baren">{item.review}</p>
            </div>
          ))}
        </OwlCarousel>
      ) : (
        <p>No review available</p>
      )}
    </div>
  );
}
