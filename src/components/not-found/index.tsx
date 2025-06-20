import HeaderOne from "@/layouts/headers/HeaderOne";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <HeaderOne />
      <div className="multitech-error-section light-bg">
        <div className="container">
          <div className="multitech-error-content" data-aos="fade-up" data-aos-duration="700">
            <div
              className="multitech-error-thumb aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <img src="/assets/images/404/404.svg" alt="" />
            </div>
            <h1>Page not found</h1>
            <p>
              Oops! The page you're trying to access has been relocated, given a new name, or is
              currently unavailable.
            </p>
            <Link
              className="multitech-default-btn career-btn mt-50"
              data-aos="fade-up"
              data-aos-duration="900"
              href="/"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
