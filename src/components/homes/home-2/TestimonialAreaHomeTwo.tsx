"use client";

import React, { useEffect } from "react";
import Slider from "react-slick";
import { LazyLoadTypes } from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

// A tesztimoniál adatok tömbje – IDE TEHETED BE A TÉNYLEGES ADATOKAT
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
  // KEVESEBB ELEM TESZTELÉSÉHEZ: kommentezz ki néhányat, pl:
  // {
  //   text: "Még egy tesztimoniál.",
  //   author: "Teszt Elek",
  //   title: "Tesztelő",
  //   image: "/assets/images/v1/img1.png",
  // },
];

const TestimonialAreaHomeTwo = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    AOS.refresh(); // Frissíti az AOS-t állapotváltozás esetén
  }, []);

  // Slider beállítások
  const settings = {
    // A slidesToScroll alapértelmezésben 1.
    // Ha azt szeretnéd, hogy annyi dia "scroll"-oljon, amennyi látható, állítsd Math.min(testimonials.length, X)-re.
    // De a legtöbb esetben az 1 a jó választás, különösen, ha autoscroll van.
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    arrows: false,
    pauseOnHover: false,
    cssEase: "linear",
    // CENTER PADDING: Próbáld meg ezt 0px-re állítani, ha a probléma továbbra is fennáll.
    // Esetleg egy kisebb értékre, pl. "10px".
    centerPadding: "20px",
    lazyLoad: "progressive" as LazyLoadTypes,

    // DINAMIKUS slidesToSHow BEÁLLÍTÁS: A legfontosabb rész!
    slidesToShow: Math.min(testimonials.length, 4), // Alapértelmezett: maximum 4, vagy amennyi elem van

    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: Math.min(testimonials.length, 2), // Tableteken és kisebb képernyőkön
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: Math.min(testimonials.length, 1), // Mobil eszközökön
          centerPadding: "50px", // Igazítva kisebb képernyőkhöz
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: Math.min(testimonials.length, 1), // Még kisebb mobil eszközökön
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <>
      {/* Fontos: Győződj meg róla, hogy a CSS-edben ez az osztály rendelkezik 'overflow: hidden;'-nel! */}
      <div className="lonyo-section-padding2 position-relative overflow-hidden">
        <div className="container">
          <div className="lonyo-section-title">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <h2>Nu ne crede pe cuvânt, verifică recenziile utilizatorilor</h2>
              </div>
            </div>
          </div>
        </div>
        {/* Feltételesen rendereljük a slidert, ha van elég elem. */}
        {/* Adunk egy 'key' propot a Slidernek, ami a testimonials.length-hez van kötve. */}
        {/* Ez biztosítja, hogy a Slider újrarenderelődjön, ha az elemek száma változik. */}
        {testimonials.length > 0 ? (
          <Slider key={testimonials.length} {...settings} className="lonyo-testimonial-slider-init">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="lonyo-t-wrap wrap2 light-bg">
                <div className="lonyo-t-ratting">
                  <img src="/assets/images/shape/star.svg" alt="" />
                </div>
                <div className="lonyo-t-text">
                  <p>{testimonial.text}</p>
                </div>
                <div className="lonyo-t-author">
                  <div className="lonyo-t-author-thumb">
                    <img src={testimonial.image} alt={testimonial.author} />
                  </div>
                  <div className="lonyo-t-author-data">
                    <p>{testimonial.author}</p>
                    <span>{testimonial.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          // Ezt a részt akkor jelenítjük meg, ha nincs tesztimoniál
          <p className="text-center">Nu există recenzii disponibile momentan.</p>
        )}
        <div className="lonyo-t-overlay2">
          <img src="/assets/images/v2/overlay.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default TestimonialAreaHomeTwo;