import React from "react";
import { Link } from "react-router-dom";

export default function Item() {
  return (
    <>
      <div className="col-6 col-sm-6 col-md-3 col-lg-3 item grid-view-item style2">
        <div className="grid-view_image">
          <Link to="product-accordion.html" className="grid-view-item__link">
            <img
              className="grid-view-item__image primary blur-up lazyload"
              data-src="assets/images/product-images/product-image1.jpg"
              src="assets/images/product-images/product-image1.jpg"
              alt="image"
              title="product"
            />
            <img
              className="grid-view-item__image hover blur-up lazyload"
              data-src="assets/images/product-images/product-image1-1.jpg"
              src="assets/images/product-images/product-image1-1.jpg"
              alt="image"
              title="product"
            />
            <div className="product-labels rectangular">
              <span className="lbl on-sale">-16%</span>{" "}
              <span className="lbl pr-label1">new</span>
            </div>
          </Link>
          <div className="product-details hoverDetails text-center mobile">
            <div className="product-name">
              <Link to="product-accordion.html">Edna Dress</Link>
            </div>
            <div className="product-price">
              <span className="old-price">$500.00</span>
              <span className="price">$600.00</span>
            </div>
            <div className="button-set d-flex justify-content-center">
              <Link
                to="javascript:void(0)"
                title="Quick View"
                className="quick-view-popup quick-view"
                data-toggle="modal"
                data-target="#content_quickview"
              >
                <i className="icon anm anm-search-plus-r"></i>
              </Link>

              <div className="variants add" onClick="" style={{width:35}}>
                <button className="btn cartIcon btn-addto-cart" type="button">
                  <i className="icon anm anm-bag-l"></i>
                </button>
              </div>
            </div>
          </div>

          <ul className="swatches text-center">
            <li className="swatch medium rounded">
              <img
                src="assets/images/product-images/variant1.jpg"
                alt="image"
              />
            </li>
            <li className="swatch medium rounded">
              <img
                src="assets/images/product-images/variant2.jpg"
                alt="image"
              />
            </li>
            <li className="swatch medium rounded">
              <img
                src="assets/images/product-images/variant3.jpg"
                alt="image"
              />
            </li>
            <li className="swatch medium rounded">
              <img
                src="assets/images/product-images/variant4.jpg"
                alt="image"
              />
            </li>
            <li className="swatch medium rounded">
              <img
                src="assets/images/product-images/variant5.jpg"
                alt="image"
              />
            </li>
            <li className="swatch medium rounded">
              <img
                src="assets/images/product-images/variant6.jpg"
                alt="image"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
