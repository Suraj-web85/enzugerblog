import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./ReviewBox.css";

import { MdEditNote } from "react-icons/md";

const Star = ({ filled, onClick }) => {
  return (
    <span className={`cmt-star ${filled ? "filled" : ""}`} onClick={onClick}>
      &#9733;
    </span>
  );
};

function ReviewBox() {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
    reset,
  } = useForm();
  const [rating, setRating] = useState(0);
  const onSubmit = async (data) => {
    // try {
    //   const token = localStorage.getItem("jwt");
    //   const response = await fetch("/api/comments", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //     body: JSON.stringify({ ...data, rating }),
    //   });

    //   if (response.ok) {
    //     reset();
    //     setRating(0);
    //   } else {
    //     console.error("Failed to submit comment");
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }
    console.log(data);
  };

  const handleRatingClick = (value) => {
    setRating(value);
    setValue("rating", value);
    trigger("rating");
  };

  return (
    <div className="cmt-box">
      <div className="sh sflex m-tb">
        <MdEditNote className="mh" /> &nbsp; Write a Review
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="cmt-form">
        <p className="para">
          Your email address will not be published. <br /> Required fields are
          marked <span style={{ color: "red" }}>*</span>
        </p>
        <label className="para">
          Your rating <span style={{ color: "red" }}>*</span>
        </label>
        <div className="rating-con">
          {[1, 2, 3, 4, 5].map((value) => (
            <Star
              key={value}
              filled={value <= rating}
              onClick={() => handleRatingClick(value)}
            />
          ))}
        </div>
        <input
          type="hidden"
          value={rating}
          {...register("rating", {
            required: "Rating is required",
            validate: (value) => value > 0 || "Please give Rating",
          })}
        />
        {errors.rating && (
          <span className="review-err sspara">{errors.rating.message}</span>
        )}

        <label className="para">
          Your review <span style={{ color: "red" }}>*</span>
        </label>
        <textarea {...register("review", { required: true })}></textarea>
        {errors.review && (
          <span className="review-err sspara">Review is required</span>
        )}
        <button type="submit" className="para com-btn m-tb">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ReviewBox;
