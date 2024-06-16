import React from "react";
import "./Fifth.css";
import Low_Gi from "../../../assets/LowGi.png";

const Fifth = () => {
  return (
    <div className="main-container-5 sflex con">
      <div className="header-sec-1">
        <div data-aos="fade-up">
          <h4>Low GI</h4>
          <h2>ENZUGER</h2>
        </div>
        <p className="mpara">
          Choosing the low GI means choosing the sustained energy for your body.
          The diagram explains how High GI food impacts your blood glucose and
          how Low GI provides smooth and sustained energy to your body.
        </p>
        <br />
        <p className="mpara">
          A Low GI diet is for all individuals who aspire to be healthy. A
          diabetic and PCOS finds great help with low GI diets. They find more
          energetic and fuller for longer.
        </p>
      </div>
      <div className="img-sec sflex">
        <img src={Low_Gi} alt="" />
      </div>
    </div>
  );
};

export default Fifth;
