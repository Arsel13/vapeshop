import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import TopHeader from "../components/TopHeader";
import ItemModel from "../components/ItemModel";
import ProductFeatures from "../components/ProductFeatures";
import BreadCrumbs from "../components/BreadCrumbs";
import { useLocation, useNavigate } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import ordericon from "../images/order-icon.jpg";
import { IMG_URL } from "../Utilities/URL";

export default function Product() {
  const navigate = useNavigate();
  const location = useLocation();
  const prodData = location?.state?.prodDetails;

  const [cart, setCart] = useState({
    image: "",
    title: "",
    price: "",
    qty: "",
    total: "",
    id: "",
  });
  const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const [selectedFlavor, setSelectedFlavor] = useState("");

  // Function to handle flavor change
  const handleFlavorChange = (event) => {
    const newFlavor = event.target.value;
    setSelectedFlavor(newFlavor);
  };

  const handleClick = (image, title, price, qty, total, id) => {
    const newCartItem = {
      image: image,
      title: title,
      price: price,
      qty: qty,
      total: total,
      id: id,
      flavor:
        selectedFlavor !== "" ? selectedFlavor : prodData?.Flavours?.[0]?.name,
    };

    const existingItemIndex = existingCartItems.findIndex(
      (item) => item.id === id
    );
    if (existingItemIndex !== -1) {
      // If item already exists in the cart, update its qty and flavor
      const existingItem = existingCartItems[existingItemIndex];
      existingItem.qty = qty;
      existingItem.flavor = selectedFlavor;
      localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
    } else {
      // Otherwise, add the new item to the cart
      const updatedCartItems = [...existingCartItems, newCartItem];
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }

    setCart(newCartItem);
    // navigate("/cart");
  };

  const [randomNumber, setRandomNumber] = useState(null);
  useEffect(() => {
    const generateRandomNumber = () => {
      const number = Math.floor(Math.random() * 20) + 1;
      setRandomNumber(number);
    };

    const interval = setInterval(generateRandomNumber, 300000); // Call generateRandomNumber every 3 seconds

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="pageWrapper">
      <TopHeader />
      <Header />
      <MobileNav />
      <div id="page-content">
        <div id="MainContent" className="main-content" role="main">
          <BreadCrumbs title={prodData?.title} />
          <div
            id="ProductSection-product-template"
            className="product-template__container prstyle1 container"
          >
            <div className="product-single">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="product-details-img">
                    <div className="zoompro-wrap product-zoom-right pl-20">
                      <div className="zoompro-span">
                        <img
                          src={`${IMG_URL}/${prodData?.ProductImages[0]?.image}`}
                          alt=""
                        />
                      </div>
                      <div className="product-labels">
                        <span className="lbl on-sale">Sale</span>
                        <span className="lbl pr-label1">new</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="product-single__meta">
                    <h1 className="product-single__title">{prodData?.title}</h1>
                    <p className="product-single__price product-single__price-product-template">
                      <span className="visually-hidden">Regular price</span>
                      <s id="ComparePrice-product-template">
                        <span className="money">{prodData?.price}</span>
                      </s>
                      <span className="product-price__price product-price__price-product-template product-price__sale product-price__sale--single">
                        <span id="ProductPrice-product-template">
                          <span className="money">
                            {prodData?.discountPrice} AED
                          </span>
                        </span>
                      </span>
                      <span className="discount-badge">
                        {" "}
                        <span className="devider">|</span>&nbsp;
                        <span>You Save</span>
                        <span
                          id="SaveAmount-product-template"
                          className="product-single__save-amount"
                        >
                          <span className="money">
                            &nbsp; {prodData?.price - prodData?.discountPrice}{" "}
                            AED
                          </span>
                        </span>
                        {/* <span className="off">
                          (<span>16</span>%)
                        </span> */}
                      </span>
                    </p>
                    <div
                      className="orderMsg d-flex"
                      data-user="23"
                      data-time="24"
                    >
                      <img src={ordericon} alt="" />{" "}
                      <strong className="items">{randomNumber ?? "7"} </strong>{" "}
                      &nbsp;Sold in last&nbsp;
                      <strong className="time"> 26 </strong>&nbsp;Hours
                    </div>
                  </div>
                  <div className="product-single__description rte">
                    <div>{prodData?.shortDescription}</div>
                  </div>

                  <form>
                    <div className="swatch clearfix swatch-1 option2">
                      <div className="product-form__item">
                        {prodData?.Colors?.length > 0 && (
                          <label className="header">
                            Colors:
                            {prodData.Colors.map((col, index) => (
                              <li className="swatch medium rounded">
                                {col?.name}
                              </li>
                            ))}
                          </label>
                        )}
                      </div>
                      <div className="product-form__item">
                        {prodData?.Flavours?.length > 0 && (
                          <label className="header">
                            Flavours:
                            <select
                              className="flavor-select"
                              onChange={handleFlavorChange}
                            >
                              {prodData.Flavours.map((col, index) => (
                                <option key={index} value={col?.name}>
                                  {col?.name}
                                </option>
                              ))}
                            </select>
                          </label>
                        )}
                      </div>
                    </div>

                    <div className="product-action clearfix">
                      {/* <div className="product-form__item--quantity">
                        <div className="wrapQtyBtn">
                          <div className="qtyField">
                            <a
                              className="qtyBtn minus"
                              href="javascript:void(0);"
                            >
                              <i
                                className="fa anm anm-minus-r"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <input
                              type="text"
                              id="Quantity"
                              name="quantity"
                              value="1"
                              className="product-form__input qty"
                            />
                            <a
                              className="qtyBtn plus"
                              href="javascript:void(0);"
                            >
                              <i
                                className="fa anm anm-plus-r"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div> */}

                      <div className="product-form__item--submit">
                        <div
                          onClick={async () => {
                            await handleClick(
                              prodData?.image,
                              prodData?.title,
                              prodData?.discountPrice,
                              "1",
                              prodData?.discountPrice,
                              prodData?.id
                            );
                            navigate("/cart");
                          }}
                          type="button"
                          name="add"
                          className="btn product-form__cart-submit"
                        >
                          <span>Add to cart</span>
                        </div>
                      </div>

                      {/* <>
                          <div className="product-form__item--submit shopify-payment-button">
                            <Link
                              to="/cart"
                              type="button"
                              name="add"
                              className="btn product-form__cart-submit shopify-payment-button__button shopify-payment-button__button--unbranded"
                            >
                              <span>Visit Cart</span>
                            </Link>
                          </div>
                        </> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <ProductFeatures />
          </div>
        </div>
      </div>
      <Footer />
      <ItemModel />
    </div>
  );
}
