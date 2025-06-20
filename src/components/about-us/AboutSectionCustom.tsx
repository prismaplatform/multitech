import React from 'react';

interface AboutCustomProps {
  title: string;
  image: string;
  desc: string;
  imageLeft?: boolean;
}

const AboutCustom = ({ title, image, desc, imageLeft = true }: AboutCustomProps) => {
  return (
    <>
      <div className="multitech-section-padding2">
        <div className="container">
          <div className="row">
            {imageLeft ? (
              <>
                <div className="col-lg-5">
                  <div className="multitech-about-us-thumb2 pr-51" data-aos="fade-up" data-aos-duration="700">
                    <img src={`/assets/images/about-us/${image}`} alt="" style={{borderRadius:"10px"}}/>
                  </div>
                </div>
                <div className="col-lg-7 d-flex align-items-center">
                  <div className="multitech-default-content pl-32" data-aos="fade-up" data-aos-duration="900">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="col-lg-7 d-flex align-items-center">
                  <div className="multitech-default-content pr-32" data-aos="fade-up" data-aos-duration="900">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="multitech-about-us-thumb2 pl-51" data-aos="fade-up" data-aos-duration="700">
                    <img src={`/assets/images/about-us/${image}`} alt="" style={{borderRadius:"10px"}}/>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCustom;