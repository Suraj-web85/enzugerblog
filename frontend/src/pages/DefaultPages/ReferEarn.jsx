import React, { useState } from "react";
import "../../styles/ReferEarn.css";

import ShareNew from "../../assets/share-new.svg";
import PurchaseNew from "../../assets/purchase-new.svg";
import EarnNew from "../../assets/earn-new.svg";

const ReferEarn = () => {
  const [isHidden, setIsHidden] = useState(true); // Corrected initialization

  const toggleDisplay = () => {
    setIsHidden(!isHidden);
  };

  let userNotLoggedIn = true;
  return (
    <>
      <div className="referContainer">
        <div className="refer-container-1">
          <div className="refer-content">
            <h1>Refer your friends and Earn</h1>
            <h2>VITA POINTS</h2>
            <p>(1 Vita Point = ₹1)</p>
          </div>

          <div className="refer-items-container">
            <div className="refer-con">
              <img src={ShareNew} alt="Share New Icon" />
              <h5>Share</h5>
              <br />
            </div>
            <p className="arrow">&#8594;</p>

            <div className="refer-con">
              <img src={PurchaseNew} alt="Share New Icon" />
              <h5>Purchase</h5>
              <br />
            </div>
            <p className="arrow">&#8594;</p>
            <div className="refer-con">
              <img src={EarnNew} alt="Share New Icon" />
              <h5>Earn</h5>
              <br />
            </div>
          </div>
          <div className="refer-con-1">
            <div className="con-1">
              <p>Share your Referral Code with friends</p>
            </div>
            <div className="con-1">
              <p>When your friends make 1st purchase using your code</p>
            </div>
            <div className="con-1">
              <p>You and Your friends earn 300 Vita Points</p>
            </div>
          </div>
        </div>

        <div className="refer-section-2">
          <div className="refer-box">
            {userNotLoggedIn ? (
              <p>
                Please login/ signup to start earning by referring your friends.
              </p>
            ) : (
              <p>
                Please make a purchase to start referring your friends. If you
                have already placed an order, please wait till it is delivered
              </p>
            )}
            {userNotLoggedIn ? (
              <button className="refer-btn">Yes! I want to Refer & Earn</button>
            ) : (
              ""
            )}
          </div>
          <hr className="horizontal-line" />
        </div>

        <div className="refer-terms-cond">
          <div className="top-refer-container">
            <h4>Refer & Earn T&C</h4>
            {isHidden ? (
              <button onClick={toggleDisplay} className="displayBtn">
                &#11206;
              </button>
            ) : (
              <button onClick={toggleDisplay} className="displayBtn">
                &#11205;
              </button>
            )}
          </div>
          <div style={{ display: isHidden ? "none" : "block" }}>
            <div className="inside-content">
              <div className="cond-1">
                <h4>Registration - Terms & Conditions</h4>
                <div className="content-1">
                  <h6>Referral Program</h6>
                  <p>
                    After your first Enzuger product purchase, you can start
                    referring and earn rewards for each referral. Get your
                    referral code by scanning the QR code on the product or wait
                    till the product is delivered to you (if purchased on
                    <span>
                      {" "}
                      <a href="https://enzuger.com/">Enzuger.com</a> )
                    </span>
                  </p>
                </div>
                <div className="content-1">
                  <h6>Invite your friend to get your free Vita dose</h6>
                  <p>
                    When your friends make their first purchase on
                    <span>
                      {" "}
                      <a href="https://enzuger.com/">Enzuger.com</a>
                    </span>{" "}
                    using your Referral Code, you earn 300 Vita Points and your
                    friends get an instant discount of Upto 300 INR. You can
                    redeem these Vita Points for your next purchase of Enzuger
                    products on
                    <span>
                      {" "}
                      <a href="https://enzuger.com/">Enzuger.com</a>
                    </span>
                  </p>
                  <p>How to use Vita Points</p>
                  <p>
                    Redeem these Vita Points during checkout. Each point is
                    worth 1 INR.
                  </p>
                </div>
                <div className="content-1">
                  <h6>Vita Points</h6>
                  <p>
                    1 Vita Point is equivalent to 1 INR There is no upper limit
                    on use of Vita Points
                  </p>
                  <p>
                    Vita Points will be credited only after expiry of return
                    period (14 days). No Vita Points will be rewarded against
                    cancelled or returned orders
                  </p>
                  <p>
                    Vita Points will be valid for next 1 year from the date of
                    credited
                  </p>
                  <p>
                    In case of cancellation (before dispatch), Vita Points
                    redeemed will remain valid. There will be no extension of
                    validity period. In case of cancellation after dispatch or
                    return, Vita Points redeemed will be null and void.
                  </p>
                </div>
                <div className="content-1">
                  <h6>Referral Discount</h6>
                  <p>
                    There is No limit on number of referrals and same referral
                    code can be shared with any number of friends
                  </p>
                  <p>
                    Referral code can only be used by your friends for their
                    First Purchase on{" "}
                    <span>
                      {" "}
                      <a href="https://enzuger.com/">Enzuger.com</a>
                    </span>
                  </p>
                  <p>
                    In case of cancellation, your friend will not be able to
                    re-use any referral codes
                  </p>
                  <p>
                    Referral code is valid on minimum cart value of Rs 1500 or
                    more. Maximum discount given will be 300 INR.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferEarn;
