"use client";
import VideoPopup from '@/modals/VideoPopup';
import Link from 'next/link';
import React from 'react';

const VideoAreaHomeOne = ({style_2} : any) => {

  return (
    <>
      <div className={`multitech-section-padding bg-blue  ${style_2 ? '' : 'position-relative sectionn'}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 d-flex">
              <div className="multitech-video-thumb m-auto">
                <img src="/assets/images/about-us/map.png" alt="" />
              
              </div>
            </div>
            <div className="col-lg-7 d-flex align-items-center">
              <div className="multitech-default-content multitech-video-section pl-50" data-aos="fade-up" data-aos-duration="500">
                <h2>Acoperire naţională</h2>
                <p className='mb-4'>Cu sediul central la <strong>Braşov</strong> şi cu puncte de prezenţă în <strong>București + 7 orașe</strong> din România, prioritatea noastră este să vă stăm la dispoziție în cel mai scurt timp. </p>
                {/* <div className="mt-50" data-aos="fade-up" data-aos-duration="700">
                  <Link className="multitech-default-btn video-btn" href="/contact-us">Download the app</Link>
                </div> */}
                <div className="multitech-process-title">
                  <h4>Abordarea noastră holistică</h4>
                </div>
                <div className="multitech-process-data">
                  <p>Serviciile noastre încep cu prima sesiune de consiliere, continuă în timpul selecției configurației specifice a echipamentului, devin tangibile în timpul instalării și durează pe termen lung prin service sau întreținere. Toate serviciile Multitech formează un pachet complet care poate fi accesat oricând, oriunde, indiferent de industria în care activați.

</p><p>“Sfaturi bune, beneficii pe termen lung” este cheia noastră pentru succesul dvs. iar consultanța continuă este una dintre competențele noastre principale. Inginerii noștri cu experiență în vânzări și servicii vă stau întotdeauna la dispoziție pentru a vă răspunde la întrebări. Clienții noștri caută un partener de încredere și nu doar un echipament.</p>
                </div>
              </div>
            </div>
          </div>
       
        </div>
      </div>
<div
        className="multitech-content-shape1"
        style={{
          height: "140px",
          backgroundImage: "url('/assets/images/shape/shape1.svg')", // Corrected URL syntax
          backgroundSize: "cover", // Ensure the image covers the area
          backgroundPosition: "left", // Center the background image
          backgroundRepeat: "no-repeat", // Prevent image repetition
        }}
      ></div>

     
    </>
  );
};

export default VideoAreaHomeOne;