import Link from "next/link";
import React from "react";

const IntegrationArea = () => {
  return (
    <>
      <div className="lonyo-section-padding2 section">
        <div className="integration-shape"></div>
        <div className="container">
          <div className="lonyo-section-title">
            <h2 className="max-w1000">Avantaje Multitech</h2>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="lonyo-integration-wrap" data-aos="fade-up" data-aos-duration="500">
                <div className="lonyo-integration-content">
                  <h4>Testare gratuită</h4>
                  <p>Testați înainte să cumpărați, astfel vă puteți asigura de fiabilitatea soluției oferite.</p>
                  {/* <Link className="title-btn" href="/single-integration">
                    Learn more
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
                  </Link> */}
                </div>
                <div className="lonyo-integration-icon">
                  <img src="/assets/images/about-us/ikon1.svg" width={80} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="lonyo-integration-wrap" data-aos="fade-up" data-aos-duration="700">
                <div className="lonyo-integration-content">
                  <h4>Garanție extinsă</h4>
                  <p>Pachetele noastre de garanție extinsă și service sunt adaptate nevoilor dvs.</p>
                  
                </div>
                <div className="lonyo-integration-icon">
                  <img src="/assets/images/about-us/ikon3.svg" width={80} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="lonyo-integration-wrap" data-aos="fade-up" data-aos-duration="900">
                <div className="lonyo-integration-content">
                  <h4>Livrare rapidă</h4>
                  <p>Majoritatea produselor oferite sunt disponibile pe stoc și se pot livra rapid la destinație.</p>
               
                </div>
                <div className="lonyo-integration-icon">
                  <img src="/assets/images/about-us/ikon4.svg" width={80} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="lonyo-integration-wrap" data-aos="fade-up" data-aos-duration="500">
                <div className="lonyo-integration-content">
                  <h4>Service în 24h</h4>
                  <p>Este suficient să ne sunați sau să ne trimiteți un e-mail şi noi suntem gata să intervenim.

</p>
                 
                </div>
                <div className="lonyo-integration-icon">
                  <img src="/assets/images/about-us/ikon5.svg" width={80} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="lonyo-integration-wrap" data-aos="fade-up" data-aos-duration="700">
                <div className="lonyo-integration-content">
                  <h4>Soluții de finanțare</h4>
                  <p>Vă oferim cele mai potrivite soluții de finantare când nu dispuneți de capital de investiții.</p>
                  
                </div>
                <div className="lonyo-integration-icon">
                  <img src="/assets/images/about-us/ikon6.svg" width={80} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="lonyo-integration-wrap" data-aos="fade-up" data-aos-duration="900">
                <div className="lonyo-integration-content">
                  <h4>Suport clienți</h4>
                  <p>Echipa noastră este pregatită să vă răspundă la întrebări și să vă ofere asistență.</p>
                  {/* <Link className="title-btn" href="/single-integration">
                    Learn more
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
                  </Link> */}
                </div>
                <div className="lonyo-integration-icon">
                  <img src="/assets/images/about-us/ikon7.svg" alt="" width={80} />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default IntegrationArea;
