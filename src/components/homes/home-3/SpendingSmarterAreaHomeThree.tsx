"use client";
import Link from "next/link";
import React from "react";

const SpendingSmarterAreaHomeThree = () => {
  const services = [
    {
      title: "Inkjet Caractere Mici – Videojet",
      image: "/assets/images/v1/feature1.svg",
      description:
        "Imprimare non-contact pe bază de cerneală până la cinci rânduri de text, coduri lineare și coduri de bare sau simboluri grafice pe o varietate de tipuri de ambalaje, inclusiv ambalaje staționare prin sisteme de traversare.",
      duration: 500,
      links: [{ text: "Videojet", href: "/videojet-cij" }],
    },
    {
      title: "Inkjet Caractere Mari – Videojet",
      image: "/assets/images/v1/feature2.svg",
      description:
        "Imprimare non-contact pe bază de cerneală multiple tipuri de date (alfanumerice, imagini și logo-uri, coduri 1d și 2d) cu dimensiuni mari, utilizată în principal pentru ambalaje secundare, precum cutiile din carton.",
      duration: 600,
      links: [{ text: "Videojet LCM", href: "/videojet-lcm" }],
    },
    {
      title: "Transfer Termic – Videojet",
      image: "/assets/images/v1/feature3.svg",
      description:
        "Inscripționare cu un cap de imprimare controlat digital ce topește cu precizie cerneala de pe un ribbon pe folii flexibile pentru a produce imprimări de mare rezoluție.",
      duration: 700,
      links: [{ text: "Videojet TTO", href: "/videojet-tto" }],
    },
    {
      title: "Etichetare – Videojet & Novexx",
      image: "/assets/images/v1/feature4.svg",
      description:
        "Imprimare și aplicare de etichete de diferite dimensiuni direct pe produse sau pe multiple tipuri de ambalaje (cutii, paleți, ambalaje de tip shrink-wrap).",
      duration: 800,
      links: [
        { text: "Videojet", href: "/videojet-labeling" },
        { text: "Etipack", href: "/etipack" },
        { text: "Novexx", href: "/novexx" },
      ],
    },
    {
      title: "Inkjet Termic – Videojet",
      image: "/assets/images/v1/feature5.svg",
      description:
        "Imprimare non-contact pe bază de cerneală care utilizează căldura și tensiunea suprafeței pentru a transfera cerneala pe o suprafață de ambalare. Se utilizează în general pentru a imprima coduri DataMatrix și alte coduri de bare.",
      duration: 900,
      links: [{ text: "Videojet TIJ", href: "/videojet-tij" }],
    },
    {
      title: "Lasere – Videojet & Foba",
      image: "/assets/images/v1/feature6.svg",
      description:
        "Inscripționare cu un fascicul de lumină infraroșie, ce este aplicat și condus printr-o serie de oglinzi controlate cu precizie pentru a marca locurile în care căldura fasciculului interacționează cu suprafața produsului.",
      duration: 1000,
      links: [
        { text: "Videojet", href: "/videojet-laser" },
        { text: "Foba", href: "/foba" },
      ],
    },
    {
      title: "Transfer Termic – Eidos Coditherm",
      image: "/assets/images/v1/feature7.svg",
      description:
        "Coditherm poate fi utilizat pentru a imprima prin transfer termic multiple tipuri de date (alfanumerice, imagini și logo-uri, coduri 1d și 2d) pe obiecte rigide.",
      duration: 1100,
      links: [{ text: "Eidos Coditherm", href: "/eidos-coditherm" }],
    },
    {
      title: "Micropercuție – Couth",
      image: "/assets/images/v1/feature8.svg",
      description:
        "Marcare cu un vârf de carbură metalică ce oscilează (lovește materialul), iar prin reglarea frecvenței de impact se pot obține linii continue sau linii formate din puncte.",
      duration: 1200,
      links: [{ text: "Couth", href: "/couth" }],
    },
  ];

  return (
    <>
 <div
        className="lonyo-content-shape1"
        style={{
          height: "105px",
          backgroundImage: "url('/assets/images/shape/shape1.svg')", // Corrected URL syntax
          backgroundSize: "cover", // Ensure the image covers the area
          backgroundPosition: "left", // Center the background image
          backgroundRepeat: "no-repeat", // Prevent image repetition
        }}
      ></div>
      <div className="lonyo-section-padding2">
        <div className="container">
          <div className="lonyo-default-content">
            <h2>Cea mai largă ofertă de tehnologie</h2>
            <p className="data">Când vine vorba de marcare, vă oferim soluția potrivită prin cea mai largă gamă de tehnologii de pe piață.</p>
            <p></p>
          </div>
          <div className="row d-flex justify-content-center">
            {services.map((service, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-6 col-md-6 mb-4 d-flex"
              >
                <div
                  className="lonyo-service-wrap light-bg d-flex flex-column h-100"
                  data-aos="fade-up"
                  data-aos-duration={service.duration}
                >
                  <div className="lonyo-service-title ">
                    <h4>{service.title}</h4>
                    <img
                      src={service.image}
                      alt=""
                      className="ms-3" // Added margin-bottom
                    />
                    
                  </div>
                  <div className="lonyo-service-data flex-grow-1">
                    <p>{service.description}</p>
                  </div>
                  <div className="lonyo-service-links d-flex flex-wrap gap-3 mt-auto">
                    {" "}
                    {/* Added gap and mt-auto for pushing links to bottom */}
                    {service.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        className="title-btn bg-transparent"
                        href={link.href} // Changed to use link.href
                      >
                        {link.text}
                        <svg
                          width="18"
                          height="16"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.7796 8.53108L11.03 15.2807C10.8893 15.4214 10.6984 15.5005 10.4994 15.5005C10.3004 15.5005 10.1095 15.4214 9.96882 15.2807C9.8281 15.14 9.74904 14.9491 9.74904 14.7501C9.74904 14.5511 9.8281 14.3602 9.96882 14.2195L15.4388 8.75045H0.749958C0.551057 8.75045 0.360302 8.67143 0.219658 8.53079C0.0790134 8.39014 0 8.19939 0 8.00049C0 7.80159 0.0790134 7.61083 0.219658 7.47019C0.360302 7.32954 0.551057 7.25053 0.749958 7.25053H15.4388L9.96882 1.78146C9.8281 1.64074 9.74904 1.44988 9.74904 1.25086C9.74904 1.05185 9.8281 0.860991 9.96882 0.720268C10.1095 0.579545 10.3004 0.500488 10.4994 0.500488C10.6984 0.500488 10.8893 0.579545 11.03 0.720268L17.7796 7.46989C17.8494 7.53954 17.9047 7.62225 17.9424 7.7133C17.9802 7.80434 17.9996 7.90193 17.9996 8.00049C17.9996 8.09904 17.9802 8.19663 17.9424 8.28768C17.9047 8.37872 17.8494 8.46143 17.7796 8.53108Z"
                            fill="#008BCD"
                          />
                          <path
                            d="M17.7796 8.53108L11.03 15.2807C10.8893 15.4214 10.6984 15.5005 10.4994 15.5005C10.3004 15.5005 10.1095 15.4214 9.96882 15.2807C9.8281 15.14 9.74904 14.9491 9.74904 14.7501C9.74904 14.5511 9.8281 14.3602 9.96882 14.2195L15.4388 8.75045H0.749958C0.551057 8.75045 0.360302 8.67143 0.219658 8.53079C0.0790134 8.39014 0 8.19939 0 8.00049C0 7.80159 0.0790134 7.61083 0.219658 7.47019C0.360302 7.32954 0.551057 7.25053 0.749958 7.25053H15.4388L9.96882 1.78146C9.8281 1.64074 9.74904 1.44988 9.74904 1.25086C9.74904 1.05185 9.8281 0.860991 9.96882 0.720268C10.1095 0.579545 10.3004 0.500488 10.4994 0.500488C10.6984 0.500488 10.8893 0.579545 11.03 0.720268L17.7796 7.46989C17.8494 7.53954 17.9047 7.62225 17.9424 7.7133C17.9802 7.80434 17.9996 7.90193 17.9996 8.00049C17.9996 8.09904 17.9802 8.19663 17.9424 8.28768C17.9047 8.37872 17.8494 8.46143 17.7796 8.53108Z"
                            fill="#008BCD"
                          />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     <div
        className="lonyo-content-shape3"
        style={{
          height: "25px",
          backgroundImage: "url('/assets/images/shape/shape2.svg')", // Corrected URL syntax
          backgroundSize: "cover", // Ensure the image covers the area
          backgroundPosition: "center", // Center the background image
          backgroundRepeat: "no-repeat", // Prevent image repetition
        }}
      ></div>
    </>
  );
};

export default SpendingSmarterAreaHomeThree;