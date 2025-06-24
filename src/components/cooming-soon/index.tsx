"use client";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React, { useEffect, useState } from "react";

const CoomingSoon = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const deadlineDate = new Date("December 31, 2025 23:59:59").getTime();
    const intervalId = setInterval(() => {
      const currentDate = new Date().getTime();

      const distance = deadlineDate - currentDate;
      const calculatedDays = Math.floor(distance / (1000 * 60 * 60 * 24));
      const calculatedHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const calculatedMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const calculatedSeconds = Math.floor((distance % (1000 * 60)) / 1000);
      setDays(calculatedDays);
      setHours(calculatedHours);
      setMinutes(calculatedMinutes);
      setSeconds(calculatedSeconds);
      if (distance < 0) {
        clearInterval(intervalId);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);


    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <HeaderOne />
      <div className="multitech-countdown-section light-bg">
        <div className="container">
          <div className="multitech-countdown-wrap" data-aos="fade-up" data-aos-duration="500">
            <div className="multitech-countdown-item wow fadeInUpX" data-wow-delay="0.1s">
              <div className="countdown-days">
                <div className="number">{days}</div>
              </div>
              <p>Days</p>
            </div>
            <div className="multitech-countdown-dot">
              <img src="/assets/images/cooming-soon/dot.svg" alt="" />
            </div>
            <div className="multitech-countdown-item wow fadeInUpX" data-wow-delay="0.2s">
              <div className="countdown-hours">
                <div className="number">{hours}</div>
              </div>
              <p>Hours</p>
            </div>
            <div className="multitech-countdown-dot">
              <img src="/assets/images/cooming-soon/dot.svg" alt="" />
            </div>
            <div className="multitech-countdown-item wow fadeInUpX" data-wow-delay="0.3s">
              <div className="countdown-minutes">
                <div className="number">{minutes}</div>
              </div>
              <p>Minutes</p>
            </div>
            <div className="multitech-countdown-dot">
              <img src="/assets/images/cooming-soon/dot.svg" alt="" />
            </div>
            <div className="multitech-countdown-item wow fadeInUpX" data-wow-delay="0.4s">
              <div className="countdown-seconds">
                <div className="number">{seconds}</div>
              </div>
              <p>Seconds</p>
            </div>
          </div>
          <div className="multitech-countdown-content" data-aos="fade-up" data-aos-duration="700">
            <h1>We have some exciting things planned for you!</h1>
            <p>
              We have some thrilling plans in store for you that you won’t want to miss! Get ready
              for an adventure filled with excitement and surprises! Subscribe to stay tuned...
            </p>
            <div
              className="multitech-subscription-field mt-50"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter email address" />
                <button className="multitech-default-btn sub-btn" type="submit">
                  Subscribe now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoomingSoon;
