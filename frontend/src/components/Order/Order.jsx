import React from "react";
import "./Order.css";
import OrderMap from "./OrderMap";
import { BrowserRouter as Router } from "react-router-dom";
import Heading from "../common/Heading";

export default function Order() {
  return (
    <div className="mn-cn-ord-nw con m-tb">
      <div className="or-hd sflex">
        <Heading name={"ORDER NOW"} />
      </div>
      <div className="mn-pr-cr m-tb">
        <OrderMap />
      </div>
    </div>
  );
}
