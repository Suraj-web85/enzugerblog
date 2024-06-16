import React from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import OTPInput from "./OTPInput";

const OTPForm = ({
  phoneNumber,
  otp,
  setOtp,
  handleChangeNumber,
  handleResendOTP,
  showResendBtn,
  timer,
  validateOtp,
}) => {
  return (
    <div className="auth-div main-otp">
      <div className="go-back-btn para sflex" onClick={handleChangeNumber}>
        <IoArrowBackSharp /> &nbsp; Go Back
      </div>
      <div className="otp-container sflex para">
        <p>Please enter the OTP sent to</p>
        <p>
          {phoneNumber}{" "}
          <span className="change-number" onClick={handleChangeNumber}>
            Change
          </span>
        </p>
        <OTPInput length={6} otp={otp} setOtp={setOtp} />
        {showResendBtn ? (
          <p onClick={handleResendOTP} className="resend-otp-btn">
            Resend OTP
          </p>
        ) : (
          <p>
            Resend in : <span>{timer}</span>
          </p>
        )}
        <div className="consent-checkbox sflex">
          <input type="checkbox" id="consent" required />
          <label htmlFor="consent" className="sspara">
            I consent to receive communication from Enzuger Pvt. Ltd.
          </label>
        </div>
        <button className="com-btn" onClick={validateOtp}>
          Validate OTP
        </button>
      </div>
    </div>
  );
};

export default OTPForm;
