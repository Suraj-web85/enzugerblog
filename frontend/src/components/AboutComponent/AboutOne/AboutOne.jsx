import React from "react";
import "./AboutOne.css";
import TopHeader from "../../TopHeader/TopHeader";
import TimeLine from "../TimeLine/TimeLine";

const AboutOne = () => {
  return (
    <>
      <TopHeader
        mainHead="WHO WE ARE"
        subData="We are a group of Scientists and Technocrats, teamed up to venture into R & D, determined to come up with unique healthy nutritional products for overall good health."
      />

      <div className="about-container-2" id="tophead">
        <hr />
        <p>
          <span className="boldText">Our purpose</span> is to convert our
          research into revolutionary nutraceutical products that will help the
          elderly, young and children live healthier while enjoying the foods of
          their choice. Our food products will help improve the quality of lives
          of all.
        </p>
        <p>
          We are committed to research work for developing innovative health and
          nutraceutical products, make them available across the country and
          globe.
        </p>
        <br />
        <p>
          <span className="boldText">Our Vision</span> is to reach all kitchens
          with healthier alternatives and thus help the world live healthier.
          Our innovations should redefine health products afresh.
        </p>
        <hr />
      </div>

      <div className="about-container-3 con">
        <div className="columnAbout1">
          <TimeLine />
        </div>
        <div className="columnAbout">
          <h4>Our Journey</h4>
          <p className="para">
            We realized the need that inspired us to take up the research of
            genuine healthy sweeteners and nutraceutical products. We succeeded
            after years of hard work and developed the Enzuger range of products{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutOne;
