import React from "react";

const TopHeader = (props) => {
  return (
    <div className="about-container-1">
      <div className="about-head">
        <h1>{props.mainHead}</h1>
        <br />
        <p>{props.subData}</p>
      </div>
    </div>
  );
};

export default TopHeader;
