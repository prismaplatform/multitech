"use client";
import {
  FacebookIcon,
  InstagramIcon,
  Linkedin,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";

const FooterOne = ({ style_2 }: any) => {
  style_2 = 1;
  return (
    <>
      <div className="lonyo-content-shape3">
        <img src="/assets/images/shape/shape2.svg" alt="" />
      </div>
      <footer className="lonyo-footer-section">
        <div className="container">
          <div className="lonyo-footer-one">
            <div className="row">
              <div className="col-xxl-4 col-xl-12 col-md-6">
                <div
                  className={`lonyo-footer-textarea ${
                    style_2 ? "textarea2" : ""
                  }`}
                >
                  <div className="footer-logo">
                    <Link href="/">
                      <img
                        src="/assets/images/logo/logo_small_white.svg"
                        alt="Multitech"
                      />
                    </Link>
                  </div>
                  <p>
                    Soluții integrate de marcare, etichetare și automatizare pentru linii de producție: orice produs, orice industrie. Livrare din stoc și service în 24h.
                  </p>

                  <div className="lonyo-social-wrap2">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com">
                          <FacebookIcon size={30} className="text-white" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com">
                          <TwitterIcon size={30} className="text-white" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com">
                          <InstagramIcon size={30} className="text-white" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.bd.linkedin.com">
                          <Linkedin size={30} className="text-white" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.bd.linkedin.com">
                          <YoutubeIcon size={30} className="text-white" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-md-6">
                <div className={`lonyo-footer-menu ${style_2 ? "menu2" : ""}`}>
                <div className="footer-menu">
                  <h4>Produse</h4>
                  <ul>
                    <li><Link href="/videojet">Videojet – Marcare</Link></li>
                    <li><Link href="/foba">Foba – Marcare Laser</Link></li>
                    <li><Link href="/couth">Couth – Micropercuție</Link></li>
                    <li><Link href="/eidos">Eidos – Transfer Termic</Link></li>
                    <li><Link href="/etipack">Etipack – Etichetare</Link></li>
                    <li><Link href="/novexx">Novexx – Etichetare</Link></li>
                    <li><Link href="/bofa">Bofa – Filtrare Fum</Link></li>
                    <li><Link href="/ur">UR – Brațe Robotizate</Link></li>
                    <li><Link href="/mir">MiR – Roboți Mobili</Link></li>
                    <li><Link href="/consumabile">Consumabile</Link></li>
                  </ul>
                </div>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-4 col-md-6">
                <div
                  className="lonyo-footer-menu pl-30 menu2"
                   
                >
                  <h4>Aplicații</h4>
                  <ul>
                    <li><Link href="/automatizare">Automatizare</Link></li>
                    <li><Link href="/marcare-plastic">Marcare Plastic</Link></li>
                    <li><Link href="/marcare-metal">Marcare Metal</Link></li>
                    <li><Link href="/marcare-sticla">Marcare Sticlă</Link></li>
                    <li><Link href="/marcare-alte-materiale">Marcare Alte Materiale</Link></li>
                  </ul>
                  
                </div>
                 <div
                  className="lonyo-footer-menu pl-30 menu2"
                   
                >
                <h4 className="mt-4">Industrii</h4>
                  <ul>
                    <li><Link href="/alimente-bauturi">Alimente și Băuturi</Link></li>
                    <li><Link href="/industrii-prelucrătoare">Industrii Prelucrătoare</Link></li>
                    <li><Link href="/farma-larg-consum">Farma și Larg Consum</Link></li>
                    <li><Link href="/alte-industrii">Alte Industrii</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-md-6">
                <div
                  className={`lonyo-footer-menu pl-31 mb-0 ${
                    style_2 ? "menu2" : ""
                  }`}
                >
                  <h4>Newsletter</h4>
                  <div
                    className={`${
                      style_2
                        ? "lonyo-subscription-field3"
                        : "lonyo-subscription-field2"
                    }`}
                  >
                    <form onSubmit={(e) => e.preventDefault()}>
                      <input
                        type="email"
                        placeholder="Enter your e-mail"
                        className="w-100"
                      />
                      <button
                        className="lonyo-default-btn d-block button-black"
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`lonyo-footer-bottom-text ${style_2 ? "text2" : ""}`}>
            <p>
              © Copyright{" "}
              <span id="current-year">{new Date().getFullYear()}</span>, All
              Rights Reserved by Mthemeus
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
