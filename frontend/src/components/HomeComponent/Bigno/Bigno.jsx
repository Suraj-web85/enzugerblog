import React from "react";
import Heading from "../../common/Heading";

import bignodata from "../../../assets/data/bigno";
import "./Bigno.css";

function Bigno() {
  return (
    <div className="bnsec sflex con">
      <Heading name="BIG NO" />
      <div className="reason-con sflex">
        {bignodata.map((item,index) => (
          <div className="reason" key={index}>
            <h3 className="sh">{item.title}</h3>
            <p className="mpara">{item.description}</p>
            <div className="reason-images sflex">
              {item.titImg.map((i,index) => (
                <div key={index} className="reason-img sflex">
                  <img className="bigno-img" src={i.img} alt="" />
                  <p className="para">{i.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bigno;
