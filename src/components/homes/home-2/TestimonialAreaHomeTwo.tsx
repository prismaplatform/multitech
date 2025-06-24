"use client";

import React, { useEffect } from "react";
import Slider from "react-slick";
import { LazyLoadTypes } from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    text: "Această aplicație mi-a transformat bugetarea! Am acum o viziune clară și nu mai trebuie să-mi fac griji pentru cheltuieli și obiectivele de economii. A fost un succes!",
    author: "Liam Gallagher",
    title: "Profesor la Luxe Escapes Hotels",
    image: "/assets/images/v1/img7.png",
  },
  {
    text: "„Interfața este intuitivă și îmi place cum se sincronizează cu conturile mele bancare. Nu mai trebuie să-mi fac griji pentru urmărirea manuală. Recomand cu încredere!”",
    author: "Michael Chen",
    title: "Fondator EcoChic Apparel",
    image: "/assets/images/v1/img2.png",
  },
  {
    text: "„Cu această aplicație, am reușit să-mi respect bugetul și chiar să economisesc pentru o vacanță. Alertele de buget sunt o schimbare majoră!”",
    author: "David Nguyen",
    title: "COO la Luxe Escapes Hotels",
    image: "/assets/images/v1/img3.png",
  },
  {
    text: "„Având toate conturile într-un singur loc, am control complet asupra cheltuielilor mele. Recomand cu încredere!”",
    author: "Rachel Kim",
    title: "CEO la GreenLeaf Organics",
    image: "/assets/images/v1/img5.png",
  },
  {
    text: "„Având toate conturile într-un singur loc, am control complet asupra banilor mei. Atât de ușor de utilizat și util! Recomand cu încredere!”",
    author: "Aisha Hassan",
    title: "CEO la RoyexLeaf Organics",
    image: "/assets/images/v1/img6.png",
  },
];

const TestimonialAreaHomeTwo = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    AOS.refresh(); 
  }, []);

  const settings = {
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    arrows: false,
    pauseOnHover: false,
    cssEase: "linear",
    centerPadding: "20px",
    lazyLoad: "progressive" as LazyLoadTypes,
    slidesToShow: Math.min(testimonials.length, 4),

    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: Math.min(testimonials.length, 2),
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: Math.min(testimonials.length, 1),
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: Math.min(testimonials.length, 1),
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <>
    
      <div className="multitech-section-padding2 position-relative overflow-hidden">
        <div className="container">
          <div className="multitech-section-title">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <h2>Nu ne crede pe cuvânt, verifică recenziile utilizatorilor</h2>
              </div>
            </div>
          </div>
        </div>
       
        {testimonials.length > 0 ? (
          <Slider key={testimonials.length} {...settings} className="multitech-testimonial-slider-init">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="multitech-t-wrap wrap2 light-bg">
                <div className="multitech-t-ratting">
                  <img src="/assets/images/shape/star.svg" alt="" />
                </div>
                <div className="multitech-t-text">
                  <p>{testimonial.text}</p>
                </div>
                <div className="multitech-t-author">
                  <div className="multitech-t-author-thumb">
                    <img src={testimonial.image} alt={testimonial.author} />
                  </div>
                  <div className="multitech-t-author-data">
                    <p>{testimonial.author}</p>
                    <span>{testimonial.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
         
          <p className="text-center">Nu există recenzii disponibile momentan.</p>
        )}
        <div className="multitech-t-overlay2">
          <img src="/assets/images/v2/overlay.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default TestimonialAreaHomeTwo;