import React, { useEffect, useState } from "react";
import Review from "./Review";

import "./common.css";

function ReviewContainer({ comments }) {
  const [noOfComments, setNoOfCommments] = useState(4);
  return (
    <div className="review-contain">
      {!comments ? (
        <div className="no-comment mpara"> There are no Reviews Yet </div>
      ) : (
        comments.length !== 0 &&
        comments
          .slice(0, noOfComments)
          .map((i, index) => <Review key={index} review={i} />)
      )}
      {noOfComments < comments.length && (
        <button
          onClick={() => setNoOfCommments(noOfComments + 4)}
          className="para show-cmt-btn com-btn"
        >
          Show More
        </button>
      )}
    </div>
  );
}

export default ReviewContainer;
