import Link from "next/link";
import React from "react";

const Breadcrumb = ({ title, subtitle }: any) => {
  return (
    <>
      <div className="breadcrumb-wrapper light-bg">
        <div className="container">
          <div className="breadcrumb-content">
            <h2 className="breadcrumb-title pb-0">{title}</h2>
            <div className="breadcrumb-menu-wrapper">
              <div className="breadcrumb-menu-wrap">
                <div className="breadcrumb-menu">
                  <ul>
                    <li>
                      <Link href="/">Acasă</Link>
                    </li>
                    <li>
                      <img src="/assets/images/blog/right-arrow.svg" alt="right-arrow" />
                    </li>
                    <li aria-current="page">{subtitle}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="lonyo-content-shape">
          <img src="/assets/images/shape/shape2_rotate.svg" alt="" />
        </div>
    </>
  );
};

export default Breadcrumb;
