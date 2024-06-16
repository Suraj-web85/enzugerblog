import React, { useEffect } from "react";
import "../../styles/Contact.css";

import { FaLocationDot, FaS } from "react-icons/fa6";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa6";

const contactDetails = [
  {
    fieldName: "Address",
    icon: <FaLocationDot />,
    fieldValue:
      "Block No 81, J. B. Industrial Park, Valsad, Gujarat- 396045. INDIA.",
  },
  {
    fieldName: "Phone",
    icon: <BsFillTelephoneOutboundFill />,
    fieldValue: <a href="tel:+918928995511">+91 8928995511</a>,
  },
  {
    fieldName: "Email",
    icon: <MdAttachEmail />,
    fieldValue: <a href="mailto:care@enzuger.com">care@enzuger.com</a>,
  },
  {
    fieldName: "Business Hours",
    icon: <FaClock />,
    fieldValue: "Mon- Sat: 10:00 AM - 06:00 PM",
  },
];

function Contact() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  });
  return (
    <div className="contact-con con">
      <h1>We are here to help</h1>
      <div className="cta-div sflex">
        <div className="cta-sec">
          <h2 className="mh">We Would love to hear from you !</h2>
          <form className="cta-form sflex sspara">
            <input
              type="text"
              name="username"
              placeholder="Your Name*"
              id="name"
              aria-required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="7"
              required
              aria-required
              id="message"
            ></textarea>
            <button type="submit" className="para com-btn">
              Submit
            </button>
          </form>
        </div>
        <div className="cta-sec sflex">
          {contactDetails.map((i, index) => (
            <div key={index} className="cta-box sflex">
              <div className="cta-iconbox sflex">{i.icon}</div>
              <div className="cta-info">
                <b>{i.fieldName}</b>
                <p className="para">{i.fieldValue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
