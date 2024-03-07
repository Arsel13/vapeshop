import React from "react";

export default function BreadCrumbs(props) {
  return (
    <>
      <div className="bredcrumbWrap">
        <div className="container breadcrumbs">
          <a href="/" title="Back to the home page">
            Home
          </a>
          <span aria-hidden="true"> = </span>
          <a href="/shop">Products</a>
          <span aria-hidden="true"> = </span>
          <span>{props.title}</span>
        </div>
      </div>
    </>
  );
}
