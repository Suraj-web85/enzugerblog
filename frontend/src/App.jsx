import "./App.css";
import { useEffect } from "react";

import DefaultLayout from "./layouts/DefaultLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/DefaultPages/Home";
import Contact from "./pages/DefaultPages/Contact";
import Product from "./pages/DefaultPages/Product";
import Shop from "./pages/DefaultPages/Shop";
import About from "./pages/DefaultPages/About";
import ReferEarn from "./pages/DefaultPages/ReferEarn";
import Terms_Condition from "./pages/DefaultPages/Terms_Condition";
import DeliveryAndPayment from "./pages/DefaultPages/DeliveryAndPayment";
import FAQ from "./pages/DefaultPages/FAQ";
import WhyEnzuger from "./pages/DefaultPages/WhyEnzuger";
import Cart from "./pages/DefaultPages/Cart";

import { CartProvider } from "./context/CartContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/AdminPages/Dashboard/Dashboard";
import AdminProduct from "./pages/AdminPages/Products/AdminProduct";
import AdminOrders from "./pages/AdminPages/Orders/AdminOrders";
import ACustomers from "./pages/AdminPages/Customers/ACustomers";

import Aos from "aos";
import "aos/dist/aos.css";
import CategoryPage from "./pages/DefaultPages/Blog/CategoryPage";
import SingleBlog from "./pages/DefaultPages/Blog/SingleBlog";
import SingleCategoryPage from "./pages/DefaultPages/Blog/SingleCategoryPage";
import Blog from "./pages/DefaultPages/Blog/Blog";
import AddProduct from "./pages/AdminPages/Products/AddProduct";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" index element={<Home />} />
              <Route path="/product/:productTitle" element={<Product />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/why-enzuger" element={<WhyEnzuger />} />
              <Route path="/refer-and-earn" element={<ReferEarn />} />
              <Route path="/wellness" element={<Home />} />
              <Route
                path="/terms-and-conditions"
                element={<Terms_Condition />}
              />
              <Route
                path="/delivery-and-payments"
                element={<DeliveryAndPayment />}
              />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/cart" element={<Cart />} />

              <Route path="/blog" element={<Blog />} />
              <Route
                path="/blog/category/:category"
                element={<CategoryPage />}
              />
              <Route path="/blog/:id" element={<SingleBlog />} />
              <Route
                path="/blog/category/:category/:title/:id"
                element={<SingleCategoryPage />}
              />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="products" element={<AdminProduct />} />
              <Route path="products/add-new" element={<AddProduct />} />
              <Route path="orders" element={<AdminOrders />} />
              <Route path="customers" element={<ACustomers />} />
            </Route>
          </Routes>
        </Router>
        <ToastContainer />
      </CartProvider>
    </>
  );
}

export default App;
