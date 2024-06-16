import React from "react";
import { Outlet } from "react-router-dom";

import "../components/Admin/Admin.css";
import SideNav from "../components/Admin/SideNav";
import TopNav from "../components/Admin/TopNav";
import BreadCrumb from "../components/Admin/BreadCrumb";

function AdminLayout() {
  return (
    <div className="en-adpg sflex">
      <SideNav />
      <div className="ead-content">
        <TopNav />
        <BreadCrumb />
        <div className="admin-outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
