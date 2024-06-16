import React, { useState, useRef } from "react";

const OTPInput = ({ length, otp, setOtp }) => {
  const [inputValues, setInputValues] = useState(new Array(length).fill(""));
  //   const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef(new Array(length).fill(null));

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, "");
    if (value.length > 1) return;

    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
    
    setOtp(newInputValues.join(""));

    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !inputValues[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData
      .getData("text")
      .split("")
      .slice(0, length);
    const newInputValues = pasteData.map((char, index) =>
      char.replace(/[^0-9]/g, "")
    );
    setInputValues(newInputValues);
    setOtp(newInputValues.join(""));
    const nextFocusIndex = pasteData.length - 1;
    if (nextFocusIndex < length) {
      inputRefs.current[nextFocusIndex].focus();
    }
  };

  return (
    <div className="otp-input-container">
      {inputValues.map((data, index) => (
        <input
          key={index}
          type="text"
          className="otp-input"
          value={data}
          maxLength={1}
          ref={(el) => (inputRefs.current[index] = el)}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onFocus={(e) => e.target.select()}
          onPaste={handlePaste}
        />
      ))}
    </div>
  );
};

export default OTPInput;
