import React from "react";
import StarRating from "./Starcontainer";

import { IoPersonCircleOutline } from "react-icons/io5";

function Review({ review }) {
  return (
    <div className="review-box">
      <IoPersonCircleOutline className="review-bx-plogo" />
      <div className="review-box-col sflex">
        <div className="re-bx-sec sflex">
          <div className="review-box-div">
            <StarRating rating={review.rating} />
            <p className="para">{review.username}</p>
          </div>
          <p className="para">{review.commentDate}</p>
        </div>
        <p className="re-bx-sec para">{review.comment}</p>
      </div>
    </div>
  );
}

export default Review;
