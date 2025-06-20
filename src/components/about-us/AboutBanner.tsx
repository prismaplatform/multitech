"use client";
import VideoPopup from "@/modals/VideoPopup";
import React, { useState } from "react";

const AboutBanner = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <>
      <div className="lonyo-section-padding2">
        <div className="container">
           <div className="row">
            <div className="col-lg-7">
              <div className="lonyo-hero-dashbord h-100" data-aos="fade-right" data-aos-duration="700">
                <img src="/assets/images/about-us/about_section_multitech.jpg"  style={{borderRadius:"10px",objectFit:"cover",height:"100%"}} alt="" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="lonyo-video-thumb2 h-100" data-aos="fade-left" data-aos-duration="700">
                <img src="/assets/images/about-us/about_section_consulting.jpg"  style={{objectFit:"cover"}}alt="" />
                <a
                  className="play-btn video-init"
                  onClick={() => setIsVideoOpen(true)}
                  style={{ cursor: "pointer" }}
                >
                  <img src="/assets/images/shape/play-icon.svg" alt="" />
                  <div className="waves wave-1"></div>
                  <div className="waves wave-2"></div>
                  <div className="waves wave-3"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default AboutBanner;
