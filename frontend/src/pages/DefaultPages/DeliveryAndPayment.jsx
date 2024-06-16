import React from "react";
import TopHeader from "../../components/TopHeader/TopHeader";
import Terms_Condition from "./Terms_Condition";

const DeliveryAndPayment = () => {
  return (
    <div>
      <TopHeader mainHead="DELIVERY, RETURNS & REFUNDS" />
      <div className="main_content_terms">
        <div className="content_page">
          <div className="start_content">
            <h4 style={{ fontSize: "2.4rem", fontWeight: "bold" }}>Delivery</h4>
            <p>
              Even though we are a website, and we function 24×7, recipient
              business hours are noted on the contact us menu. All orders will
              be prepared and dispatched within 2 working days of placement of
              order with our preferred carriers. Even though delivery time is
              stipulated and not in our ultimate control, we expect the customer
              to receive the ordered product within 3-5 or 5-10 working days of
              dispatch.
            </p>
          </div>
          <div className="start_content">
            <h4>What locations do you deliver to?</h4>
            <p>
              We primarily ship through our channel partner shiprocket and Our
              coverage areas are limited to the areas covered by our channel
              partner. In case your delivery address is not deliverable by our
              channel partner, we will attempt to ship through alternate channel
              partners.
            </p>
          </div>
          <div className="start_content">
            <h4>How can I track delivery of my order?</h4>
            <p>
              We email you the tracking reference number of your shipment once
              the product is shipped to your address. If you didn’t find in
              inbox, then please check in spam folder. If you have any other
              queries, reach out to care@enzuger.com or through our contact us
              page.
            </p>
          </div>
          <div className="start_content">
            <h4>Do you charge additional shipping charges?</h4>
            <p>
              No, we do not currently charge any additional shipping fees for
              delivery.
            </p>
          </div>
          <div className="start_content">
            <h4>Is the COD option available?</h4>
            <p>
              Yes, we ask extra for COD, which you can find on our product page.
            </p>
          </div>

          <div className="start_content">
            <h4 style={{ fontSize: "2.4rem", fontWeight: "bold" }}>
              Returns & Refunds
            </h4>
            <h4>What is the general return policy on Enzuger.com?</h4>
            <p>
              Once you order any product on enzuger.com, we do not take return
              unless If an item is found damaged, missing or incorrect as per
              your order & the description on our website, customers have to
              escalate a concern with us within 48 hours of delivery. Send us a
              picture of the packaging and products at care@enzuger.com or call
              on +91 89289 95511 within those 48 hours (excluding holidays &
              Sunday) We will arrange a reverse pickup for the product and then
              issue a different item in exchange, as per your request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAndPayment;
