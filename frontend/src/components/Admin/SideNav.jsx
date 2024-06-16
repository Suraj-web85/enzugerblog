import React, { useState, useEffect } from "react";
import navItems from "../../assets/data/AdminSideNav";
import Enzugerlogo from "../../assets/images/logo.webp";
import { FaAngleLeft } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

function SideNavItem({ item, activeLink, setActiveLink }) {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <div className={`en-sib-item para ${open && "open"}`}>
        <div className="en-sib-title sflex" onClick={() => setOpen(!open)}>
          <span className="sflex">
            {item.icon && <img src={item.icon} />}
            {item.title}
          </span>
          <FaAngleLeft
            className="en-sib-toggle-btn"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => (
            <SideNavItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <Link
        onClick={() => setActiveLink(item.path)}
        to={item.path || "#"}
        className={`en-sib-item para sflex plain ${
          activeLink === item.path && "esnav-active"
        }`}
      >
        {item.icon && <img src={item.icon} />}
        {item.title}
      </Link>
    );
  }
}

function SideNav() {
  const [activeLink, setActiveLink] = useState("dashboard");
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname.split("/")[2]);
  }, [location.pathname]);

  return (
    <nav className="e-snav sflex">
      <Link to="/">
        <img className="en-ad-logo" src={Enzugerlogo} alt="" />
      </Link>
      {navItems.map((item, index) => (
        <SideNavItem
          key={index}
          item={item}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
      ))}
    </nav>
  );
}

export default SideNav;
