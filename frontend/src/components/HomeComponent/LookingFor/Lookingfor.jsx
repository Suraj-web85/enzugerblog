import React from "react";
import "./Lookingfor.css";

import { BsBoxArrowUpRight } from "react-icons/bs";
import lfdata from "../../../assets/data/lookingfor";

import Heading from "../../common/Heading";
import { Link } from "react-router-dom";

function Lookingfor() {
  return (
    <div className="lfsec sflex con">
      <Heading name="Looking For?" />
      <p className="sub-heading mpara">
        Enzuger is for all. Just click on know more, and you will get all the
        information just for you.
      </p>
      <div className="lfgrid">
        {lfdata.map((item) => (
          <Link to={item.url} className="lfitem sflex" key={item.id}>
            <img src={item.img} alt="" />
            <p className="mpara">{item.title}</p>
            <Link className="com-btn sflex para" to={item.url}>
              Learn More <BsBoxArrowUpRight className="en-exit-sym" />
            </Link>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Lookingfor;
