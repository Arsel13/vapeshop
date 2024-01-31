import React from "react";
export default function ShopFilter(props) {
  return (
    <>
      <div className="col-12 col-sm-12 col-md-3 col-lg-3 sidebar filterbar">
        <div className="closeFilter d-block d-md-none d-lg-none">
          <i className="icon icon anm anm-times-l"></i>
        </div>
        <div className="sidebar_tags">
          <div className="sidebar_widget categories filter-widget">
            <div className="widget-title">
              <h2>Categories</h2>
            </div>
            <div className="widget-content">
              <ul className="sidebar_categories">
                {props.filter}
              </ul>
            </div>
          </div>
          <div className="sidebar_widget filterBox filter-widget">
            <div className="widget-title">
              <h2>Color</h2>
            </div>
            <div className="filter-color swacth-list clearfix">
              <span className="swacth-btn black"></span>
              <span className="swacth-btn white checked"></span>
              <span className="swacth-btn red"></span>
              <span className="swacth-btn blue"></span>
              <span className="swacth-btn pink"></span>
              <span className="swacth-btn gray"></span>
              <span className="swacth-btn green"></span>
              <span className="swacth-btn orange"></span>
              <span className="swacth-btn yellow"></span>
              <span className="swacth-btn blueviolet"></span>
              <span className="swacth-btn brown"></span>
              <span className="swacth-btn darkGoldenRod"></span>
              <span className="swacth-btn darkGreen"></span>
              <span className="swacth-btn darkRed"></span>
              <span className="swacth-btn dimGrey"></span>
              <span className="swacth-btn khaki"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
