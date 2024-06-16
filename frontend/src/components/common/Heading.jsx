import React, { useEffect } from "react";
import "./common.css";

function Heading(props) {
  return (
    <h2 data-aos="fade-up" className="mheading">
      {props.name}
    </h2>
  );
}

export default Heading;
