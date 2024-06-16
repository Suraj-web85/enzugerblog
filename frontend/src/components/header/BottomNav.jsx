import React from "react";
import { NavLink } from "react-router-dom";

import { BsFillPersonLinesFill, BsShop } from "react-icons/bs";
import { GoNote } from "react-icons/go";

function BottomNav({ activeLink, setActiveLink }) {
  return (
    <nav>
      <ul className="Bottom-Nav sflex">
        <li>
          <NavLink
            className={({ isActive }) => `blink ${isActive && "balink"}`}
            to="/shop"
          >
            <div className="bottom_nav_icon_con">
              <BsShop />
              <h5>Shop</h5>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => `blink ${isActive && "balink"}`}
            to="/myaccount"
          >
            <div className="bottom_nav_icon_con">
              <BsFillPersonLinesFill />
              <h5>MyAccount</h5>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => `blink ${isActive && "balink"}`}
            to="/blog"
          >
            <div className="bottom_nav_icon_con">
              <GoNote />
              <h5>Blog</h5>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default BottomNav;
