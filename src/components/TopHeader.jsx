import React from "react";

export default function TopHeader() {
  return (
    <>
      <div className="top-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 col-sm-8 col-md-5 col-lg-4">
              <div className="language-dropdown">
                <span className="language-dd">English</span>
              </div>
              <p className="phone-no">
                <i className="anm anm-phone-s"></i> 00923119300790
              </p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 d-none d-lg-none d-md-block d-lg-block">
              <div className="text-center">
                <p className="top-header_middle-text">
                  Worldwide Express Shipping
                </p>
              </div>
            </div>
            <div className="col-2 col-sm-4 col-md-3 col-lg-4 text-right">
              <span className="user-menu d-block d-lg-none">
                <i className="anm anm-user-al" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
