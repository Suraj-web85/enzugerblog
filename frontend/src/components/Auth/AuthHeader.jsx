import React from "react";

const AuthHeader = ({ page, data }) => {
  return (
    <div className="auth-div sflex" style={{ backgroundImage: `url(${data[page - 1].bgImg})` }}>
      <h1 className="sh">{data[page - 1].title}</h1>
      <p className="sspara">{data[page - 1].desc}</p>
    </div>
  );
};

export default AuthHeader;
