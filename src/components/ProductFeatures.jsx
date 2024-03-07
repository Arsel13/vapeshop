import React from "react";
import creditcard from "../images/credit-card.png";
import shield from "../images/shield.png";
import worldwide from "../images/worldwide.png";
import phonecall from "../images/phone-call.png";

export default function ProductFeatures() {
  return (
    <>
      <div className="prFeatures">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 feature">
            <img src={creditcard} alt="Safe Payment" title="Safe Payment" />
            <div className="details">
              <h3>Safe Payment</h3>Pay with the world's most payment methods.
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 feature">
            <img src={shield} alt="Confidence" title="Confidence" />
            <div className="details">
              <h3>Confidence</h3>Protection covers your purchase and personal
              data.
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 feature">
            <img
              src={worldwide}
              alt="Worldwide Delivery"
              title="Worldwide Delivery"
            />
            <div className="details">
              <h3>Worldwide Delivery</h3>FREE &amp; fast shipping to over 200+
              countries &amp; regions.
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 feature">
            <img src={phonecall} alt="Hotline" title="Hotline" />
            <div className="details">
              <h3>Hotline</h3>Talk to help line for your question on 4141 456
              789, 4125 666 888
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
