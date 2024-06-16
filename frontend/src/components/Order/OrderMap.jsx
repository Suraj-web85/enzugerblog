import React from "react";
import { Link } from "react-router-dom";
import HomeProdData from "../../assets/data/HomePrdData.json";
import { IoStarSharp } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { LiaStarHalfAltSolid } from "react-icons/lia";
import { IoIosCheckmarkCircle } from "react-icons/io";

function OrderMap() {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<IoStarSharp className="pd-srs" key={i} />);
    }
    if (hasHalfStar) {
      stars.push(<LiaStarHalfAltSolid className="srats" key="half" />);
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <IoStarSharp
          className="pd-srs"
          style={{ color: "grey" }}
          key={`empty-${i}`}
        />
      );
    }

    return stars;
  };
  if (!Array.isArray(HomeProdData) || HomeProdData.length === 0) {
    return <p>No products available</p>;
  }
  return (
    <>
      {HomeProdData.map((item) => {
        return (
          <div className="sb-cdt-ctr" key={item.id}>
            <div className="pr-dt-ig-fst">
              <img src={`/images/${item.img}`} alt="" className="prd-ig" />
            </div>
            <div className="p-rl-tm-ch-raat">
              <div className="pr-ct-ls-sd">
                <div className="rts-rv-ws">
                  <div>{renderStars(item.Rating)}</div>
                  <span className="sflex">
                    {item.Rating} | ({item.Reviews}){" "}
                    <IoIosCheckmarkCircle className="right-checkmark" />
                  </span>
                </div>
                <div className="pf-dts-off mb-rp">
                  <span className="ft-cl-be  fsz-re .df-al-cnr">
                    <FaRupeeSign className="rp-icn" />
                    {item.DiscountPrice}
                  </span>
                  {"  "}
                  <span className="fn-cr-gr fsz-re .df-al-cnr">
                    <FaRupeeSign />
                    {item.ActualPrice}
                  </span>
                  {"  "}
                  <span className="pct-ff fsz-re">{item.PercentOff}% OFF</span>
                </div>

                <Link
                  to={`/product/${item.id}`}
                  className="ft-cl-be ft-sz-th-sa link-no-underline on-hver-underline"
                >
                  {item.ProductTitle}
                </Link>
              </div>

              <Link to="/cart" className="ad-cr-bt-dv link-no-underline">
                <button type="button" className="ad-tocr-bn">
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default OrderMap;
