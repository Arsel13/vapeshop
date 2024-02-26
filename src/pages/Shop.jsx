import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import TopHeader from "../components/TopHeader";
import ItemModel from "../components/ItemModel";
import StoreFeature from "../components/StoreFeature";
import HeroSection from "../components/HeroSection";
import ShopFilter from "../components/ShopFilter";
import Item1 from "../components/Item1";
import GetAPI from "../api/GetAPI";
import { BASE_URL } from "../Utilities/URL";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Shop() {
  const { data } = GetAPI("get_all_products");
  const [tabs, setTabs] = useState("");
  const navigate = useNavigate();
  const prodDetails = async (slug) => {
    var config = {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    };
    try {
      axios.get(BASE_URL + `product_details/${slug}`, config).then((dat) => {
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
          <HeroSection />
          <div className="container mt-5">
            <div className="row">
              <ShopFilter
                filter={data?.data?.categories?.map((filter, index) => (
                  <li className="lvl-1">
                    <button
                      onClick={() =>
                        tabs == filter?.id ? setTabs("") : setTabs(filter?.id)
                      }
                    >
                      {filter?.name}
                    </button>
                  </li>
                ))}
                setTabs={setTabs}
              />
              <div className="col-12 col-sm-12 col-md-9 col-lg-9 main-col">
                <div className="productList">
                  <button
                    type="button"
                    className="btn btn-filter d-block d-md-none d-lg-none"
                  >
                    Product Filters
                  </button>
                  <div className="toolbar">
                    <div className="filters-toolbar-wrapper">
                      <div className="row">
                        <div className="col-4 col-md-4 col-lg-4 filters-toolbar__item collection-view-as d-flex justify-content-start align-items-center">
                          <a
                            title="Grid View"
                            className="change-view change-view--active"
                          >
                            <img src="assets/images/grid.jpg" alt="Grid" />
                          </a>
                          <a title="List View" className="change-view">
                            <img src="assets/images/list.jpg" alt="List" />
                          </a>
                        </div>
                        <div className="col-4 col-md-4 col-lg-4 text-center filters-toolbar__item filters-toolbar__item--count d-flex justify-content-center align-items-center">
                          <span className="filters-toolbar__product-count">
                            {/* Showing: 22 */}
                          </span>
                        </div>
                        <div className="col-4 col-md-4 col-lg-4 text-right">
                          <div className="filters-toolbar__item">
                            <label for="SortBy" className="hidden">
                              Sort
                            </label>
                            <select
                              name="SortBy"
                              id="SortBy"
                              className="filters-toolbar__input filters-toolbar__input--sort"
                            >
                              <option
                                value="title-ascending"
                                selected="selected"
                              >
                                Sort
                              </option>
                              <option>Best Selling</option>
                              <option>Alphabetically, A-Z</option>
                              <option>Alphabetically, Z-A</option>
                              <option>Price, low to high</option>
                              <option>Price, high to low</option>
                              <option>Date, new to old</option>
                              <option>Date, old to new</option>
                            </select>
                            <input
                              className="collection-header__default-sort"
                              type="hidden"
                              value="manual"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid-products grid--view-items">
                    <div className="row">
                      {tabs === ""
                        ? data?.data?.products.map((prod, index) => (
                            <Item1
                              title={prod?.title}
                              price={prod?.price}
                              discountPrice={prod?.discountPrice}
                              img={prod?.ProductImages[0]?.image}
                              img2={prod?.ProductImages[1]?.image}
                              colors={prod?.Colors?.map((col, index) => (
                                <li
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
                          ))
                        : data?.data?.products
                            ?.filter((prod) => prod.CategoryId == tabs)
                            .map((prod, index) => (
                              <Item1
                                title={prod?.title}
                                price={prod?.price}
                                discountPrice={prod?.discountPrice}
                                img={prod?.ProductImages[0]?.image}
                                img2={prod?.ProductImages[1]?.image}
                                colors={prod?.Colors?.map((col, index) => (
                                  <li
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
