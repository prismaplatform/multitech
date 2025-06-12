import Link from "next/link";
import React from "react";

const HeroAreaHomeOne = () => {
  return (
    <>
      <div className="lonyo-hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 d-flex align-items-center">
              <div
                className="lonyo-hero-content"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <div className="color-orange line"></div>
                <h1 className="hero-title">
                  Automatizare rapidă cu <span className="highlight">roboți colaborativi</span>
                </h1>
                <p className="text">
                  Automatizarea ajută la rezolvarea deficitului de forță de
                  muncă, la creșterea productivității și la îmbunătățirea
                  calității produselor. Roboții oferă o soluție de automatizare
                  rentabilă, flexibilă și sigură pentru o gamă largă de sarcini
                  de producție.
                </p>
                <div
                  className="mt-50"
                  data-aos="fade-up"
                  data-aos-duration="900"
                >
                  <Link href="/sign-up" className="lonyo-default-btn hero-btn">
                   Mai departe
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="lonyo-hero-thumb"
                data-aos="fade-left"
                data-aos-duration="700"
              >
                
                <img src="/assets/images/v1/hero-thumb.png" alt="" />
                {/* <div className="lonyo-hero-shape">
                  <img src="/assets/images/shape/hero-shape1.svg" alt="" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroAreaHomeOne;
