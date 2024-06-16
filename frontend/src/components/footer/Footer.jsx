import React from "react";
import "./Footer.css";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer sflex">
      <div className="footer-div">
        <div className="footer-sec sflex">
          <h5>sign up for updates & promotions</h5>
          <form action="#" className="footer-form">
            <input
              type="email"
              required
              name="email"
              placeholder="Enter Your Email"
              id="email"
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="footer-sec sflex">
          <h5 className="footer-heading">looking for?</h5>
          <Link to="/">Diabetes</Link>
          <Link to="/">Health Conscious</Link>
          <Link to="/">PCOS</Link>
          <Link to="/">Elderly</Link>
          <Link to="/">Pregnancy</Link>
          <Link to="/">Children</Link>
        </div>
        <div className="footer-sec sflex">
          <h5 className="footer-heading">HELP</h5>
          <Link to="/faq">FAQ's</Link>
          <Link to="/about">About Us</Link>
          <Link to="/">Reveiws</Link>
          <Link to="/refer-and-earn">Refer & Earn</Link>
          <Link to="/">My Account</Link>
          <Link to="/contact-us/">Contact Us</Link>
        </div>
        <div className="footer-sec sflex">
          <h5 className="footer-heading">Quick access</h5>
          <Link to="/shop">Shop</Link>
          <Link to="/">Blog</Link>
          <Link to="/why-enzuger">Why Enzuger?</Link>
          <Link to="/delivery-and-payments">Delivery, Returns & Refunds</Link>
          <Link to="/terms-and-conditions">Terms & Privacy</Link>
        </div>
      </div>
      <div className="footer-div sflex">
        <p>© 2022 Enzuger. All Rights Reserved.</p>
        <div className="footer-social-icons sflex">
          <Link
            to="https://www.facebook.com/enzuger/"
            className="footer-social-icon sflex"
          >
            <FaFacebook />
          </Link>
          <Link
            to="https://www.instagram.com/enzuger.india/"
            className="footer-social-icon sflex"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
      <div className="footer-div">Proudly INDIAN</div>
    </footer>
  );
}

export default Footer;
