"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

// Define interface for slide data
interface SlideItem {
  id: number;
  highlight: string;
  title: string;
  text: string;
  image: string;
}

const HeroAreaHomeOne = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Refresh AOS on slide change
  useEffect(() => {
    AOS.refresh();
  }, [activeIndex]);

  // Slider settings with TypeScript typing
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 50000,
    arrows: false,
    pauseOnHover: false,
    beforeChange: (current: number, next: number) => setActiveIndex(next),
  };

  // Slide data
  const slides: SlideItem[] = [
    {
      id: 1,
      highlight: "roboți colaborativi",
      title: "Automatizare rapidă cu",
      text: "Automatizarea ajută la rezolvarea deficitului de forță de muncă, la creșterea productivității și la îmbunătățirea calității produselor. Roboții oferă o soluție de automatizare rentabilă, flexibilă și sigură pentru o gamă largă de sarcini de producție.",
      image: "/assets/images/v1/hero-thumb.png",
    },
    {
      id: 2,
      highlight: "soluții inovatoare",
      title: "Tehnologie avansată cu",
      text: "Noi soluții tehnologice transformă modul în care companiile operează. Implementarea tehnologiilor moderne crește eficiența și reduce costurile pe termen lung.",
      image: "/assets/images/v1/hero-thumb5.png",
    },
  ];

  return (
    <div className="multitech-hero-section">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={slide.id}>
            <div className="container">
              <div className="row h-100">
                {/* Text Content - Fades up */}
                <div className="col-lg-7 d-flex align-items-center h-100">
                  <div 
                    className="multitech-hero-content"
                    data-aos="fade-up"
                    data-aos-duration={700}
                    data-aos-delay={index === activeIndex ? 100 : 0}
                  >
                    <div className="color-orange line mb-3"></div>
                    <h1 className="hero-title">
                      {slide.title}{" "}
                      <span className="highlight">{slide.highlight}</span>
                    </h1>
                    <p className="text">{slide.text}</p>
                    <div className="mt-50">
                      <Link
                        href="/about-us"
                        className="multitech-default-btn hero-btn"
                      >
                        Mai departe
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Image - Fades left */}
                <div className="col-lg-5 h-100">
                  <div 
                    className="multitech-hero-thumb"
                    data-aos="fade-left"
                    data-aos-duration={700}
                    data-aos-delay={index === activeIndex ? 300 : 0}
                  >
                    <Image 
                      src={slide.image} 
                      alt={`Slide ${slide.id}`} 
                      height={600}
                      width={450}
                      style={{width:"100%",objectFit:"contain"}}
                     quality={100} 
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroAreaHomeOne;