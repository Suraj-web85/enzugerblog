import React from "react";

function BlackNav() {
  const items = [
    "Cash on Delivery",
    "Natural Ingredients",
    "Free Door Delivery",
    "Monthly Subscription Available",
  ];

  return (
    <div className="eblack-header">
      <div className="ebl-head-div">
        <div className="eblack-header-con sflex">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <span className="w-circle"></span>
              <p className="para">{item}</p>
            </React.Fragment>
          ))}
        </div>
        <div className="eblack-header-con2 sflex">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <span className="w-circle"></span>
              <p className="para">{item}</p>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlackNav;
