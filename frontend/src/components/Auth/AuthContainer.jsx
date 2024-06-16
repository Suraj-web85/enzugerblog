import React, { useEffect, useState } from "react";
import bgimg1 from "@images/svg/login.svg";
import bgimg2 from "@images/svg/otp.svg";
import { IoCloseCircleOutline } from "react-icons/io5";

import AuthHeader from "./AuthHeader";
import LoginForm from "./LoginForm";
import OTPForm from "./OTPForm";

import "./Auth.css";

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
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const [showResendBtn, setShowResendBtn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (phoneNumber.length === 10) {
      setPage(2);
      setErrorMessage("");
    } else {
      setErrorMessage("Please enter a valid 10-digit phone number.");
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

  const handleOtpChange = (value) => {
    setOtp(value);
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

  const validateOtp = () => {
    if (otp.length === 6) {
      // Add your OTP validation logic here
      console.log("OTP validated:", otp);
    } else {
      alert("Please enter a valid OTP.");
    }
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
        <AuthHeader page={page} data={data} />
        {page === 1 ? (
          <LoginForm
            phoneNumber={phoneNumber}
            handleInputChange={handleInputChange}
            handleLogin={handleLogin}
            errorMessage={errorMessage}
          />
        ) : (
          <OTPForm
            phoneNumber={phoneNumber}
            otp={otp}
            setOtp={setOtp}
            handleOtpChange={handleOtpChange}
            handleChangeNumber={handleChangeNumber}
            handleResendOTP={handleResendOTP}
            showResendBtn={showResendBtn}
            timer={timer}
            setPage={setPage}
            validateOtp={validateOtp}
          />
        )}
        <IoCloseCircleOutline
          className="auth-cls-btn"
          onClick={handleCloseForm}
        />
      </div>
    </div>
  );
}

export default Auth;
