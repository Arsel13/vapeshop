import React from "react";

export default function Footer() {
  return (
    <div>
      <footer id="footer">
        <div className="newsletter-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-7 w-100 d-flex justify-content-start align-items-center">
                <div className="display-table">
                  <div className="display-table-cell footer-newsletter">
                    <div className="section-header text-center">
                      <label className="h2">
                        <span>sign up for </span>newsletter
                      </label>
                    </div>
                    <form action="#" method="post">
                      <div className="input-group">
                        <input
                          type="email"
                          className="input-group__field newsletter__input"
                          name="EMAIL"
                          defaultValue=""
                          placeholder="Email address"
                          required=""
                        />
                        <span className="input-group__btn">
                          <button
                            type="submit"
                            className="btn newsletter__submit"
                            name="commit"
                            id="Subscribe"
                          >
                            <span className="newsletter__submit-text--large">
                              Subscribe
                            </span>
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 d-flex justify-content-end align-items-center">
                <div className="footer-social">
                  <ul className="list--inline site-footer__social-icons social-icons">
                    <li>
                      <a
                        className="social-icons__link"
                        to="#"
                        target="_blank"
                        title="Belle Multipurpose Bootstrap 4 Template on Facebook"
                      >
                        <i className="icon icon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="social-icons__link"
                        to="#"
                        target="_blank"
                        title="Belle Multipurpose Bootstrap 4 Template on Twitter"
                      >
                        <i className="icon icon-twitter"></i>{" "}
                        <span className="icon__fallback-text">Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="social-icons__link"
                        to="#"
                        target="_blank"
                        title="Belle Multipurpose Bootstrap 4 Template on Pinterest"
                      >
                        <i className="icon icon-pinterest"></i>{" "}
                        <span className="icon__fallback-text">Pinterest</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="social-icons__link"
                        to="#"
                        target="_blank"
                        title="Belle Multipurpose Bootstrap 4 Template on Instagram"
                      >
                        <i className="icon icon-instagram"></i>{" "}
                        <span className="icon__fallback-text">Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="social-icons__link"
                        to="#"
                        target="_blank"
                        title="Belle Multipurpose Bootstrap 4 Template on Tumblr"
                      >
                        <i className="icon icon-tumblr-alt"></i>{" "}
                        <span className="icon__fallback-text">Tumblr</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="social-icons__link"
                        to="#"
                        target="_blank"
                        title="Belle Multipurpose Bootstrap 4 Template on YouTube"
                      >
                        <i className="icon icon-youtube"></i>{" "}
                        <span className="icon__fallback-text">YouTube</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="social-icons__link"
                        to="#"
                        target="_blank"
                        title="Belle Multipurpose Bootstrap 4 Template on Vimeo"
                      >
                        <i className="icon icon-vimeo-alt"></i>{" "}
                        <span className="icon__fallback-text">Vimeo</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer">
          <div className="container">
            <div className="footer-top">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                  <h4 className="h4">Quick Shop</h4>
                  <ul>
                    <li>
                      <a to="#">Women</a>
                    </li>
                    <li>
                      <a to="#">Men</a>
                    </li>
                    <li>
                      <a to="#">Kids</a>
                    </li>
                    <li>
                      <a to="#">Sportswear</a>
                    </li>
                    <li>
                      <a to="#">Sale</a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                  <h4 className="h4">Informations</h4>
                  <ul>
                    <li>
                      <a to="#">About us</a>
                    </li>
                    <li>
                      <a to="#">Careers</a>
                    </li>
                    <li>
                      <a to="#">Privacy policy</a>
                    </li>
                    <li>
                      <a to="#">Terms &amp; condition</a>
                    </li>
                    <li>
                      <a to="#">My Account</a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                  <h4 className="h4">Customer Services</h4>
                  <ul>
                    <li>
                      <a to="#">Request Personal Data</a>
                    </li>
                    <li>
                      <a to="#">FAQ's</a>
                    </li>
                    <li>
                      <a to="#">Contact Us</a>
                    </li>
                    <li>
                      <a to="#">Orders and Returns</a>
                    </li>
                    <li>
                      <a to="#">Support Center</a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 contact-box">
                  <h4 className="h4">Contact Us</h4>
                  <ul className="addressFooter">
                    <li>
                      <i className="icon anm anm-map-marker-al"></i>
                      <p>
                        55 Gallaxy Enque,
                        <br /> 2568 steet, 23568 NY
                      </p>
                    </li>
                    <li className="phone">
                      <i className="icon anm anm-phone-s"></i>
                      <p>00923119300790</p>
                    </li>
                    <li className="email">
                      <i className="icon anm anm-envelope-l"></i>
                      <p>sales@yousite.com</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <hr />
            <div className="footer-bottom">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 order-1 order-md-0 order-lg-0 order-sm-1 copyright text-sm-center text-md-left text-lg-left">
                  <span></span> <a href="">Waqar Ahmad</a>
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-6 order-0 order-md-1 order-lg-1 order-sm-0 payment-icons text-right text-md-center">
                  <ul className="payment-icons list--inline">
                    <li>
                      <i className="icon fa fa-cc-visa" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i
                        className="icon fa fa-cc-mastercard"
                        aria-hidden="true"
                      ></i>
                    </li>
                    <li>
                      <i
                        className="icon fa fa-cc-discover"
                        aria-hidden="true"
                      ></i>
                    </li>
                    <li>
                      <i
                        className="icon fa fa-cc-paypal"
                        aria-hidden="true"
                      ></i>
                    </li>
                    <li>
                      <i className="icon fa fa-cc-amex" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i
                        className="icon fa fa-credit-card"
                        aria-hidden="true"
                      ></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
