"use client"
import React from 'react';

const ResetPasswordArea = () => {
  return (
    <>
      <div className="multitech-account-section light-bg">
        <div className="container">
          <div className="multitech-account-title center">
            <h1>Reset Password</h1>
            <p>Drop your email address and we'll shoot you a magical link!</p>
          </div>
          <div className="multitech-account-box" data-aos="fade-up" data-aos-duration="700">
            <div className="multitech-contact-box2">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="multitech-main-field">
                  <p>Email address*</p>
                  <input className="light-bg" type="email" placeholder="Your email address" />
                </div>
                <button className="multitech-default-btn extra-btn d-block" type="button">Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordArea;