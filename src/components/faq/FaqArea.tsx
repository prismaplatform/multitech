"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faq_data1 = [
  {
    delay: 500,
    question: "Datele mele financiare sunt sigure?",
    answer:
      "Da, aplicația folosește criptare la nivel bancar, autentificare multi-factor și alte măsuri de securitate pentru a vă proteja informațiile sensibile.",
  },
  {
    delay: 700,
    question: "Pot conecta mai multe conturi bancare și carduri?",
    answer:
      "Da, puteți conecta mai multe conturi și carduri pentru a vedea toate tranzacțiile într-un singur loc, în siguranță.",
  },
  {
    delay: 900,
    question: "Cum mă ajută aplicația să respect bugetul meu?",
    answer:
      "Aplicația vă oferă categorii de cheltuieli, alerte și rapoarte care vă ajută să vă mențineți în limitele bugetului stabilit.",
  },
  {
    delay: 1100,
    question: "Pot urmări investițiile mele în aplicație?",
    answer:
      "Da, puteți vizualiza și urmări evoluția investițiilor direct din aplicație, într-un tablou de bord dedicat.",
  },
  {
    delay: 1300,
    question: "Aplicația este gratuită sau există taxe de abonament?",
    answer:
      "Aplicația oferă un plan gratuit cu funcționalități de bază, iar pentru opțiuni avansate există planuri cu abonament.",
  },
];

const faq_data2 = [
  {
    delay: 500,
    question: "Care este politica de rambursare?",
    answer:
      "Oferim rambursări în termen de 14 zile de la activarea abonamentului, conform politicii noastre de returnare.",
  },
  {
    delay: 700,
    question: "Cum sunt gestionate datele mele personale și financiare?",
    answer:
      "Respectăm toate reglementările privind protecția datelor și utilizăm protocoale avansate pentru a le păstra în siguranță.",
  },
  {
    delay: 900,
    question: "Există un contract sau un angajament obligatoriu?",
    answer:
      "Nu, vă puteți abona și dezabona oricând, fără obligații pe termen lung.",
  },
  {
    delay: 1100,
    question: "Ce se întâmplă dacă îmi anulez abonamentul?",
    answer:
      "Veți păstra accesul la serviciu până la sfârșitul perioadei de facturare curente, fără taxe suplimentare.",
  },
  {
    delay: 1300,
    question: "Respectați reglementările privind protecția datelor?",
    answer:
      "Da, respectăm GDPR și alte norme relevante pentru protejarea confidențialității dumneavoastră.",
  },
];

const faq_data3 = [
  {
    delay: 500,
    question: "Cum pot contacta echipa de suport?",
    answer:
      "Ne puteți contacta prin formularul de pe site sau prin e-mail la adresa support@exemplu.ro.",
  },
  {
    delay: 700,
    question: "Oferiți sesiuni de instruire sau onboarding?",
    answer:
      "Da, oferim tutoriale, ghiduri și asistență personalizată pentru o tranziție ușoară.",
  },
  {
    delay: 900,
    question: "Aveți un centru de ajutor sau bază de cunoștințe?",
    answer:
      "Da, găsiți articole utile și întrebări frecvente în centrul nostru de ajutor online.",
  },
  {
    delay: 1100,
    question: "Ce fac dacă întâmpin o problemă tehnică?",
    answer:
      "Contactați echipa noastră de suport și vom încerca să rezolvăm problema cât mai rapid posibil.",
  },
  {
    delay: 1300,
    question: "Pot solicita funcționalități personalizate?",
    answer:
      "Da, suntem deschiși la sugestii și dezvoltăm funcții noi în funcție de nevoile utilizatorilor.",
  },
];

const FaqArea = () => {
  const [open, setOpen] = useState(0);
  const [open2, setOpen2] = useState(0);
  const [open3, setOpen3] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [open, open2, open3]);

  return (
    <>
      <div className="lonyo-section-padding9">
        <div className="container">
          <div className="lonyo-faq-wrap1">
            <div className="lonyo-faq-title">
              <h2>Întrebări generale</h2>
            </div>
            {faq_data1.map((item, i) => (
              <div
                key={i}
                className={`lonyo-faq-item item2 ${open === i ? "open" : ""}`}
                data-aos="fade-up"
                data-aos-duration={item.delay}
              >
                <div className="lonyo-faq-header">
                  <h4 onClick={() => setOpen(i)}>{item.question}</h4>
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

          <div className="lonyo-faq-wrap1">
            <div className="lonyo-faq-title">
              <h2>Politici și abonamente</h2>
            </div>
            {faq_data2.map((item, i) => (
              <div
                key={i}
                className={`lonyo-faq-item item2 ${open2 === i ? "open" : ""}`}
                data-aos="fade-up"
                data-aos-duration={item.delay}
              >
                <div className="lonyo-faq-header">
                  <h4 onClick={() => setOpen2(i)}>{item.question}</h4>
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

          <div className="lonyo-faq-wrap1">
            <div className="lonyo-faq-title">
              <h2>Suport tehnic</h2>
            </div>
            {faq_data3.map((item, i) => (
              <div
                key={i}
                className={`lonyo-faq-item item2 ${open3 === i ? "open" : ""}`}
                data-aos="fade-up"
                data-aos-duration={item.delay}
              >
                <div className="lonyo-faq-header">
                  <h4 onClick={() => setOpen3(i)}>{item.question}</h4>
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
            <Link className="lonyo-default-btn faq-btn2" href="/contact">
              Nu găsești răspunsul tău?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqArea;
