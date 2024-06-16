import React from "react";

import { IoPerson, IoNotifications } from "react-icons/io5";

function TopNav() {
  let src = null;
  let name = "Shridhar";
  let noOfNotification = 2;
  return (
    <div className="e-tnav sflex">
      <h5 className="mpara">
        Hi, <span>{name}</span>
      </h5>
      <div className="etn-ibx sflex">
        <div className="etnbell-bx sflex">
          <IoNotifications className="etn-bell" />
          {noOfNotification !== 0 && (
            <span className="sflex">{noOfNotification}</span>
          )}
        </div>
        {src ? (
          <img src={src} className="etn-pfp" alt="" />
        ) : (
          <IoPerson className="etn-pfp" />
        )}
      </div>
    </div>
  );
}

export default TopNav;
