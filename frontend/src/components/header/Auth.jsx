import React, { useEffect, useState } from "react";
import bgimg1 from "@images/svg/login.svg";
import bgimg2 from "@images/svg/otp.svg";

import { IoCloseCircleOutline, IoArrowBackSharp } from "react-icons/io5";

const data = [
  {
    title: "Login/SignUp",
    desc: "Get access to personalised Shopping experience",
    bgImg: bgimg1,
  },
  {
    title: "OTP",
    desc: "One time password has been sent to your registered mobile number",
    bgImg: bgimg2,
  },
];

function Auth({ setActiveLogin }) {
  const [page, setPage] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState();
  const [otp, setOtp] = useState();
  const [timer, setTimer] = useState(30);
  const [showResendBtn, setShowResendBtn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (phoneNumber.length === 10) {
      setPage(2);
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    const numericValue = value.replace(/[^0-9]/g, "");  
    setPhoneNumber(numericValue);
  };

  const handleCloseForm = () => {
    setActiveLogin(false);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleResendOTP = () => {
    setTimer(30);
    setShowResendBtn(false);
  };

  const handleChangeNumber = () => {
    setPage(1);
    setPhoneNumber("");
    setOtp("");
    setTimer(30);
    setShowResendBtn(false);
  };

  useEffect(() => {
    let interval = null;
    if (page === 2 && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setShowResendBtn(true);
    }
    return () => clearInterval(interval);
  }, [page, timer]);

  return (
    <div className="login-con sflex">
      <div className="login-con-content sflex">
        <div
          className="auth-div sflex"
          style={{ backgroundImage: `url(${data[page - 1].bgImg})` }}
        >
          <h1 className="sh">{data[page - 1].title}</h1>
          <p className="sspara">{data[page - 1].desc}</p>
        </div>
        {page === 1 ? (
          <div className="auth-div sflex">
            <p className="sh">Login/Signup</p>
            <form
              action="#"
              className="login-form sflex"
              onSubmit={handleLogin}
            >
              <label htmlFor="number">Mobile Number</label>
              <input
                className="sspara"
                type="text"
                name="number"
                placeholder="Enter 10 digit no."
                id="number"
                // required={true}
                inputMode="numeric"
                maxLength={10}
                value={phoneNumber}
                onChange={handleInputChange}
              />
              <button type="submit" className="com-btn">
                Login via OTP
              </button>
            </form>
          </div>
        ) : (
          <div className="auth-div">
            <div className="go-back-btn para sflex" onClick={() => setPage(1)}>
              <IoArrowBackSharp /> &nbsp; Go Back
            </div>
            <div className="otp-container">
              <p>Please enter the OTP sent to</p>
              <p>
                {phoneNumber}{" "}
                <span className="change-number" onClick={handleChangeNumber}>
                  Change
                </span>
              </p>
              <div className="otp-input-container">
                <input
                  type="text"
                  value={otp}
                  onChange={handleOtpChange}
                  maxLength={6}
                />
              </div>
              {showResendBtn ? (
                <p onClick={handleResendOTP} className="resend-otp-btn">
                  Resend OTP
                </p>
              ) : (
                <p>
                  Resend in: <span>{timer}</span>
                </p>
              )}
              <div className="consent-checkbox">
                <input type="checkbox" id="consent" />
                <label htmlFor="consent">
                  I consent to receive communication from Brightlifecare Pvt.
                  Ltd.
                </label>
              </div>
              <button className="com-btn">Validate OTP</button>
            </div>
          </div>
        )}
        <div className="auth-div"></div>
        <IoCloseCircleOutline
          className="auth-cls-btn"
          onClick={handleCloseForm}
        />
      </div>
    </div>
  );
}

export default Auth;
