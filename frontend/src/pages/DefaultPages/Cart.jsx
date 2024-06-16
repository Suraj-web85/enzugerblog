import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import axios from "axios";

import "../../styles/Cart.css";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, updateCartItem } =
    useContext(CartContext);
  const [couponCode, setCouponCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRemoveItem = (product) => {
    removeFromCart(product);
  };

  const handleQuantityChange = (product, quantity) => {
    updateCartItem(product, quantity);
  };

  const handleCouponCodeChange = (e) => {
    setCouponCode(e.target.value);
  };

  const handleApplyCoupon = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("/apply-coupon", { couponCode });
      // Handle successful coupon application
      console.log(response.data);
    } catch (err) {
      setError("Failed to apply coupon.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateCart = () => {
    // Update cart items on the server
    console.log("Cart updated");
  };

  const calculateSubtotal = (product) => {
    const { productDcPrice, quantity } = product;
    return (productDcPrice * quantity).toFixed(2);
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, product) => {
      const subtotal = calculateSubtotal(product);
      return total + parseFloat(subtotal);
    }, 0);
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="con cart-con m-tb">
      {/* <h2>Cart Items</h2> */}
      <div className="cart-sec">
        <table className="cart-tb para">
          <thead className="sspara">
            <tr>
              <th></th>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((product, index) => (
              <tr key={index} className="cart-item">
                <td>
                  <button
                    className="ca-i-delbtn"
                    onClick={() => handleRemoveItem(product)}
                  >
                    &#10005;
                  </button>
                </td>
                <td>
                  <img src={product.productImg} alt={product.productName} />
                </td>
                <td>{product.productName}</td>
                <td>₹ {product.productOfferPrice.toFixed(2)}</td>
                <td>
                  <div>
                    <input
                      type="number"
                      value={product.quantity}
                      className="para"
                      onChange={(e) =>
                        handleQuantityChange(
                          product,
                          parseInt(e.target.value, 10)
                        )
                      }
                    />
                  </div>
                </td>
                <td>₹ {calculateSubtotal(product)}</td>
              </tr>
            ))}
            <tr>
              <td className="cart-btn-con" colSpan={6}>
                <div className="sflex">
                  <div className="sflex" style={{ alignItems: "stretch" }}>
                    <input
                      type="text"
                      className="coupon-input"
                      placeholder="Coupon Code"
                      value={couponCode}
                      onChange={handleCouponCodeChange}
                    />
                    <button
                      className="com-btn para"
                      onClick={handleApplyCoupon}
                      disabled={isLoading}
                    >
                      {isLoading ? "Applying..." : "Apply Coupon"}
                    </button>
                  </div>
                  <button className="com-btn para" onClick={handleUpdateCart}>
                    Update Cart
                  </button>
                </div>
                {error && <p className="er-p">{error}</p>}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="cart-sec">
        <h3>Cart Totals</h3>
        <p>
          <span>Subtotal</span>{" "}
          <strong>₹ {calculateTotalAmount().toFixed(2)}</strong>
        </p>
        <div className="sflex">
          <h4>Shipping</h4>
          <div className="sflex">
            <label htmlFor="freeShipping">
              Free Shipping
              <input
                type="radio"
                id="freeShipping"
                name="shippingOption"
                defaultChecked
              />
            </label>
            <label htmlFor="cashOnDelivery">
              Cash on Delivery
              <input type="radio" id="cashOnDelivery" name="shippingOption" />
            </label>
            {/* <p>Shipping to : <span>Maharashtra</span></p> */}
          </div>
        </div>
        {/* <button>Change Address</button> */}
        <p>
          <span>Total:</span>
          <strong>₹ {calculateTotalAmount().toFixed(2)}</strong>
        </p>
        <button className="para">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
