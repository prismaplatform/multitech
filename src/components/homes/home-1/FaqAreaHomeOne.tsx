"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faq_data = [
  {
    id: 1,
    delay: 500,
    question: "Datele mele financiare sunt sigure?",
    answer:
      "Da, aplicația folosește criptare la nivel bancar, autentificare multi-factor și alte măsuri de securitate pentru a proteja informațiile sensibile.",
  },
  {
    id: 2,
    delay: 700,
    question: "Pot conecta mai multe conturi bancare și carduri?",
    answer:
      "Da, puteți conecta mai multe conturi bancare și carduri pentru a obține o imagine completă a finanțelor într-un singur loc.",
  },
  {
    id: 3,
    delay: 900,
    question: "Cum mă ajută aplicația să respect bugetul?",
    answer:
      "Aplicația vă ajută prin clasificarea cheltuielilor, stabilirea de limite bugetare și notificări în timp real când depășiți bugetul.",
  },
  {
    id: 4,
    delay: 1100,
    question: "Pot urmări investițiile mele în aplicație?",
    answer:
      "Da, puteți urmări investițiile, analiza tendințele pieței și obține informații despre performanța portofoliului.",
  },
  {
    id: 5,
    delay: 1300,
    question: "Aplicația este gratuită sau există taxe de abonament?",
    answer:
      "Aplicația oferă atât un plan gratuit, cât și planuri premium cu funcționalități suplimentare contra cost.",
  },
];

const FaqAreaHomeOne = ({ style_2, style_3, style_4 }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [activeIndex]);

  return (
    <>
      <div
        className={`lonyo-section-padding4 ${style_4 ? "section" : ""} ${
          style_2 ? "section" : style_3 ? "section pt-0" : ""
        }`}
      >
        <div className="container">
          <div className="lonyo-section-title center">
            <h2>Găsește răspunsuri la toate întrebările de mai jos</h2>
          </div>
          {style_3 ? null : style_4 ? null : <div className="lonyo-faq-shape"></div>}
          <div className="lonyo-faq-wrap1">
            {faq_data.map((item, i) => (
              <div
                key={i}
                className={`lonyo-faq-item item2 ${activeIndex === i ? "open" : ""}`}
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <div className="lonyo-faq-header" onClick={() => setActiveIndex(i)}>
                  <h4>{item.question}</h4>
                  <div className="lonyo-active-icon">
                    <img className="plasicon" src="/assets/images/v1/mynus.svg" alt="" />
                    <img className="mynusicon" src="/assets/images/v1/plas.svg" alt="" />
                  </div>
                </div>
                <div className="lonyo-faq-body body2">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="faq-btn" data-aos="fade-up" data-aos-duration="700">
            <Link className="lonyo-default-btn faq-btn2" href="/faq">
              Nu găsești răspunsul tău?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqAreaHomeOne;
