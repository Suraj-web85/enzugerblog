import React from "react";
import "./Fourth.css";

const data = [
  "1:1 Sugar Replacement",
  "Taste like sugar, use like sugar",
  "Improves taste and flavor profile",
  "Clean, No after-bitter taste",
  "No metallic Taste",
  "Maintains a smooth and creamy texture in cold recipes",
  "Can be used for cooking, baking, confectionary, etc.",
];

const Fourth = () => {
  return (
    <div className="main-container-1">
      <div className="header-section con">
        <h2>
          We've done the science to serve you Sugar Replacement brilliantly!
        </h2>
      </div>
      <div className="container-4 con sflex">
        <div className="column2" data-aos="fade-up">
          <h4>Offers</h4>
          <h2>EASE OF USE</h2>
        </div>
        <div className="column3">
          {data.map((item, index) => (
            <p data-aos="fade-left" className="mpara" key={index}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fourth;
