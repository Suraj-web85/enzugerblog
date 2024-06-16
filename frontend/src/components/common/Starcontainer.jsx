import React from "react";

const StarRating = ({ rating }) => {
  const maxRating = 5;
  const filledStars = Math.floor(rating);
  const remainingStars = maxRating - filledStars;

  return (
    <div className="star-rating">
      {[...Array(filledStars)].map((_, index) => (
        <span key={index} className="star filled-star">
          ★
        </span>
      ))}
      {[...Array(remainingStars)].map((_, index) => (
        <span key={filledStars + index} className="star">
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
