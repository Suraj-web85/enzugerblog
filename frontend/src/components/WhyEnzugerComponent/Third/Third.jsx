import React from "react";
import "./Third.css";
import icon_1 from "../../../assets/icon-1.png";
import icon_2 from "../../../assets/icon2.png";
import icon_3 from "../../../assets/icon3.png";
import icon_4 from "../../../assets/icon4.png";
import icon_5 from "../../../assets/icon5.png";
import icon_6 from "../../../assets/icon6.png";

const Third = () => {
  return (
    <div>
      <div className="main-container con">
        <div data-aos="fade-up" className="header-content sflex">
          <h4>Enzuger keeps bad aside!</h4>
          <h2>WHATS NOT IN ENZUGER!</h2>
        </div>
        <div className="container-3 sflex">
          <div className="column1">
            <h4 className="mh">Reason #1</h4>
            <p className="mpara">
              A sweetener should be pleasantly sweet so we say a big No for
              bitter aftertaste or lingering sweetness. NO sugar is the added
              benefit of our sweetener.
            </p>
            <div className=" sflex img-content">
              <div className="con1">
                <img src={icon_1} alt="" />
                <h6 className="para">
                  No <br /> After Taste
                </h6>
              </div>
              <div className="con1">
                <img src={icon_2} alt="" />
                <h6 className="para">
                  No <br /> Sugar
                </h6>
              </div>
            </div>
          </div>
          <div className="column1">
            <h4 className="mh">Reason #2</h4>
            <p>
              We get energy from natural foods. We need energy all the time;
              when we run, jump, sing, and even when we sleep. Enzuger is packed
              with energy, contains NO Artificial Sweeteners and any other Low
              or Zero Calorie sweeteners.
            </p>
            <div className="sflex img-content">
              <div className="con1">
                <img src={icon_4} alt="" />
                <h6 className="para">
                  No Artificial <br /> Sweetner
                </h6>
              </div>
              <div className="con1">
                <img src={icon_5} alt="" />
                <h6 className="para">
                  No <br /> Fragrance
                </h6>
              </div>
              <div className="con1">
                <img src={icon_6} alt="" />
                <h6 className="para">
                  No Added <br />
                  Color
                </h6>
              </div>
              <div className="con1">
                <img src={icon_3} alt="" />
                <h6 className="para">
                  No <br /> Preservatives
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
