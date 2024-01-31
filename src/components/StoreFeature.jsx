import React from "react";

export default function StoreFeature() {
  return (
    <>
      <div className="store-feature section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <ul className="display-table store-info">
                <li className="display-table-cell">
                  <i className="icon anm anm-truck-l"></i>
                  <h5>Free Shipping &amp; Return</h5>
                  <span className="sub-text">
                    Free shipping on all US orders
                  </span>
                </li>
                <li className="display-table-cell">
                  <i className="icon anm anm-dollar-sign-r"></i>
                  <h5>Money Guarantee</h5>
                  <span className="sub-text">30 days money back guarantee</span>
                </li>
                <li className="display-table-cell">
                  <i className="icon anm anm-comments-l"></i>
                  <h5>Online Support</h5>
                  <span className="sub-text">
                    We support online 24/7 on day
                  </span>
                </li>
                <li className="display-table-cell">
                  <i className="icon anm anm-credit-card-front-r"></i>
                  <h5>Secure Payments</h5>
                  <span className="sub-text">
                    All payment are Secured and trusted.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
