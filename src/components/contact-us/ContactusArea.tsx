"use client";
import React from "react";
import contact_data from "@/data/contact-data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Building,
  Building2,
  Calculator,
  Clock,
  Contact2,
  FileText,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";
import { useNotification } from "@/context/NotificationContext";

const ContactusArea = () => {
  const { showNotification } = useNotification();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",

    acceptedPrivacyPolicy: false, 
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked; 

    if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!form.name.trim()) errors.name = "Név megadása kötelező";
    if (!form.email.trim()) errors.email = "Email megadása kötelező";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      errors.email = "Érvénytelen email formátum";
    if (!form.phone.trim()) errors.phone = "Telefonszám megadása kötelező";
    if (!form.acceptedPrivacyPolicy)
      errors.acceptedPrivacyPolicy =
        "Az adatvédelmi nyilatkozat elfogadása kötelező";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      showNotification("Kérjük töltse ki a kötelező mezőket!");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form submitted:", form);
      showNotification("Ajánlatkérés sikeresen elküldve!");
      setIsSubmitting(false);
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",

        acceptedPrivacyPolicy: false,
      });
    }, 2000);
  };

  return (
    <>
      <div className="multitech-section-padding">
        <div className="container">
          <div
            className="multitech-section-title text-center"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <h2 className="contact-title title">
              Număr unic de relații clienți:{" "}
              <span className="highlight">0-7722-MULTI</span>
            </h2>
            <Link href="tel:0772268584">
            <h5 className="mb-0">0-7722-68584, disponibil și pe WhatsApp!</h5>
            </Link>
            
          </div>
          <div className="row d-flex justify-content-center">
            {contact_data.map((item, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-6 col-md-6 d-flex mb-4 mb-lg-0"
              >
                <div
                  className="summary-card h-100 d-flex flex-column w-100 "
                  data-aos="fade-up"
                  data-aos-duration={item.delay}
                  style={{ borderTop: "5px solid " + item.color }}
                >
                  <div className="feature-icon d-flex justify-content-center mb-3">
                    <Image
                      src={item.icon}
                      height={80}
                      width={80}
                      alt={item.title}
                      className="img-fluid"
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "80px",
                      }}
                    />
                  </div>
                  <h3 className="summary-title text-center">{item.title}</h3>
                  <div className="summary-items text-center flex-grow-1 pb-0 border-0 mb-0">
                    <p className="card-description">{item.description}</p>
                  </div>
                  <Link
                    href={`mailto:${item.link}`}
                    className="text-center mt-2"
                  >
                    {item.link}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="multitech-section-padding2">
        <div className="container">
          <div className="row mt-3" data-aos="fade-up" data-aos-duration="900">
            <div className="col-lg-6">
              <div className="multitech-default-content">
                <h2>Informații de contact</h2>
                <p className="max-w616">
                  Contactați-ne pentru orice întrebare sau informații
                  suplimentare despre produsele și serviciile noastre.
                </p>
                <div className="mt-50">
                  <div className="multitech-contact-us-info-item">
                    <div className="multitech-contact-us-icon">
                      <Link
                        href="https://maps.google.com/?q=Bd.+Brașovului+145,+505600+Săcele,+Brașov,+România"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin
                          size={24}
                          className="text-primary"
                          color="#008BCD"
                        />
                      </Link>
                    </div>
                    <div className="multitech-contact-us-content">
                      <Link
                        href="https://maps.google.com/?q=Bd.+Brașovului+145,+505600+Săcele,+Brașov,+România"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h4>Adresa sediu social</h4>
                        <p>
                          Bd. Brașovului 145, 505600 Săcele / Brașov, România
                          <br />
                          <span className="text-primary">
                            Apăsați aici pentru Google Maps
                          </span>
                        </p>
                      </Link>
                    </div>
                  </div>

                  <div className="multitech-contact-us-info-item">
                    <div className="multitech-contact-us-icon">
                      <Link href="tel:0772268584">
                        <Phone size={24} className="text-primary" />
                      </Link>
                    </div>
                    <div className="multitech-contact-us-content">
                      <Link href="tel:0772268584">
                        <h4>Telefon</h4>
                        <p>Vânzări & Service: 0-7722-MULTI (0-7722-68584)</p>
                      </Link>
                    </div>
                  </div>

                  <div className="multitech-contact-us-info-item">
                    <div className="multitech-contact-us-icon">
                      <Clock size={24} className="text-primary" />
                    </div>
                    <div className="multitech-contact-us-content">
                      <h4>Program de lucru</h4>
                      <p>
                        Luni-Vineri: 9:00 – 17:00
                        <br />
                        Sâmbătă-Duminică: Închis
                      </p>
                    </div>
                  </div>

                  <div className="multitech-contact-us-info-item pb-0">
                    <div className="multitech-contact-us-icon">
                      <Building2 size={24} className="text-primary" />
                    </div>
                    <div className="multitech-contact-us-content">
                      <h4>Date companie</h4>
                      <p>
                        Denumire: Multitech Industrial SRL
                        <br />
                        CUI: RO14445831
                      </p>
                      {/* <small className="text-muted mt-2 d-block">
                        Multitech şi logo-ul Multitech sunt mărci înregistrate.
                      </small> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="quote-form-card"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <div className="form-header">
                  <div className="form-icon">
                    <Contact2 size={24} />
                  </div>
                  <div>
                    <h3 className="form-title">Formular de contact</h3>
                    <p className="form-subtitle">Formular de contact</p>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="quote-form">
                  <div className="form-group">
                    <label className="form-label">
                      <MessageSquare size={16} />
                      Mesaj
                    </label>
                    <textarea
                      name="message"
                      className="form-textarea"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Pentru mai multe informații, cereri speciale..."
                      rows={3}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      <User size={16} />
                      Nume *
                    </label>
                    <input
                      type="text"
                      name="name"
                      className={`form-input ${formErrors.name ? "error" : ""}`}
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Kovács János"
                    />
                    {formErrors.name && (
                      <span className="error-text">{formErrors.name}</span>
                    )}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        <Mail size={16} />
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        className={`form-input ${
                          formErrors.email ? "error" : ""
                        }`}
                        value={form.email}
                        onChange={handleChange}
                        placeholder="kovacs@email.hu"
                      />
                      {formErrors.email && (
                        <span className="error-text">{formErrors.email}</span>
                      )}
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        <Phone size={16} />
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className={`form-input ${
                          formErrors.phone ? "error" : ""
                        }`}
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+36 30 123 4567"
                      />
                      {formErrors.phone && (
                        <span className="error-text">{formErrors.phone}</span>
                      )}
                    </div>
                  </div>

                  {/* GDPR CHECKBOX */}
                  <div className="form-group">
                    <div className="d-flex items-start gap-2">
                      <input
                        type="checkbox"
                        name="acceptedPrivacyPolicy"
                        id="privacyPolicy"
                        checked={form.acceptedPrivacyPolicy}
                        onChange={handleChange}
                        className="mt-1"
                      />
                      <label
                        htmlFor="privacyPolicy"
                        className="text-muted mt-2 d-block"
                        style={{ fontSize: ".875em" }}
                      >
                        Accept {" "}
                        <Link
                          href="/data-privacy-policy"
                          target="_blank"
                          className="text-primary underline"
                        >
                          politica de confidențialitate
                        </Link>
                        {" "}
                        și sunt de acord ca Multitech Industrial SRL să poată
                        prelucra datele mele personale furnizate în conformitate
                        cu termenii politicii.
                      </label>
                     
                    </div>
                    {formErrors.acceptedPrivacyPolicy && (
                      <span className="error-text block mt-1">
                        {formErrors.acceptedPrivacyPolicy}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className={`submit-btn ${isSubmitting ? "loading" : ""}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner"></div>
                        Trimite...
                      </>
                    ) : (
                      <>
                        Trimite
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="responsive-map">
        <iframe
          className="multitech-contact-us-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2790.761512566027!2d25.675844676282274!3d45.615436371076854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35d6c3e2fdb95%3A0x7d4f9ff5aba5c0d3!2sBulevardul%20Bra%C8%99ovului%20145%2C%20S%C4%83cele%20505600!5e0!3m2!1shu!2sro!4v1750433239903!5m2!1shu!2sro"
          width="600"
          height="450"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default ContactusArea;
