"use client";
import Link from "next/link";
import React, { useState } from "react";

const tabsData = [
  {
    id: 1,
    title: "Industry Expo",
    icon: "/assets/images/v1/tv.svg",
    content:
      "Industry Expo este un eveniment dedicat inovației industriale, desfășurat pe 31 octombrie 2024 la Arad. Participanții vor putea explora cele mai noi tehnologii din domeniul automatizărilor, soluții digitale pentru producție și tendințele viitorului industrial. Expoziția reunește companii de top, experți și pasionați din industrie într-un cadru interactiv și inspirațional.",
  }
];

const FinancialUpdateHomeOne = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <div className="multitech-section-padding2">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 order-lg-2">
              <div
                className="multitech-content-thumb"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <img src="/assets/images/events/lastEvent.jpg" alt="" style={{borderRadius:"12px"}}/>
              </div>
            </div>
            <div className="col-lg-7 d-flex align-items-center">
              <div
                className="multitech-default-content pr-50"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                <h2>Evenimente Multitech</h2>
                <p className="data">
                  Rămâi conectat cu cele mai recente noutăți și tendințe din industrie prin participarea la evenimentele organizate de Multitech.
                </p>
                <div className="mt-50">
                  <ul className="tabs">
                    {tabsData.map((item, i) => (
                      <li
                        className={`${
                          activeTab === item.id ? "active-tab" : ""
                        }`}
                        key={i}
                        onClick={() => setActiveTab(item.id)}
                      >
                        <img src={item.icon} alt="" />
                        <h4>{item.title}</h4>
                      </li>
                    ))}
                  </ul>
                  <ul className="tabs-content">
                    {tabsData.map((item, i) => (
                      <li
                        style={{
                          display: activeTab === item.id ? "block" : "none",
                        }}
                        key={i}
                      >
                        {item.content}
                      </li>
                    ))}
                  </ul>
                    <Link href="/event" className="multitech-default-btn hero-btn mt-4">
                  Vedeți toate evenimentele
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="multitech-content-shape2"></div>
        </div>
      </div>
    </>
  );
};

export default FinancialUpdateHomeOne;
