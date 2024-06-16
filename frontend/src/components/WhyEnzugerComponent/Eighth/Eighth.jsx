import React from "react";
import "./Eighth.css";
import Seventh from "../Seventh/Seventh";
import EnzugerWorks from "../../../assets/How-Enzuger-Works 1.png"

const Eighth = () => {
  return (
    <div className="main-container-8">
      <Seventh
      showBenefits={true}
        headSec="HOW IT WORKS ?"
        subSec="If you include in your diet ~ 20-25 gms of Enzuger a day i.e. 5-10% of your Daily calories intake, chances are you’re eating a diet that not only helps lower glycemic and insulin response but also delivers balanced amounts of carbohydrates."
      />
      <img src={EnzugerWorks} alt="" />
    </div>
  );
};

export default Eighth;
