import React from "react";

const HeroAreaHomeThree = () => {
  return (
    <>
      <div className="multitech-hero-section3">
        <div className="container">
          <div className="multitech-hero-content3" data-aos="fade-up" data-aos-duration="700">
            <h1 className="hero-title">A complete finance management platform</h1>
            <p className="text">
              Automatically track your daily finances, managing your money in a friendly and
              flexible way. It makes it easy to spend guilt-free and save effortlessly. It is a
              powerful personal or business finance management tool.
            </p>
            <div
              className="multitech-subscription-field mt-50"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              <form action="#">
                <input type="email" placeholder="Enter email address" />
                <button className="multitech-default-btn sub-btn" type="submit">
                  Start your free trial
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="multitech-dasyboard-shape">
        <img src="/assets/images/shape/shape9.svg" alt="" />
      </div>
      <div className="multitech-hero-dashboard3" data-aos="fade-up" data-aos-duration="700">
        <div className="container">
          <img src="/assets/images/v3/dashboard.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default HeroAreaHomeThree;
