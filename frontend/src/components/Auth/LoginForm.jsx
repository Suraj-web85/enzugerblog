import React from "react";

const LoginForm = ({ phoneNumber, handleInputChange, handleLogin, errorMessage }) => {
  return (
    <div className="auth-div sflex">
      <p className="sh">Login/Signup</p>
      <form action="#" className="login-form sflex" onSubmit={handleLogin}>
        <label htmlFor="number">Mobile Number</label>
        <input
          className="sspara"
          type="text"
          name="number"
          placeholder="Enter 10 digit no."
          id="number"
          inputMode="numeric"
          maxLength={10}
          value={phoneNumber}
          onChange={handleInputChange}
        />
        {errorMessage && <p className="login-err-msg">{errorMessage}</p>}
        <button type="submit" className="com-btn">Login via OTP</button>
      </form>
    </div>
  );
};

export default LoginForm;
