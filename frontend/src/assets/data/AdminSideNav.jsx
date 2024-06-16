import Blogimg from "@images/custom_icons/Blogimg.svg";
import Customerimg from "@images/custom_icons/Customerimg.svg";
import Dashboard from "@images/custom_icons/Dashboard.svg";
import Financeimg from "@images/custom_icons/Financeimg.svg";
import HRimg from "@images/custom_icons/HRimg.svg";
import Inventoryimg from "@images/custom_icons/Inventoryimg.svg";
import Marketimg from "@images/custom_icons/Marketimg.svg";
import Orderimg from "@images/custom_icons/Orderimg.svg";
import Products from "@images/custom_icons/Products.svg";
import Reviewimg from "@images/custom_icons/Reviewimg.svg";
import Saleimg from "@images/custom_icons/Saleimg.svg";
import Settingimg from "@images/custom_icons/Settingimg.svg";
import Shippingimg from "@images/custom_icons/Shipingimg.svg";

const Navs = [
  {
    title: "Dashboard",
    icon: Dashboard,
    path: "dashboard",
  },
  {
    title: "Products",
    icon: Products,
    path: "products",
  },
  {
    title: "Customers",
    icon: Customerimg,
    path: "customers",
  },
  {
    title: "Orders",
    icon: Orderimg,
    path: "orders",
  },
  {
    title: "Marketing",
    icon: Marketimg,
    childrens: [
      {
        title: "Coupons",
        path: "coupons",
      },
      {
        title: "Referrals",
        path: "referrals",
      },
      {
        title: "Whats app",
        path: "whats-app",
      },
    ],
  },
  {
    title: "Finance",
    icon: Financeimg,
    childrens: [
      {
        title: "Invoices",
        path: "invoices",
      },
      {
        title: "Subscribers",
        path: "subscribers",
      },
      {
        title: "PO or WO",
        path: "po-or-wo",
      },
    ],
  },
  {
    title: "Reviews",
    icon: Reviewimg,
    path: "reviews",
  },
  {
    title: "Inventory",
    icon: Inventoryimg,
    childrens: [
      {
        title: "Raw Material",
        path: "raw-material",
      },
      {
        title: "Packaging",
        path: "packaging",
      },
      {
        title: "Finished Goods",
        path: "finished-goods",
      },
      {
        title: "Production",
        path: "production",
      },
    ],
  },
  {
    title: "Blogs",
    icon: Blogimg,
    path: "blogs",
  },
  {
    title: "Shipping",
    icon: Shippingimg,
    path: "shipping",
  },
  {
    title: "HR",
    icon: HRimg,
    childrens: [
      {
        title: "Salaries",
        path: "salaries",
      },
      {
        title: "Team",
        path: "team",
      },
    ],
  },
  {
    title: "Sales",
    icon: Saleimg,
    childrens: [
      {
        title: "Reach",
        path: "reach",
      },
      {
        title: "Results",
        path: "results",
      },
    ],
  },
  {
    title: "Settings",
    icon: Settingimg,
    childrens: [
      {
        title: "Roles",
        path: "roles",
      },
      {
        title: "Team",
        path: "team",
      },
    ],
  },
];

export default Navs;
