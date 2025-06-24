"use client";
import {
  FacebookIcon,
  InstagramIcon,
  Linkedin,
  Send,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";

const FooterOne = ({ style_2 }: any) => {
  style_2 = 1;
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div
        className="multitech-content-shape3"
        style={{
          height: "25px",
          backgroundImage: "url('/assets/images/shape/shape2.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <footer className="multitech-footer-section">
        <div className="container">
          <div className="multitech-footer-one">
            <div className="row">
              <div className="col-xxl-4 col-xl-12 col-md-6">
                <div
                  className={`multitech-footer-textarea ${
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
                    Soluții integrate de marcare, etichetare și automatizare
                    pentru linii de producție: orice produs, orice industrie.
                    Livrare din stoc și service în 24h.
                  </p>

                  <div className="multitech-social-wrap2">
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
              <div className="col-xxl-2 col-xl-4 col-md-6">
                <div
                  className={`multitech-footer-menu ${style_2 ? "menu2" : ""}`}
                >
                  <div className="footer-menu">
                    <h4>Produse</h4>
                    <ul>
                      <li>
                        <Link href="/videojet">Videojet – Marcare</Link>
                      </li>
                      <li>
                        <Link href="/foba">Foba – Marcare Laser</Link>
                      </li>
                      <li>
                        <Link href="/couth">Couth – Micropercuție</Link>
                      </li>
                      <li>
                        <Link href="/eidos">Eidos – Transfer Termic</Link>
                      </li>
                      <li>
                        <Link href="/etipack">Etipack – Etichetare</Link>
                      </li>
                      <li>
                        <Link href="/novexx">Novexx – Etichetare</Link>
                      </li>
                      <li>
                        <Link href="/bofa">Bofa – Filtrare Fum</Link>
                      </li>
                      <li>
                        <Link href="/ur">UR – Brațe Robotizate</Link>
                      </li>
                      <li>
                        <Link href="/mir">MiR – Roboți Mobili</Link>
                      </li>
                      <li>
                        <Link href="/consumabile">Consumabile</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-md-6">
                <div className="multitech-footer-menu pl-30 menu2">
                  <h4>Aplicații</h4>
                  <ul>
                    <li>
                      <Link href="/automatizare">Automatizare</Link>
                    </li>
                    <li>
                      <Link href="/marcare-plastic">Marcare Plastic</Link>
                    </li>
                    <li>
                      <Link href="/marcare-metal">Marcare Metal</Link>
                    </li>
                    <li>
                      <Link href="/marcare-sticla">Marcare Sticlă</Link>
                    </li>
                    <li>
                      <Link href="/marcare-alte-materiale">
                        Marcare Alte Materiale
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="multitech-footer-menu pl-30 menu2">
                  <h4 className="mt-4">Industrii</h4>
                  <ul>
                    <li>
                      <Link href="/alimente-bauturi">Alimente și Băuturi</Link>
                    </li>
                    <li>
                      <Link href="/industrii-prelucrătoare">
                        Industrii Prelucrătoare
                      </Link>
                    </li>
                    <li>
                      <Link href="/farma-larg-consum">
                        Farma și Larg Consum
                      </Link>
                    </li>
                    <li>
                      <Link href="/alte-industrii">Alte Industrii</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-4 col-md-6">
                <div className="multitech-footer-menu pl-31 mb-0 menu2">
                  <h4>Newsletter</h4>
                  <div className="multitech-subscription-field2">
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="position-relative"
                    >
                      <input
                        type="email"
                        placeholder="Adresa de e-mail"
                        className="form-control w-100 ps-3 pe-5 py-3"
                        style={{
                          backgroundColor: "#f8f9fa",
                          color: "#333",
                          border: "1px solid #dee2e6",
                          borderRadius: "6px",
                          height: "50px",
                        }}
                      />
                      <button className="newsletter-submit-btn">
                        <Send size={20} />
                      </button>
                    </form>
                  </div>
                  {/* GDPR Checkbox for Newsletter */}
                  <div className="form-group mt-3">
                    {" "}
                    {/* Added margin-top for spacing */}
                    <div className="d-flex items-start gap-2">
                      <input
                        type="checkbox"
                        name="acceptedPrivacyPolicyNewsletter" // New name for this specific checkbox
                        id="privacyPolicyNewsletter"
                        // You'll need to manage the checked state for this checkbox in your parent component
                        // checked={form.acceptedPrivacyPolicyNewsletter}
                        // onChange={handleChange}
                        className="mt-1"
                      />
                      <label
                        htmlFor="privacyPolicyNewsletter"
                        className="text-white mt-0 d-block" // Changed to text-white for better visibility
                        style={{ fontSize: ".875em" }}
                      >
                        Accept{" "}
                        <strong>
                          <Link
                            href="/data-privacy-policy"
                            target="_blank"
                            className="text-primary underline text-white"
                          >
                            politica de confidențialitate
                          </Link>
                        </strong>
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <Link
                      href="https://anpc.ro/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/assets/images/anpc/anpc.svg"
                        alt="ANPC"
                        style={{ height: "50px" }}
                      />
                    </Link>
                    <Link
                      href="https://anpc.ro/sol-online/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/assets/images/anpc/soal.svg"
                        alt="SOL"
                        style={{ height: "50px" }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`multitech-footer-bottom-text ${style_2 ? "text2" : ""}`}
          >
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start order-2 order-md-1 mt-5 mt-md-0">
                <p className="mb-1">
                  Copyright © {currentYear}. All Rights Reserved |{" "}
                  <strong>Multitech</strong>
                </p>
                <p className="mb-0">
                  Designed & Developed |{" "}
                  <strong>
                    <Link
                      href="https://prismasolutions.ro"
                      className="text-white"
                    >
                      Prisma Solutions
                    </Link>
                  </strong>
                </p>
              </div>
              <div className="col-md-6 text-center text-md-end order-1 order-md-2 ">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item me-3">
                    <Link href="/terms-of-use" className="text-white">
                      Terms of Use
                    </Link>
                  </li>
                  <li className="list-inline-item me-3">
                    <Link href="/privacy-policy" className="text-white">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="list-inline-item me-3">
                    <Link href="/privacy-policy" className="text-white">
                      Cookie Policy
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="/dispute-resolution" className="text-white">
                      Dispute Resolution
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
