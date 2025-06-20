"use client";
import features_data from "@/data/features-data";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const FeaturesAreaHomeOne = ({ style_2, style_3 }: any) => {
  const feature_data = features_data;
  return (
    <>
<div
        className="lonyo-content-shape1"
        style={{
          height: "140px",
          backgroundImage: "url('/assets/images/shape/shape1.svg')", // Corrected URL syntax
          backgroundSize: "cover", // Ensure the image covers the area
          backgroundPosition: "left", // Center the background image
          backgroundRepeat: "no-repeat", // Prevent image repetition
        }}
      ></div>
      <div className="lonyo-section-padding2 position-relative">
        <div className="container">
          <div className="lonyo-section-title text-center"        data-aos="fade-up"
                data-aos-duration="700">
            <h2>
              La Multitech, avem soluții de{" "}
              <span className="text-yellow fw-bold">
                <TypeAnimation
                  preRenderFirstString={true}
                  sequence={[
                    "automatizare",
                    2000, // 2s várakozás
                    "marcare",
                    2000,
                    "etichetare",
                    2000,
                  ]}
                  wrapper="span"
                  speed={40}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                />
              </span>
            </h2>
            <h2>special concepute pentru aplicația dumneavoastră</h2>
          </div>

          <div className="row d-flex justify-content-center">
            {feature_data.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-6 col-md-6 d-flex mb-4 mb-lg-0">
                <div
                  className="summary-card h-100 d-flex flex-column"
                  data-aos="fade-up"
                  data-aos-duration={item.delay}
                  style={{ borderTop: "5px solid " + item.color }}
                >
                  <div className="feature-icon d-flex justify-content-center mb-3">
                    <Image
                      src={item.icon}
                      height={80}
                      width={80}
                      alt={item.title}
                      className="img-fluid"
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "80px",
                      }}
                    />
                  </div>
                  <h3 className="summary-title text-center">{item.title}</h3>
                  <div className="summary-items text-center flex-grow-1">
                    <p className="card-description">{item.description}</p>
                  </div>

                  <div className="d-flex flex-wrap gap-2 justify-content-center mt-auto">
                    {item.features.map((item2, i2) => (
                      <Link key={i2} href="#">
                        <span className="service-badge px-3 py-2 d-flex align-items-center">
                          {item2.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </>
  );
};

export default FeaturesAreaHomeOne;
