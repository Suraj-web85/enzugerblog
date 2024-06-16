import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function BreadCrumb() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState();
  let currentLink = "";
  useEffect(() => {
    const pathSegments = location.pathname
      .split("/")
      .filter((crumb) => crumb !== "");
    setCurrentPage(pathSegments[pathSegments.length - 1]);
  }, [location.pathname]);

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "" && crumb !== "admin")
    .map((crumb, index) => {
      currentLink += `/${crumb}`;
      return (
        <div className="crumb para" key={index}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return (
    <div className="bre-crumb sflex para">
      <div className="crumb-con mpara">{currentPage}</div>
      <div className="crumb-con sflex">{crumbs}</div>
    </div>
  );
}

export default BreadCrumb;
