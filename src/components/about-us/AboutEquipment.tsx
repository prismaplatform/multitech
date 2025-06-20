import Image from "next/image";
import React from "react";
import aboutBanner from "../../../public/assets/images/hero/multitech_15years.png";
const AboutEquipment = () => {
  return (
    <>
      <div
        className="lonyo-section-padding2"
        style={{
          backgroundImage: "url('/assets/images/hero/bacground.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="lonyo-default-content text-center">
            <h2>Mii de echipamente instalate</h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="lonyo-default-content"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <p>
                  Vă oferim{" "}
                  <strong>
                    echipamente, consumabile și soluții specifice{" "}
                  </strong>
                  industriei dumneavoastră de la cei mai importanți producători
                  la nivel mondial din domeniile de marcare, etichetare și
                  automatizare. Asigurăm întotdeauna soluții personalizate, iar
                  dorința noastră este să vă optimizăm costurile și să găsim
                  împreună cele mai bune rezolvări la provocările apărute.
                  Suntem mândri de poziția în care ne aflăm și, de asemenea,
                  suntem mândri de echipa noastră, care contribuie în fiecare zi
                  la menținerea succesului nostru. Puneți-ne la încercare!
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="lonyo-default-content"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                <p>
                  Astăzi probabil ați cumpărat sau ați folosit un produs
                  inscripționat sau manipulat de un echipament furnizat de
                  Multitech. Tehnologiile noastre sunt prezente în viața
                  dumneavoastră de zi cu zi și asigură{" "}
                  <strong>
                    {" "}
                    siguranța produselor și eficiența liniei de producție
                  </strong>
                  , indiferent că vorbim de alimente, băuturi, produse
                  farmaceutice, materiale de construcții sau componente
                  industriale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutEquipment;
