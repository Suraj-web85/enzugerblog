import React from "react";
import "./IndulEvery.css";

import imagesData from "../../../assets/data/IndulData.json";

import MidIndulEve from "./MidIndulEve";

function IndulEvery() {
  return (
    <>
      <div className="mn-sec-indul con">
        <div className="sub-sc-indul tsd-md-bth-av">
          <div className="first-col">
            <div className="fs-mn-hd-cn">
              <h1 className="mn-hd">INDULGE,</h1>
              <h2 className="evy-hd">EVERYDAY!</h2>
            </div>
            <p className="tx-ind-par">
              It’s important to choose the right nutrition for your health,
              especially when it comes to the food you enjoy. That’s why we have
              Enzuger. Enzuger is a 1:1 sugar replacement that can be used for
              cooking, baking, confectionary, etc. Enzuger is a direct
              substitute for sugar in all recipes where the taste, texture, and
              consistency of sugar are an integral part
            </p>
            <div className="sx-mg-sec">
              {imagesData.map((item, index) => (
                <div key={index} className="fd-im-cmp">
                  <img src={`/images/${item.img}`} alt="fghjk" />
                  <p className="sm-tit-ch-im">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="sec-lg-srn">
            <MidIndulEve />
          </div>
        </div>
      </div>
    </>
  );
}
export default IndulEvery;
