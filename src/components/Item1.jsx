import React from "react";
import { Link } from "react-router-dom";
import { IMG_URL } from "../Utilities/URL";

export default function Item1(props) {
  const isMobile = window.innerWidth <= 540;

  return (
    <>
      <div className="col-6 col-sm-6 col-md-4 col-lg-4 item">
        <div
          className="card"
          style={{ borderRadius: "15px", overflow: "auto" }}
        >
          <div
            className="product-image"
            style={{
              height: isMobile ? "170px" : "287px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div onClick={props.onClick}>
              <img
                className="primary blur-up lazyload"
                src={IMG_URL + props.img}
                alt={props.title}
                title="product"
                style={{
                  height: isMobile ? "170px" : "280px",
                  objectFit: "contain",
                }}
              />

              <img
                className="hover blur-up lazyload"
                src={IMG_URL + props.img2}
                alt={props.title}
                title="product"
              />

              <div className="product-labels">
                <span className="lbl on-sale">Sale</span>
              </div>
            </div>

            <div className="variants add">
              {props.condition ? (
                <Link className="btn btn-addto-cart" type="button" to="/cart">
                  Visit Cart
                </Link>
              ) : (
                <button
                  className="btn btn-addto-cart"
                  type="button"
                  onClick={props.addCart}
                >
                  Add To Cart
                </button>
              )}
            </div>
            {/* <div className="button-set">
            <a
              href="javascript:void(0)"
              title="Quick View"
              className="quick-view-popup quick-view"
              data-toggle="modal"
              data-target="#content_quickview"
            >
              <i className="icon anm anm-search-plus-r"></i>
            </a>
          </div> */}
          </div>
          <div className="product-details text-center">
            <div className="product-name">
              <button onClick={props.onClick} style={{ border: "transparent" }}>
                {props.title}
              </button>
            </div>

            <div className="product-price">
              <span className="old-price">{props.price} </span>
              <span className="price">{props.discountPrice} AED</span>
            </div>
            {/* <ul className="swatches">
            <li className="swatch medium rounded">
              <div>red</div>
            </li>
            {props.colors}
          </ul> */}
          </div>
        </div>
      </div>
    </>
  );
}
