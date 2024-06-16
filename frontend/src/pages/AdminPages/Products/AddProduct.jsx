import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { DeliveryOptionContainer, handleAddOptions } from "./ProductFunctions";

const AddProduct = () => {
  const [productImage, setProductImage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setProductImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="en-ad-pr-con">
      <div>
        <h2 className="mpara">Create Product</h2>
        <form className="product-form para" onSubmit={handleSubmit(onSubmit)}>
          <div className="ad-pr-incon">
            <label htmlFor="productTitle">Product Title</label>
            <input type="text" id="productTitle" placeholder="Product Title" name="productTitle" />
          </div>
          <div className="ad-pr-incon">
            <label htmlFor="sku">SKU</label>
            <input type="text" id="sku" placeholder="SKU" name="sku" />
          </div>
          <div className="ad-pr-incon">
            <label htmlFor="quantity">Quantity</label>
            <input type="text" id="quantity" name="quantity" value="Automatic" readOnly />
          </div>
          <div className="ad-pr-incon">
            <label htmlFor="mrp">MRP</label>
            <input type="text" id="mrp" placeholder="MRP" name="mrp" />
          </div>
          <div className="ad-pr-incon">
            <label htmlFor="offerPrice">Offer Price</label>
            <input type="text" id="offerPrice" placeholder="Offer Price" name="offerPrice" />
          </div>
          <div className="ad-pr-incon">
            <label htmlFor="category">Category</label>
            <input type="text" id="category" placeholder="Category" name="category" />
          </div>
          <div className="full-width">
            <h3 className="para">One time purchase (Quantity Discounts)</h3>
          </div>
          <div className="ad-pr-incon">
            <label htmlFor="oneTimeMinQuantity1">Minimum Quantity</label>
            <input type="number" id="oneTimeMinQuantity1" placeholder="Minimum Quantity" name="oneTimeMinQuantity1" />
          </div>
          <div className="ad-pr-incon">
            <label htmlFor="oneTimePricePerUnit1">Your price/unit</label>
            <input type="number" id="oneTimePricePerUnit1" placeholder="Price/Unit" name="oneTimePricePerUnit1" />
          </div>
          <div className="ad-pr-incon">
            <label htmlFor="oneTimeMinQuantity2">Minimum Quantity</label>
            <input type="number" id="oneTimeMinQuantity2" placeholder="Min Qunatity" name="oneTimeMinQuantity2" />
          </div>
          <div className="ad-pr-incon">
            <label htmlFor="oneTimePricePerUnit2">Your price/unit</label>
            <input type="number" id="oneTimePricePerUnit2" placeholder="Price/Unit" name="oneTimePricePerUnit2" />
          </div>
          <div className="full-width">
            <h3 className="para">Subscriptions (Quantity Discounts)</h3>
          </div>
          <div className="ad-pr-incon">
            <label htmlFor="subscriptionMinQuantity1">Minimum Quantity</label>
            <input type="number" id="subscriptionMinQuantity1" placeholder="Min Quantity" name="subscriptionMinQuantity1" />
          </div>
          <div className="ad-pr-incon">
            <label htmlFor="subscriptionPricePerUnit1">Your price/unit</label>
            <input type="number" id="subscriptionPricePerUnit1" placeholder="Price/Unit" name="subscriptionPricePerUnit1" />
          </div>
          <div className="ad-pr-incon">
            <label htmlFor="subscriptionMinQuantity2">Minimum Quantity</label>
            <input type="number" id="subscriptionMinQuantity2" placeholder="Min Quantity" name="subscriptionMinQuantity2" />
          </div>
          <div className="ad-pr-incon">
            <label htmlFor="subscriptionPricePerUnit2">Your price/unit</label>
            <input type="number" id="subscriptionPricePerUnit2" placeholder="Price/Unit" name="subscriptionPricePerUnit2" />
          </div>
          <div className="ad-pr-incon full-width">
            <label htmlFor="deliveryOptions">Delivery Options</label>
            <div className="ad-pr-child-con sflex">
              <input type="text" id="deliveryOptions" placeholder="Enter Options" />
              <button className="com-btn" onClick={() => handleAddOptions("Hello")}>ADD</button>
            </div>
            <DeliveryOptionContainer />
          </div>
        </form>
      </div>
      {/* <div>
        <h2>Product Preview</h2>
        {productImage && <img src={productImage} alt="Product" />}
      </div> */}
    </div>
  );
};

export default AddProduct;
