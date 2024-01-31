import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";

export default function Header() {
  const cartId = JSON.parse(localStorage.getItem("cartItems"));
  return (
    <>
      <div className="header-wrap classNameicHeader animated d-flex">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="logo col-md-2 col-lg-2 d-none d-lg-block">
              <Link to="/">
                <img src={logo} alt="Heets Store" title="Heets Store" width={120} />
              </Link>
            </div>
            <div className="col-2 col-sm-3 col-md-3 col-lg-8 d-none d-lg-block">
              <div className="d-block d-lg-none">
                <button
                  type="button"
                  className="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open"
                >
                  <i className="icon anm anm-times-l"></i>
                  <i className="anm anm-bars-r"></i>
                </button>
              </div>
              <nav className="grid__item" id="AccessibleNav">
                <ul id="siteNav" className="site-nav medium center hidearrow">
                  <li className="lvl1 parent megamenu">
                    <Link to="/">
                      Home <i className="anm anm-angle-down-l"></i>
                    </Link>
                  </li>
                  <li className="lvl1 parent megamenu">
                    <Link to="/shop">
                      Shop <i className="anm anm-angle-down-l"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-6 col-sm-6 col-md-6 col-lg-2 d-block d-lg-none mobile-logo">
              <div className="logo">
                <Link to="/">
                  <img src="logo.jpg" alt="Heets Store" title="Heets Store" />
                </Link>
              </div>
            </div>

            <div className="col-6 col-sm-3 col-md-3 col-lg-2">
              <div className="site-cart">
                <Link to="/cart" className="site-header__cart" title="Cart">
                  <i className="icon anm anm-bag-l"></i>
                  <span
                    id="CartCount"
                    className="site-header__cart-count"
                    data-cart-render="item_count"
                  >
                    {cartId && cartId?.length > 0 ? cartId?.length : "0"}
                  </span>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
