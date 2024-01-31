// @ts-nocheck
import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import TopHeader from "../components/TopHeader";
import ItemModel from "../components/ItemModel";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const cartArr = JSON.parse(localStorage.getItem("cartItems"));
  const calculateTotalSum = (array) => {
    const totalSum = cartArr.reduce(
      (sum, item) => sum + parseInt(item.total),
      0
    );
    localStorage.setItem("subTotal", totalSum);
    return totalSum;
  };
  useEffect(() => {
    calculateTotalSum();
  },[]);

  const cartEdit = (id, math) => {
    const updatedCartItems = cartArr.map((item) => {
      if (item.id === id) {
        if (math === "add") {
          const updatedQty = parseInt(item.qty, 10) + 1;
          const updatedTotal = parseInt(item.price, 10) + parseInt(item.total);
          return {
            ...item,
            qty: updatedQty.toString(),
            total: updatedTotal.toString(),
          };
        } else if (math === "subtract") {
          const updatedQty = parseInt(item.qty, 10) - 1;
          const updatedTotal = parseInt(item.total) - parseInt(item.price, 10);
          return {
            ...item,
            qty: updatedQty.toString(),
            total: updatedTotal.toString(),
          };
        }
      }
      return item;
    });

    // Update the localStorage with the updated array
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    navigate("/cart");
  };
  const removeCart = (itemId) => {
    const updatedArray = cartArr.filter((item) => item.id !== itemId);
    localStorage.setItem("cartItems", JSON.stringify(updatedArray));
    navigate("/cart");
  };
  return (
    <div className="pageWrapper">
      <TopHeader />
      <Header />
      <MobileNav />
      <div id="page-content">
        <div className="page section-header text-center">
          <div className="page-title">
            <div className="wrapper">
              <h1 className="page-width">Your cart</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 main-col">
              <div action="#" method="post" className="cart style2">
                <table>
                  <thead className="cart__row cart__header">
                    <tr>
                      <th className="text-center">
                        Product
                      </th>
                      <th className="text-center">Price</th>
                      <th className="text-center">Quantity</th>
                      <th className="text-right">Total</th>
                      <th className="action">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartArr?.map((cart, index) => (
                      <tr className="cart__row border-bottom line1 cart-flex border-top">
                      
                        <td className="cart__meta small--text-left cart-flex-item">
                          <div className="list-view-item__title">
                            <a href="#">{cart?.title} </a>
                          </div>
{/* 
                          <div className="cart__meta-text">
                            Color: {cart?.color}
                          </div> */}
                        </td>
                        <td className="cart__price-wrapper cart-flex-item">
                          <span className="money">{cart?.price}</span>
                        </td>
                        <td className="cart__update-wrapper cart-flex-item text-right">
                          <div className="cart__qty text-center">
                            <div className="qtyField">
                              <button
                                className="qtyBtn minus"
                                onClick={() => cartEdit(cart?.id, "subtract")}
                                disabled={cart?.qty === "1" && true}
                              >
                                <i className="icon icon-minus"></i>
                              </button>
                              <span className="qtyBtn plus">{cart?.qty}</span>
                              <button
                                className="qtyBtn plus"
                                onClick={() => cartEdit(cart?.id, "add")}
                              >
                                <i className="icon icon-plus"></i>
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="text-right small--hide cart-price">
                          <div>
                            <span className="money">{cart?.total}</span>
                          </div>
                        </td>
                        <td className="text-center small--hide">
                          <button
                            className="btn btn--secondary cart__remove"
                            title="Remove item"
                            onClick={() => removeCart(cart?.id)}
                          >
                            <i className="icon icon anm anm-times-l"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 cart__footer">
              <div className="cart-note">
                <div className="solid-border">
                  <h5>
                    <label
                      for="CartSpecialInstructions"
                      className="cart-note__label small--text-center"
                    >
                      Add a note to your order
                    </label>
                  </h5>
                  <textarea
                    name="note"
                    id="CartSpecialInstructions"
                    className="cart-note__input"
                  ></textarea>
                </div>
              </div>
              <div className="solid-border">
                <div className="row">
                  <span className="col-12 col-sm-6 cart__subtotal-title">
                    <strong>Subtotal</strong>
                  </span>
                  <span className="col-12 col-sm-6 cart__subtotal-title cart__subtotal text-right">
                    <span className="money">{calculateTotalSum()}</span>
                  </span>
                </div>
                <div className="cart__shipping">
                  Shipping &amp; taxes calculated at checkout
                </div>
                <p className="cart_tearm">
                  <label>
                    <input
                      type="checkbox"
                      name="tearm"
                      id="cartTearm"
                      className="checkbox"
                      value="tearm"
                      required=""
                    />
                    I agree with the terms and conditions
                  </label>
                </p>
                <Link className="btn btn--small-wide checkout" to="/checkout">
                  {" "}
                  Checkout
                </Link>
                <div className="paymnet-img">
                  <img src="assets/images/payment-img.jpg" alt="Payment" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ItemModel />
    </div>
  );
}
