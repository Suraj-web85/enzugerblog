import React from "react";
import fbg from "@images/bgfamily.png";

function FBanner() {
  return (
    <div className="m-tb">
      <img
        src={fbg}
        style={{
          width: "100%",
          objectFit: "cover",
          overflow: "hidden",
        }}
        alt="Enzuger is a sugar Replacement For Family"
      />
    </div>
  );
}

export default FBanner;
