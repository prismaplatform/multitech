"use client";
import Link from "next/link";
import React from "react";

const BrandAreaHomeTwo = () => {
  const brands = [
    { img: "/assets/images/service/autovehicule.svg", title: "Autovehicule" },
    { img: "/assets/images/service/bauturi.svg", title: "Băuturi" },
    { img: "/assets/images/service/carne.svg", title: "Carne" },
    { img: "/assets/images/service/cosmetice.svg", title: "Cosmetice" },
    { img: "/assets/images/service/electronice.svg", title: "Electronice" },
    { img: "/assets/images/service/farmaceutice.svg", title: "Farmaceutice" },
    { img: "/assets/images/service/lactate.svg", title: "Lactate" },
    { img: "/assets/images/service/oua.svg", title: "Ouă" },
  ];

  return (
    <>
      <div className="multitech-section-padding4">
        <div className="container">
          <h4 className="text-center mb-5">
            Aveţi nevoie să marcați un cod pe ambalaj? Doriți să automatizați procesul de producție? Avem soluţii pentru îndeplinirea acestor cerinţe! Selectați mai jos domeniul de activitate:
          </h4>
        
          {/* Brands Grid - Now with 8 items in a row on large screens */}
          <div className="row justify-content-center align-items-stretch">
            {brands.map((brand, index) => (
              <div 
                key={index} 
                className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1_5  d-flex flex-column"
              >
                <div className="multitech-brand-grid-item flex-grow-1 d-flex align-items-center justify-content-center mb-3">
                  <img 
                    src={brand.img} 
                    alt={brand.title} 
                    className="img-fluid mx-auto"
                    style={{ maxHeight: '70px' }}
                  />
                </div>
                <div className="brand-title-container">
                  <h5 className="brand-title mb-0">{brand.title}</h5>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Services Button */}
          <div className="text-center mt-3">
           <Link href="/event" className="multitech-default-btn hero-btn mt-4">
                  Vedeți toate
                  </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandAreaHomeTwo;