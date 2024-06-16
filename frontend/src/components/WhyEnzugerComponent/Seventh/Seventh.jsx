import React from "react";
import "./Seventh.css";

const benefit_data = [
  "Sustained Energy",
  "Reduce Breast Cancer Risk",
  "Preventing PCOS",
  "Eye Health",
  "Heart health",
  "Manage Acne",
  "Increase Mental Performance",
  "Gestational Diabetes",
  "Maximize Sports Performance",
  "Achieve or Maintain a Healthy Weight",
];

const Seventh = (props) => {
  if (props.showBenefits) {
    return (
      <div className="main-container-7">
        <div className="head-con">
          <h2>{props.headSec}</h2>
          <p>{props.subSec}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="main-container-7 con">
      <div className="head-con" data-aos="fade-up">
        <h2>{props.headSec}</h2>
        <p className="mpara">{props.subSec}</p>
      </div>

      <div className="benefits-section sflex">
        {benefit_data.map((item, index) => (
          <h6 key={index} data-aos="fade-up">
            <span className="circle">&#10004;</span> &nbsp;{item}
          </h6>
        ))}
      </div>
    </div>
  );
};

export default Seventh;
