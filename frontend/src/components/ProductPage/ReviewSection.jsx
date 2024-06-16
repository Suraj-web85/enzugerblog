import React, { useEffect } from "react";
import Heading from "../common/Heading";
import ReviewContainer from "../common/ReviewContainer";
import ReviewBox from "./ReviewBox";
import StarRating from "../common/Starcontainer";

import { MdEditNote } from "react-icons/md";

function ReviewSection({ commentsData, Rating }) {
  return (
    <div className="con review-sec sflex">
      <Heading name="CUSTOMERS LOVE ENZUGER" />
      <div className="review-div sflex m-tb         ">
        <div className="review-col">
          {commentsData ? (
            <>
              <p className="sh">
                {Rating} &nbsp; <StarRating rating={Rating} />
              </p>
              <p className="para">Based on {commentsData.length} reviews</p>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="review-col sflex mpara">
          <MdEditNote className="mh" /> &nbsp; Write a Review
        </div>
      </div>
      <div className="review-div sflex m-tb">
        <ReviewContainer comments={commentsData} />
        <ReviewBox />
      </div>
    </div>
  );
}

export default ReviewSection;
