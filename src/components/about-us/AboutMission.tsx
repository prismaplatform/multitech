import Image from "next/image";
import React from "react";
import aboutBanner from "../../../public/assets/images/hero/multitech_15years.png";
const AboutMission = () => {
  return (
    <>
<div 
  className="" 
  style={{
    backgroundImage: "url('/assets/images/hero/bacground.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div
                className="lonyo-about-us-thumb2 pr-51 h-100"
                data-aos="fade-up"
                data-aos-duration="700"
                style={{
                  position: "relative",
                  minHeight: "400px", // vagy bármilyen fix magasság
                }}
              >
                <Image
                  src={aboutBanner}
                  fill
                  alt="De ce să alegeți Multitech"
                  style={{
                    objectFit: "contain", // vagy 'contain'
                  }}
                />
              </div>
            </div>
            <div className="col-lg-7 d-flex align-items-center">
              <div
                className="lonyo-default-content pl-32"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                <h2>De ce să alegeți Multitech?</h2>
                <p>
                  Pentru că avem{" "}
                  <strong>o experiență remarcabilă de peste 15 ani </strong>și
                  un portofoliu de sute de proiecte de succes într-o varietate
                  completă de industrii, de la fabricarea de mașini până la
                  sectorul alimentar.
                </p>
                <p>
                  Astăzi probabil ați cumpărat sau ați folosit un produs
                  inscripționat sau manipulat de un echipament furnizat de
                  Multitech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMission;
