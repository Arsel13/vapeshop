// @ts-nocheck
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import TopHeader from "../components/TopHeader";
import ItemModel from "../components/ItemModel";
import StoreFeature from "../components/StoreFeature";
import Banner from "../components/Banner";
import GetAPI from "../api/GetAPI";
import Item1 from "../components/Item1";
import { BASE_URL } from "../Utilities/URL";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Item from "../components/Item";

export default function Home() {
  const { data } = GetAPI("get_all_products");
  const navigate = useNavigate();
  const prodDetails = async (slug) => {
    try {
      axios.get(BASE_URL + `product_details/${slug}`).then((dat) => {
        if (dat.data?.status === "1") {
          navigate(`/product/${slug}`, {
            state: {
              prodDetails: dat?.data?.data,
            },
          });
        } else {
          alert(dat?.data?.message);
        }
      });
    } catch (err) {}
  };
  const [cart, setCart] = useState({
    image: "",
    title: "",
    price: "",
    qty: "",
    total: "",
    id: "",
  });
  const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const handleClick = (image, title, price, qty, total, id) => {
    const newCartItem = {
      image: image,
      title: title,
      price: price,
      qty: qty,
      total: total,
      id: id,
    };

    setCart(newCartItem);

    const updatedCartItems = [...existingCartItems, newCartItem];
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };
  const cartId = JSON.parse(localStorage.getItem("cartItems"));
  const cartCheck = (id) => {
    const cartIdMatch = cartId && cartId.find((ele) => ele.id === id)?.id;
    return cartIdMatch;
  };
  return (
    <>
      <div className="pageWrapper">
        <TopHeader />
        <Header />
        <MobileNav />
        <div id="page-content">
          <Banner />
          <div className="product-rows section">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="section-header text-center">
                    <h2 className="h2">Featured collection</h2>
                    <p>Our most popular products based on sales</p>
                  </div>
                </div>
              </div>
              <div className="grid-products">
                <div className="text-center mb-5">
                  <h2>Heets Classic</h2>
                  <p>
                    We offer <b> Classic IQOS Heets</b> Dubai UAE, Abu Dhabi,
                    Sharjah, Ajman, Fujairah, and RAK. IQOS Heets Dubai UAE
                    Classic consists of no additional flavors. Instead, it
                    contains blended, fine-cut tobacco. Its taste and smell are
                    strong. You can buy this range of IQOS Heets Dubai UAE with
                    cash on delivery facility in Abu Dhabi, Dubai, UAE, Sharjah,
                    Ajman, Fujairah, and RAK.
                  </p>
                  <hr />
                </div>
                <div className="row">
                  {data?.data?.products
                    ?.filter((prod) => prod.CategoryId == "1")
                    .map((prod, index) => (
                      <Item1
                        title={prod?.title}
                        price={prod?.price}
                        discountPrice={prod?.discountPrice}
                        img={prod?.ProductImages[0]?.image}
                        img2={prod?.ProductImages[1]?.image}
                        colors={prod?.Colors?.map((col, index) => (
                          <li
                            key={index}
                            className="swatch medium rounded"
                            style={{ background: col?.name }}
                          ></li>
                        ))}
                        addCart={() => {
                          handleClick(
                            prod?.image,
                            prod?.title,
                            prod?.discountPrice,
                            "1",
                            prod?.discountPrice,
                            prod?.id
                          );
                        }}
                        condition={cartCheck(prod?.id) ? true : false}
                        onClick={() => prodDetails(prod?.slug)}
                      />
                    ))}
                </div>
              </div>
              <div className="grid-products">
                <div className="text-center mb-5">
                  <h2>IQOS Heet Terea</h2>
                  <p>
                    <b>IQOS HEET TEREA</b> is a product specifically designed
                    for IQOS ILUMA. In the opinion of most customers, its
                    groundbreaking smart core induction system provides superior
                    draw, a consistent flavor from stick to stick, abundant
                    vapor, and less residual odor than ever before. The IQOS
                    ILUMA is solely intended for use with TEREA sticks. Buy IQOS
                    Heets Terea online in Dubai, Abu Dhabi, UAE, Sharjah, Ajman,
                    Fujairah, and RAK at a very reasonable price.
                  </p>
                  <hr />
                </div>
                <div className="row">
                  {data?.data?.products
                    ?.filter((prod) => prod.CategoryId == "2")
                    .map((prod, index) => (
                      <Item1
                        title={prod?.title}
                        price={prod?.price}
                        discountPrice={prod?.discountPrice}
                        img={prod?.ProductImages[0]?.image}
                        img2={prod?.ProductImages[1]?.image}
                        colors={prod?.Colors?.map((col, index) => (
                          <li
                            key={index}
                            className="swatch medium rounded"
                            style={{ background: col?.name }}
                          ></li>
                        ))}
                        addCart={() => {
                          handleClick(
                            prod?.image,
                            prod?.title,
                            prod?.discountPrice,
                            "1",
                            prod?.discountPrice,
                            prod?.id
                          );
                        }}
                        condition={cartCheck(prod?.id) ? true : false}
                        onClick={() => prodDetails(prod?.slug)}
                      />
                    ))}
                </div>
              </div>
              <div className="grid-products">
                <div className="text-center mb-5">
                  <h2>ILUMA ONE</h2>
                  <p>
                    <b>Heets IQOS ILUMA ONE </b> heats tobacco instead of
                    burning it, which means that it is less harmful and
                    healthier for you. This Heets IQOS ILUMA One uses heat and
                    pressure to vaporize the tobacco, creating a smokeless and
                    water vapor-like smoke. It also uses a flavored cartridge
                    that can be replaced easily. This is a great new product for
                    people who are looking for a healthier option than smoking
                    traditional cigarettes.
                  </p>
                  <hr />
                </div>
                <div className="row">
                  {data?.data?.products
                    ?.filter((prod) => prod.CategoryId == "3")
                    .map((prod, index) => (
                      <Item1
                        title={prod?.title}
                        price={prod?.price}
                        discountPrice={prod?.discountPrice}
                        img={prod?.ProductImages[0]?.image}
                        img2={prod?.ProductImages[1]?.image}
                        colors={prod?.Colors?.map((col, index) => (
                          <li
                            key={index}
                            className="swatch medium rounded"
                            style={{ background: col?.name }}
                          ></li>
                        ))}
                        addCart={() => {
                          handleClick(
                            prod?.image,
                            prod?.title,
                            prod?.discountPrice,
                            "1",
                            prod?.discountPrice,
                            prod?.id
                          );
                        }}
                        condition={cartCheck(prod?.id) ? true : false}
                        onClick={() => prodDetails(prod?.slug)}
                      />
                    ))}
                </div>
              </div>
              <div className="grid-products">
                <div className="text-center mb-5">
                  <h2>ILUMA PRIME</h2>
                  <p>
                    <b> ILUMA PRIME</b> features a completely new design that
                    blends high-quality metal with an appealing wrap. IQOS ILUMA
                    PRIME features all of the same advantages as IQOS ILUMA.
                  </p>
                  <hr />
                </div>
                <div className="row">
                  {data?.data?.products
                    ?.filter((prod) => prod.CategoryId == "4")
                    .map((prod, index) => (
                      <Item1
                        title={prod?.title}
                        price={prod?.price}
                        discountPrice={prod?.discountPrice}
                        img={prod?.ProductImages[0]?.image}
                        img2={prod?.ProductImages[1]?.image}
                        colors={prod?.Colors?.map((col, index) => (
                          <li
                            key={index}
                            className="swatch medium rounded"
                            style={{ background: col?.name }}
                          ></li>
                        ))}
                        addCart={() => {
                          handleClick(
                            prod?.image,
                            prod?.title,
                            prod?.discountPrice,
                            "1",
                            prod?.discountPrice,
                            prod?.id
                          );
                        }}
                        condition={cartCheck(prod?.id) ? true : false}
                        onClick={() => prodDetails(prod?.slug)}
                      />
                    ))}
                </div>
              </div>
              <div className="grid-products">
                <div className="text-center mb-5">
                  <h2>IQOS ILUMA PRIME OASIS </h2>
                  <p>
                    IQOS ILUMA Prime OASIS is the most premium device of this
                    new limited edition made up of a pocket charger and a device
                    with 20 uses per full charge.
                  </p>
                  <hr />
                </div>
                <div className="row">
                  {data?.data?.products
                    ?.filter((prod) => prod.CategoryId == "5")
                    .map((prod, index) => (
                      <Item1
                        title={prod?.title}
                        price={prod?.price}
                        discountPrice={prod?.discountPrice}
                        img={prod?.ProductImages[0]?.image}
                        img2={prod?.ProductImages[1]?.image}
                        colors={prod?.Colors?.map((col, index) => (
                          <li
                            key={index}
                            className="swatch medium rounded"
                            style={{ background: col?.name }}
                          ></li>
                        ))}
                        addCart={() => {
                          handleClick(
                            prod?.image,
                            prod?.title,
                            prod?.discountPrice,
                            "1",
                            prod?.discountPrice,
                            prod?.id
                          );
                        }}
                        condition={cartCheck(prod?.id) ? true : false}
                        onClick={() => prodDetails(prod?.slug)}
                      />
                    ))}
                </div>
              </div>
              <div className="grid-products">
                <div className="text-center mb-5">
                  <h2>ILUMA STANDARD </h2>
                  <hr />
                </div>
                <div className="row">
                  {data?.data?.products
                    ?.filter((prod) => prod.CategoryId == "6")
                    .map((prod, index) => (
                      <Item1
                        title={prod?.title}
                        price={prod?.price}
                        discountPrice={prod?.discountPrice}
                        img={prod?.ProductImages[0]?.image}
                        img2={prod?.ProductImages[1]?.image}
                        colors={prod?.Colors?.map((col, index) => (
                          <li
                            key={index}
                            className="swatch medium rounded"
                            style={{ background: col?.name }}
                          ></li>
                        ))}
                        addCart={() => {
                          handleClick(
                            prod?.image,
                            prod?.title,
                            prod?.discountPrice,
                            "1",
                            prod?.discountPrice,
                            prod?.id
                          );
                        }}
                        condition={cartCheck(prod?.id) ? true : false}
                        onClick={() => prodDetails(prod?.slug)}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
          <StoreFeature />
        </div>
        <Footer />
        <ItemModel />
      </div>
    </>
  );
}
