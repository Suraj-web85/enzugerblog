import React from "react";
import "./Second.css";

const Second = (props) => {
  const containerClass = props.flipLayout
    ? "container-2 flipped"
    : "container-2";

  return (
    <div className={`con ${containerClass}`} >
      <div data-aos="fade-up" className="col-2">
        <h6 className="h6">{props.heading}</h6>
        <h3 className="h3">{props.subHeading}</h3>
      </div>
      <div className="col-3">
        <div className="content-box">
          {/* Conditional rendering of image */}
          {props.imageProperty ? (
            <img src={props.imageSrc} alt={props.imageAlt} />
          ) : (
            <div data-aos="fade">
              <p>{props.content1}</p>
              <br />
              <p>{props.content2}</p>
              <br />
              <p>{props.content3}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Second;
