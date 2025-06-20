import Link from "next/link";
import React from "react";

const CtaAreaHomeOne = ({ style_2 }: any) => {
  return (
    <>
      {style_2 && (
        <>
        </>
      )}
      <section className="lonyo-section-padding4  section">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-6">
              <div className="lonyo-cta-thumb" data-aos="fade-up" data-aos-duration="500">
                <img src="/assets/images/v1/cta-thumb.png" alt="" />
              </div>
            </div> */}
            <div className="col-lg-12">
              <div
                className="lonyo-default-content feature-wrap d-grid
                "
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <h2 className="text-center">
                  Convingeți-vă de performanțele soluțiilor Multitech
                </h2>
                <p className="mb-4 text-center">
                  Solicitați acum un demo gratuit sunând la 0-7722-MULTI
                </p>
                <Link href="/contact" className="lonyo-default-btn hero-btn m-auto">
                  Informații de contact
                </Link>
                {/* <div className="lonyo-cta-info mt-50" data-aos="fade-up" data-aos-duration="900">
                  <ul>
                    <li>
                      <a target="_blank" href="https://www.apple.com/app-store/">
                        <img src="/assets/images/v1/app-store.svg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://playstore.com/">
                        <img src="/assets/images/v1/play-store.svg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaAreaHomeOne;
