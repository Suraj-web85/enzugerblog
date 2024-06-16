import React from "react";
import "./whyenzuger.css";

import ratioimg from "@images/1ratio1.svg";
import plate from "@images/lovelyplate.svg";
import energy from "@images/energy.svg";
import gi from "@images/LowGI.webp";
import lowinsulindiet from "@images/lowinsulindiet.webp";

import { Link } from "react-router-dom";

function Whyenzuger() {
  return (
    <div className="whyenzuger con">
      <div className="whe-div">
        <h2 data-aos="fade-up" data-aos-duration="500">
          WHY <span>ENZUGER ?</span>
        </h2>
        <p className="mpara">
          ENZUGER has NO Glucose, NO sugar, and NO artificial sweeteners. It is
          classified as a Super Specialty healthy Nutrition due to its very low
          insulin load. It is as sweet and tasty as sugar, with no aftertaste
          and no compromise on taste. Enriched with prebiotics, enzymes, and
          dietary soluble fibers, ENZUGER is a next generation sweetener for all
          individuals.
        </p>
        <div className="whe-img-con sflex">
          <div className="whe-img sflex">
            <img src={ratioimg} alt="" />
            <p className="para">Sweet like Sugar, Use like Sugar</p>
          </div>
          <div className="whe-img sflex">
            <img src={plate} alt="" />
            <p className="para">Essential Nutrition</p>
          </div>
          <div className="whe-img sflex">
            <img src={energy} alt="" />
            <p className="para">Imparts Sustained Energy</p>
          </div>
        </div>
        <Link to="/why-enzuger" className="com-btn">
          Learn More
        </Link>
      </div>
      <div className="whe-div sflex">
        <img src={gi} alt="" />
        <h3 className="mh">Glycemic Index (GI) less than 20</h3>
        <p className="mpara">
          Choosing the low GI means choosing the sustained energy for your body.
          The above diagram explains how High GI food impacts your blood
        </p>
      </div>
      <div className="whe-div sflex">
        <img src={lowinsulindiet} alt="" />
        <h3 className="mh">Low Insulin Load Diet</h3>
        <p className="mpara">
          Insulin is a central regulatory hormone for our bodies’ handling of
          food energy. High insulin levels cause sugar to be taken out of the
          bloodstream and turned into fat in the fat cells.
        </p>
      </div>
    </div>
  );
}

export default Whyenzuger;
