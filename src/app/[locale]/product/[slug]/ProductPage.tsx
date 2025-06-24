"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useNotification } from "@/context/NotificationContext";

import {
  Download,
  FileText,
  MapPin,
  Star,
  Camera,
  ShoppingCart,
  Share2,
  Heart,
  ChevronLeft,
  ChevronRight,
  Award,
  Truck,
  Shield,
  Wrench,
  ArrowLeft,
  HardHat, // New icon for applications/industries
} from "lucide-react";

const ProductPage = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart } = useCart();
  const { showNotification } = useNotification();

  // Mock data - UPDATED
  const product = {
    id: "excavator-cx210d",
    name: "Videojet 9560",
    category: "Inkjet Caractere Mici (CIJ)",
    brand: "Videojet",
    model: "9560",
    description: `
      <p class="fs-5 lh-base mb-3">Cu noua imprimantă Videojet 1280, Videojet redefinește fiabilitatea și simplitatea în utilizare. De la interfața intuitivă și până la caracteristicile de design inteligent, imprimanta Videojet 1280 cu jet continuu de cerneală (Continuous InkJet) se poate utiliza cu ușurință de către orice operator.</p>
      <p class="fs-5 lh-base mb-3">Imprimanta dispune de interfața SIMPLICiTY™, o interfață intuitivă cu ecran tactil de 8” inspirată de la tablete, care reduce considerabil interacțiunile operatorului cu imprimanta pentru a ajuta la eliminarea erorilor potențiale.</p>
      <h5 class="mt-4 mb-3">Beneficii cheie:</h5>
      <ul>
        <li>Reducerea erorilor operatorului prin interfața SIMPLICiTY™</li>
        <li>Durată lungă de funcționare și fiabilitate sporită</li>
        <li>Consum redus de cerneală și aditivi</li>
        <li>Design compact și ușor de integrat în linii de producție existente</li>
      </ul>
    `,
    applications: [
      "Alimentație și Băuturi (ex: dată expirare pe ambalaje)",
      "Farmaceutice și Medicale (ex: coduri de bare 2D pe medicamente)",
      "Cosmetice și Îngrijire Personală (ex: numere de lot pe produse)",
      "Cabluri și Fire (ex: marcarea continuă a cablurilor)",
      "Industria Electronică (ex: marcarea componentelor)",
      "Materiale de Construcții (ex: imprimare pe țevi, profile)",
    ],
    specifications: {
      "Tehnologie de printare": "Continuous Inkjet (CIJ)",
      "Viteza maximă de printare": "Până la 293 m/min",
      "Număr de linii de printare": "1 până la 5 linii",
      "Înălțimea caracterelor": "1.8 mm - 10 mm",
      "Material carcasă": "Oțel inoxidabil",
      "Protecție IP": "IP55 (opțional IP65)",
      "Ecran": "Tactil color de 8 inch",
      "Temperatură operare": "5°C - 45°C",
      "Umiditate": "10% - 90% fără condensare",
    },
    images: [
      "https://www.multitech.ro/wp-content/uploads/2024/07/cat_videojet_lpa.jpg",
      "https://www.multitech.ro/wp-content/uploads/2024/07/cat_videojet_lcm.jpg",
      "https://www.multitech.ro/wp-content/uploads/2014/01/cat_videojet_tto.jpg",
      "https://www.multitech.ro/wp-content/uploads/2014/01/cat_videojet_tij.jpg",
    ],
    documents: [
      {
        name: "BSpecificații Tehnice Videojet 1280 / EN",
        type: "PDF",
        size: "2.3 MB",
        url: "/assets/pdf/ss-1280-us.pdf",
        thumbnail:
          "/assets/pdf/ss-1280-us.png",
      },
      {
        name: "Specificații Tehnice Videojet 1280 / EN",
        type: "PDF",
        size: "4.1 MB",
        url: "/assets/pdf/br-1280-us.pdf",
        thumbnail:
          "/assets/pdf/br-1280-us.png",
      }
    ],
    // usageLocations and reviews can be kept or removed based on final decision, but not part of new tabs
    usageLocations: [
      { location: "Șantier Budapesta", project: "Extinderea liniei de metrou", date: "2024" },
      { location: "Parcul Industrial Debrecen", project: "Complex depozitare", date: "2023" },
      { location: "Infrastructura Szeged", project: "Construcție pod", date: "2024" }
    ],
    reviews: [
      {
        author: "János Kovács",
        company: "BuildCorp Kft.",
        rating: 5,
        text: "Performanță și fiabilitate excepționale. Eficiența consumului de combustibil este excelentă comparativ cu echipamentele noastre anterioare.",
        date: "2024-02-15"
      },
      {
        author: "Péter Nagy",
        company: "Építés Mesterek",
        rating: 5,
        text: "Perfect pentru proiectele noastre dificile. Sistemul hidraulic este incredibil de lin și receptiv.",
        date: "2024-01-28"
      }
    ]
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  const handleAddToCart = () => {
    addToCart(product);
    showNotification(`${product.name} a fost adăugat în cerere!`);
  };

  return (
    <>
      <div className="product-page">
        <div className="container py-4">
          <div className="row g-4 g-lg-5 mb-5">
            <div className="col-lg-6">
              <div className="main-image-container mb-3">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                />
                <button
                  className="nav-btn prev d-flex align-items-center justify-content-center"
                  onClick={prevImage}
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  className="nav-btn next d-flex align-items-center justify-content-center"
                  onClick={nextImage}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              <div className="d-flex gap-3 justify-content-center">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    className={`image-thumbnail ${
                      index === currentImageIndex ? "active" : ""
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img src={img} alt={`${product.name} ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info Section */}
            <div className="col-lg-6">
              <div className="mb-3">
                <span className="category-badge px-3 py-1 fs-7 d-inline-block mb-3">
                  {product.category}
                </span>
              </div>

              <h1 className="product-title fs-1 mb-3">{product.name}</h1>

              <div className="d-flex flex-column flex-md-row gap-3 gap-md-4 mb-4 text-muted">
                <div>
                  <strong>Marca:</strong> {product.brand}
                </div>
                <div>
                  <strong>Model:</strong> {product.model}
                </div>
              </div>

              <p className="fs-5 lh-base text-secondary mb-4">
                {/* Displaying a short description here, full description in tab */}
                {product.description.split("</p>")[0].replace(/<[^>]*>/g, '')}...
              </p>

              {/* Action Buttons */}
              <div className="d-flex flex-column flex-md-row gap-3 mb-4">
                <button
                  className="btn btn-primary-custom py-3 h-100 px-4 d-flex align-items-center justify-content-center gap-2 flex-fill"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart size={18} />
                  Adaugă în cerere
                </button>
                <button
                  className={`btn-icon d-flex align-items-center justify-content-center ${
                    isFavorite ? "active" : ""
                  }`}
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
                </button>
                <button className="btn-icon secondary d-flex align-items-center justify-content-center">
                  <Share2 size={18} />
                </button>
              </div>

              {/* Service Badges */}
              <div className="d-flex flex-wrap gap-3 mb-4">
                {[
                  { icon: Truck, text: "Livrare gratuită" },
                  { icon: Shield, text: "2 ani garanție" },
                  { icon: Wrench, text: "Serviciul de instalare" },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="service-badge px-3 py-2 d-flex align-items-center gap-2"
                  >
                    <service.icon size={16} />
                    <span className="fs-7">{service.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="tabs-container mb-5">
            <div className="tabs-nav d-flex">
              {[
                { id: "description", label: "Descriere", icon: FileText },
                {
                  id: "applications",
                  label: "Aplicații / Industrii",
                  icon: HardHat,
                }, // Changed
                { id: "specifications", label: "Specificații", icon: Award },
                { id: "documents", label: "Documente", icon: Download },
                // Removed 'Locuri de utilizare' and 'Recenzii'
              ].map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-btn px-3 py-3 px-lg-4 py-lg-4 d-flex align-items-center gap-2 ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <tab.icon size={16} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="p-3 p-lg-4">
              {activeTab === "description" && (
                <div>
                  <h4 className="mb-3">Descriere</h4>
                  <div
                    className="fs-5 lh-base"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </div>
              )}

              {activeTab === "applications" && (
                <div>
                  <h4 className="mb-3">Aplicații / Industrii</h4>
                  <ul className="list-group list-group-flush">
                    {product.applications.map((app, index) => (
                      <li key={index} className="list-group-item fs-5 py-2">
                        <HardHat size={16} className="me-2 text-primary" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "specifications" && (
                <div>
                  <h4 className="mb-3">Specificații</h4>
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped spec-table">
                      <thead>
                        <tr>
                          <th scope="col">Caracteristică</th>
                          <th scope="col">Valoare</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(product.specifications).map(
                          ([key, value]) => (
                            <tr key={key}>
                              <td>{key}</td>
                              <td>{value}</td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === "documents" && (
                <div>
                  <h4 className="mb-3">Documente</h4>
                  <div className="row g-3">
                    {product.documents.map((doc, index) => (
                      <div key={index} className="col-12 col-md-6 col-xl-4">
                        <div className="document-card p-3">
                          <div className="document-thumbnail mb-3">
                            {doc.thumbnail ? (
                              <Image
                                src={doc.thumbnail}
                                alt={`Previzualizare ${doc.name}`}
                                width={150}
                                height={200}
                                layout="responsive"
                                objectFit="contain"
                              />
                            ) : (
                              <div className="placeholder-thumbnail d-flex align-items-center justify-content-center">
                                <FileText size={48} className="text-muted" />
                              </div>
                            )}
                          </div>
                          <div className="d-flex align-items-center gap-3 mb-3">
                            <div className="document-icon p-3">
                              <FileText size={20} />
                            </div>
                            <div>
                              <h6 className="mb-1">{doc.name}</h6>
                              <small className="text-muted">
                                {doc.type} • {doc.size}
                              </small>
                            </div>
                          </div>
                          <a
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary-custom w-100 py-2 d-flex align-items-center justify-content-center gap-2"
                          >
                            <Download size={16} />
                            <span>Descarcă</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;