import React, { useState } from "react";

import ProductImages from "./ProductImages";
import StarRating from "../common/Starcontainer";
import ProductDescription from "./ProductDescription";
import FBanner from "../FamilyBanner/FBanner";
import AdditionalInfo from "./AdditionalInfo";
import ReviewSection from "./ReviewSection";

function ProductSubscriptionBox({ dcPrice, subscriptionPrice }) {
  const [selectedOption, setSelectedOption] = useState("onetime");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="p-subs-box sflex">
      <div
        className={`psubs-bsec ${
          selectedOption === "onetime" && "active-radio"
        }`}
        onClick={() => handleOptionChange("onetime")}
      >
        <span className="g-circle"></span>
        <p className="para">₹ {dcPrice.toFixed(2)} &nbsp; One-time Purchase</p>
      </div>
      <div
        className={`psubs-bsec sflex ${
          selectedOption === "subscription" && "active-radio"
        }`}
        onClick={() => handleOptionChange("subscription")}
      >
        <span className="g-circle"></span>
        <p className="para">
          ₹ {subscriptionPrice.toFixed(2)} &nbsp; Subscribe &
          <span> save 10%</span>
        </p>
        <select className="sspara psubs-selector" name="" id="">
          <option value="0" defaultChecked>
            Delivery every 30 Days
          </option>
        </select>
        <ul className="para">
          <li>Free Shipping</li>
          <li>Never Run Out of Product</li>
          <li>Cancel Anytime</li>
        </ul>
      </div>
    </div>
  );
}

function ProductDetails({ product }) {
  const [selectedQty, setSelectedQty] = useState(1);

  const ogPrice = product.productMRP;
  const dcPrice = product.productOfferPrice;
  const subscriptionPrice = 494.1;

  return (
    <>
      <div className="pro-det-sec con sflex">
        <ProductImages product={product} />
        <div className="prod-detail sflex">
          <div className="instock-con">In stock</div>
          <div className="star-con">
            <StarRating rating={product.productRating} />
            <span className="total-reviews sspara"> (13 customer reviews)</span>
          </div>
          <h1 className="prod-name sh">{product.productTitle}</h1>
          <p className="prod-price">
            <del className="og-price spara">₹{ogPrice.toFixed(2)}</del>
            <span className="dc-price mpara">₹{dcPrice.toFixed(2)}</span>
          </p>
          <p className="prod-save">
            You Save: <b>₹{(ogPrice - dcPrice).toFixed(2)}</b>
          </p>
          <p className="para enpro-quan">Quantity</p>
          <form className="prod-no sflex">
            <span
              onClick={() => {
                if (selectedQty === 1 || selectedQty === null) {
                  setSelectedQty(1);
                } else {
                  setSelectedQty(selectedQty - 1);
                }
              }}
              className="mpara"
            >
              -
            </span>
            <input
              type="text"
              name="quantity"
              value={selectedQty}
              min="1"
              autoComplete="off"
              inputMode="numeric"
              onChange={(e) => {
                if (isNaN(e.target.value) || e.target.value === "") {
                  setSelectedQty(parseInt(0));
                } else {
                  setSelectedQty(parseInt(e.target.value));
                }
              }}
            />
            <span
              onClick={() => setSelectedQty(selectedQty + 1)}
              className="mpara"
            >
              +
            </span>
            <div className="sspara">ADD MORE SAVE MORE</div>
          </form>
          <ProductSubscriptionBox
            dcPrice={dcPrice}
            subscriptionPrice={subscriptionPrice}
          />
          <div className="prod-btn-con m-tb sflex">
            <button className="com-btn para" onClick={""}>
              Add to Cart
            </button>
            <button className="com-btn para">Buy Now</button>
          </div>
          <ul className="prod-oth-info para">
            <li>Cash on Delivery Available</li>
            <li>Free Door Delivery</li>
          </ul>
        </div>
      </div>
      <FBanner />
      <ProductDescription product={product} />
      <AdditionalInfo data={product.additionalInfo} />
      <ReviewSection
        commentsData={product.comments}
        Rating={product.totalRating}
      />
    </>
  );
}

export default ProductDetails;
