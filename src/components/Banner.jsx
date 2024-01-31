import "swiper/css";
import React from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <>
      <div className="slideshow slideshow-wrapper pb-section sliderFull">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper home-slideshow"
        >
          <SwiperSlide>
            <div className="slide">
              <div className="blur-up lazyload bg-size">
                <img
                  className="blur-up lazyload bg-img"
                  src="assets/images/banner1.jpg"
                  alt="banner1"
                  style={{height:"100%" , objectFit:"cover"}}
                />
                <div className="slideshow__text-wrap slideshow__overlay classNameic bottom">
                  <div className="slideshow__text-content bottom">
                    <div className="wrap-caption center">
                      <h2 className="h1 mega-title slideshow__title">
                      Buy IQOS ILUMA IN DUBAI
                      </h2>
                      <span className="mega-subtitle slideshow__subtitle">
                      Buy online authentic IQOS devices, Heets and IQOS accessories in the UAE.
                      </span>
                      <Link to="/shop" className="btn">Shop now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blur-up lazyload bg-size">
              <img
                className="blur-up lazyload bg-img"
                src="assets/images/banner2.jpg"
                alt="banner2"
                style={{height:"100%" , objectFit:"cover"}}
              />
              <div className="slideshow__text-wrap slideshow__overlay classNameic bottom">
                <div className="slideshow__text-content bottom">
                  <div className="wrap-caption center">
                    <h2 className="h1 mega-title slideshow__title">
                    HEETS PARLIAMENT Ruby Fuse
                    </h2>
                    <span className="mega-subtitle slideshow__subtitle">
                    Buy online authentic IQOS devices, Heets and IQOS accessories in the UAE.
                    </span>
                    <Link to="/shop" className="btn">Shop now</Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
