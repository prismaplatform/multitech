"use client";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const setting = {
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  arrows: false,
  pauseOnHover: false,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1399,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const setting2 = {
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  arrows: false,
  pauseOnHover: false,
  cssEase: "linear",
  rtl: true,
  responsive: [
    {
      breakpoint: 1399,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const BrandAreaHomeThree = () => {
  return (
    <>
      <section className="multitech-section-padding3">
        <div className="container">
          <div className="multitech-section-title center">
            <h2>It integrates with all your existing tools</h2>
          </div>

          <Slider {...setting} className="multitech-slider-icon-data">
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t1.svg" alt="" />
            </div>
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t2.svg" alt="" />
            </div>
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t3.svg" alt="" />
            </div>
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t4.svg" alt="" />
            </div>
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t5.svg" alt="" />
            </div>
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t6.svg" alt="" />
            </div>
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t4.svg" alt="" />
            </div>
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t1.svg" alt="" />
            </div>
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t2.svg" alt="" />
            </div>
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t3.svg" alt="" />
            </div>
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t4.svg" alt="" />
            </div>
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t5.svg" alt="" />
            </div>
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t6.svg" alt="" />
            </div>
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t4.svg" alt="" />
            </div>
          </Slider>

          <Slider {...setting2} className="multitech-slider-icon-data">
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t7.svg" alt="" />
            </div>
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t8.svg" alt="" />
            </div>
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t9.svg" alt="" />
            </div>
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t10.svg" alt="" />
            </div>
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t11.svg" alt="" />
            </div>
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t7.svg" alt="" />
            </div>
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t9.svg" alt="" />
            </div>
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t7.svg" alt="" />
            </div>
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t8.svg" alt="" />
            </div>
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t9.svg" alt="" />
            </div>
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t10.svg" alt="" />
            </div>
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t11.svg" alt="" />
            </div>
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t7.svg" alt="" />
            </div>
            <div className="multitech-t-slider-icon">
              <img src="/assets/images/v3/t9.svg" alt="" />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default BrandAreaHomeThree;
