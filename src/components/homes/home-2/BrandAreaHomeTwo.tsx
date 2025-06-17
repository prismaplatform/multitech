"use client";
import React from "react";
import Slider from "react-slick";

const setting = {
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  arrows: false,
  pauseOnHover: false,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1699,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1399,
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

const BrandAreaHomeTwo = () => {
  return (
    <>
      <div className="lonyo-section-padding4">
        <div className="container">
          <h4 className="text-center">
           Aveţi nevoie să marcați un cod pe ambalaj? Doriți să automatizați procesul de producție? Avem soluţii pentru îndeplinirea acestor cerinţe! Selectați mai jos domeniul de activitate:
          </h4>
        </div>
        <Slider {...setting} className="brand-slider-js-init my-5">
          <div className="lonyo-brand-slider-item">
            <img src="/assets/images/brand/brand3.svg" alt="" />
          </div>
          <div className="lonyo-brand-slider-item">
            <img src="/assets/images/brand/brand2.svg" alt="" />
          </div>
          <div className="lonyo-brand-slider-item ml-10">
            <img src="/assets/images/brand/brand4.svg" alt="" />
          </div>
          <div className="lonyo-brand-slider-item">
            <img src="/assets/images/brand/brand5.svg" alt="" />
          </div>
          <div className="lonyo-brand-slider-item">
            <img src="/assets/images/brand/brand6.svg" alt="" />
          </div>
          <div className="lonyo-brand-slider-item">
            <img src="/assets/images/brand/brand7.svg" alt="" />
          </div>
          <div className="lonyo-brand-slider-item">
            <img src="/assets/images/brand/brand5.svg" alt="" />
          </div>
          <div className="lonyo-brand-slider-item">
            <img src="/assets/images/brand/brand2.svg" alt="" />
          </div>
          <div className="lonyo-brand-slider-item">
            <img src="/assets/images/brand/brand3.svg" alt="" />
          </div>
          <div className="lonyo-brand-slider-item ml-10">
            <img src="/assets/images/brand/brand4.svg" alt="" />
          </div>
          <div className="lonyo-brand-slider-item">
            <img src="/assets/images/brand/brand5.svg" alt="" />
          </div>
          <div className="lonyo-brand-slider-item">
            <img src="/assets/images/brand/brand5.svg" alt="" />
          </div>
          <div className="lonyo-brand-slider-item">
            <img src="/assets/images/brand/brand2.svg" alt="" />
          </div>
          <div className="lonyo-brand-slider-item">
            <img src="/assets/images/brand/brand3.svg" alt="" />
          </div>
          <div className="lonyo-brand-slider-item ml-10">
            <img src="/assets/images/brand/brand4.svg" alt="" />
          </div>
          <div className="lonyo-brand-slider-item">
            <img src="/assets/images/brand/brand5.svg" alt="" />
          </div>
          <div className="lonyo-brand-slider-item">
            <img src="/assets/images/brand/brand6.svg" alt="" />
          </div>
          <div className="lonyo-brand-slider-item">
            <img src="/assets/images/brand/brand7.svg" alt="" />
          </div>
          <div className="lonyo-brand-slider-item">
            <img src="/assets/images/brand/brand3.svg" alt="" />
          </div>
          <div className="lonyo-brand-slider-item">
            <img src="/assets/images/brand/brand2.svg" alt="" />
          </div>
          <div className="lonyo-brand-slider-item">
            <img src="/assets/images/brand/brand3.svg" alt="" />
          </div>
          <div className="lonyo-brand-slider-item ml-10">
            <img src="/assets/images/brand/brand4.svg" alt="" />
          </div>
          <div className="lonyo-brand-slider-item">
            <img src="/assets/images/brand/brand5.svg" alt="" />
          </div>
        </Slider>
        <div className="lonyo-brand-shape">
          <img src="/assets/images/brand/overlay.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default BrandAreaHomeTwo;
