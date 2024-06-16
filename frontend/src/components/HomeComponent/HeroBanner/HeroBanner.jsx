import React, { useEffect } from "react";
import "./HeroBanner.css";

import EnzugerBottle from "@images/Enzugerbottle.webp";
import { Link } from "react-router-dom";
import StarRating from "../../common/Starcontainer";
import Aos from "aos";
import "aos/dist/aos.css";

function HeroBanner() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const totalreview = 201;
  const unitsSold = 5909;
  function formatUnitsSold(units) {
    if (units >= 1000) {
      return (units / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return units.toString();
  }
  const formattedUnitsSold = formatUnitsSold(unitsSold);
  return (
    <div className="hero-banner sflex">
      <div className="he-te-content sflex">
        <h1>
          <span>REPLACE</span>
          <span>ALL YOUR SWEETNERS</span>
          <span> WITH ENZUGER</span>
          <span>FOR BETTER HEALTH</span>
        </h1>
        <div className="ehesec-d sflex">
          <Link className="mh com-btn" to={"/shop"}>
            Shop Now
          </Link>
          <div className="ehba-con mpara">
            <StarRating className="ehba-stcon" rating={5} />
            <span>|</span>
            <p> {totalreview} Reviewed </p>
            <span>|</span>
            <p> {formattedUnitsSold} Units Sold</p>
          </div>
          <div className="ehba-con mpara">
            Patent applied in many countries including India. Patent granted in
            the USA.
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        className="he-img-content"
        style={{ backgroundImage: `url(${EnzugerBottle})` }}
      ></div>
    </div>
  );
}

export default HeroBanner;
