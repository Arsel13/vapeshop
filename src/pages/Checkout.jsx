import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import TopHeader from "../components/TopHeader";
import ItemModel from "../components/ItemModel";
import PostAPI from "../api/PostAPI";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const [data, setData] = useState({
    address: "",
    state: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    totalPrice: "",
    description: "",
  });
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const checkoutFunc = async (e) => {
    e.preventDefault();
    let res = await PostAPI("add_order", {
      address: data.address,
      state: data.state,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      products: JSON.parse(localStorage.getItem("cartItems")),
      totalPrice: data.totalPrice,
      description: data.description,
    });
    if (res?.data?.status === "1") {
      console.log(res.data);
      const isMobile = /Mobi|Android/i.test(window.navigator.userAgent);
      const cartItems = JSON.parse(localStorage.getItem("cartItems"));
      const userDetails = cartItems.map((item) => {
        const { id, ...itemData } = item; // Exclude the "id" property from the item
        let details = Object.entries(itemData)
          .filter(([key]) => key !== "image" && key !== "total")
          .map(
            ([key, value]) =>
              `*${key.charAt(0).toUpperCase() + key.slice(1)}*: ${value}`
          )
          .join("\n");
        return details;
      });
      const introMessage = "Hello, I want to buy this";
      const fullMessage = `${introMessage}\n\n${userDetails.join("\n\n")}`;
      const encodedUrl = encodeURIComponent(fullMessage);
      let Wlink = "";
      if (isMobile) {
        Wlink = "https://api.whatsapp.com/send?phone=971508550258&text=";
      } else {
        Wlink = "https://web.whatsapp.com/send?phone=971508550258&text=";
      }
      const finallink = Wlink + encodedUrl;
      window.open(finallink, "_blank");
      localStorage.setItem("cartItems", JSON.stringify([]));
    }
  };
  return (
    <div className="pageWrapper">
      <TopHeader />
      <Header />
      <MobileNav />
      <div id="page-content">
        <div class="page section-header text-center">
          <div class="page-title">
            <div class="wrapper">
              <h1 class="page-width">Checkout</h1>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
              <div class="customer-box returning-customer">
                <h3>
                  <i class="icon anm anm-user-al"></i> Details
                </h3>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
              <div class="customer-box customer-coupon">
                <h3 class="font-15 xs-font-13">
                  <i class="icon anm anm-gift-l"></i> Place Order
                </h3>
              </div>
            </div>
          </div>

          <div class="row billing-fields">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 sm-margin-30px-bottom">
              <div class="create-ac-content bg-light-gray padding-20px-all">
                <form>
                  <fieldset>
                    <h2 class="login-title mb-3">Billing details</h2>
                    <div class="row">
                      <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                        <label for="firstName">
                          First Name <span class="required-f">*</span>
                        </label>
                        <input
                          value={data.firstName}
                          onChange={onChange}
                          name="firstName"
                          id="firstName"
                          type="text"
                        />
                      </div>
                      <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                        <label for="lastName">
                          Last Name <span class="required-f">*</span>
                        </label>
                        <input
                          value={data.lastName}
                          onChange={onChange}
                          name="lastName"
                          id="lastName"
                          type="text"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                        <label for="email">
                          E-Mail <span class="required-f">*</span>
                        </label>
                        <input
                          value={data.email}
                          onChange={onChange}
                          name="email"
                          id="email"
                          type="email"
                        />
                      </div>
                      <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                        <label for="phone">
                          Telephone <span class="required-f">*</span>
                        </label>
                        <input
                          value={data.phone}
                          onChange={onChange}
                          name="phone"
                          id="phone"
                          type="tel"
                        />
                      </div>
                    </div>
                  </fieldset>

                  <fieldset>
                    <div class="row">
                      {/* <div class="form-group col-md-6 col-lg-6 col-xl-6">
                        <label for="input-company">Company</label>
                        <input
                          value={data}
                          onChange={onChange}
                          name="company"
                          id="input-company"
                          type="text"
                        />
                      </div> */}
                      <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                        <label for="address">
                          Address <span class="required-f">*</span>
                        </label>
                        <input
                          value={data.address}
                          onChange={onChange}
                          name="address"
                          id="address"
                          type="text"
                        />
                      </div>
                    </div>
                    {/* <div class="row">
                      <div class="form-group col-md-6 col-lg-6 col-xl-6">
                        <label for="input-address-2">
                          Apartment <span class="required-f">*</span>
                        </label>
                        <input
                          name="address_2"
                          value=""
                          id="input-address-2"
                          type="text"
                        />
                      </div>
                      <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                        <label for="input-city">
                          City <span class="required-f">*</span>
                        </label>
                        <input
                          name="city"
                          value=""
                          id="input-city"
                          type="text"
                        />
                      </div>
                    </div> */}
                    {/* <div class="row">
                      <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                        <label for="input-postcode">
                          Post Code <span class="required-f">*</span>
                        </label>
                        <input
                          name="postcode"
                          value=""
                          id="input-postcode"
                          type="text"
                        />
                      </div>
                      <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                        <label for="input-country">
                          Country <span class="required-f">*</span>
                        </label>
                        <select name="country_id" id="input-country">
                          <option value=""> --- Please Select --- </option>
                          <option value="244">Aaland Islands</option>
                          <option value="1">Afghanistan</option>
                          <option value="2">Albania</option>
                          <option value="3">Algeria</option>
                          <option value="4">American Samoa</option>
                          <option value="5">Andorra</option>
                          <option value="6">Angola</option>
                        </select>
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group col-md-6 col-lg-6 col-xl-6 required">
                        <label for="input-zone">
                          Region / State <span class="required-f">*</span>
                        </label>
                        <select name="zone_id" id="input-zone">
                          <option value=""> --- Please Select --- </option>
                          <option value="3513">Aberdeen</option>
                          <option value="3514">Aberdeenshire</option>
                          <option value="3515">Anglesey</option>
                          <option value="3516">Angus</option>
                        </select>
                      </div>
                    </div> */}
                  </fieldset>
                  <fieldset>
                    <div class="row">
                      <div class="form-group col-md-12 col-lg-12 col-xl-12">
                        <label for="description">
                          Order Notes <span class="required-f">*</span>
                        </label>
                        <textarea
                          value={data.description}
                          onChange={onChange}
                          name="description"
                          id="description"
                          class="form-control resize-both"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>

            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div class="your-order-payment">
                <div class="your-order">
                  <h2 class="order-title mb-4">Your Order</h2>

                  {/* <div class="table-responsive-sm order-table">
                    <table class="bg-white table table-bordered table-hover text-center">
                      <thead>
                        <tr>
                          <th class="text-left">Product Name</th>
                          <th>Price</th>
                          <th>Size</th>
                          <th>Qty</th>
                          <th>Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="text-left">Spike Jacket</td>
                          <td>$99</td>
                          <td>S</td>
                          <td>1</td>
                          <td>$99</td>
                        </tr>
                      </tbody>
                      <tfoot class="font-weight-600">
                        <tr>
                          <td colspan="4" class="text-right">
                            Shipping{" "}
                          </td>
                          <td>$50.00</td>
                        </tr>
                        <tr>
                          <td colspan="4" class="text-right">
                            Total
                          </td>
                          <td>$845.00</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div> */}
                </div>

                <hr />

                <div class="your-payment">
                  <div class="payment-method">
                    <div class="order-button-payment">
                      <button class="btn" type="submit" onClick={checkoutFunc}>
                        Place order
                      </button>
                    </div>
                  </div>
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
