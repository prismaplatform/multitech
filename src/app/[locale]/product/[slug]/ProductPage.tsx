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
  ArrowLeft
} from "lucide-react";

const ProductPage = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart } = useCart();
  const { showNotification } = useNotification(); // showCartDrawer hozzáadva!

  // Mock data
  const product = {
  id: "excavator-cx210d",
  name: "Videojet 9560",
  category: "Inkjet Caractere Mici (CIJ)",
  brand: "Videojet",
  model: "9560",
  description:
    "Cu noua imprimantă Videojet 1280, Videojet redefinește fiabilitatea și simplitatea în utilizare. De la interfața intuitivă până la caracteristicile de design inteligent, imprimanta Videojet 1280 cu jet continuu de cerneală (Continuous InkJet) poate fi utilizată cu ușurință de orice operator.",
  keyFeatures: [
    "Greutate operațională de 21 tone",
    "Motor conform standardului Tier 4 Final",
    "Sistem hidraulic avansat",
    "Capacitate de rotație de 360°",
    "Cabină cu control climatic",
    "Pregătit pentru urmărire GPS"
  ],
  specifications: {
    "Greutate operațională": "21.000 kg",
    "Putere motor": "159 kW (213 CP)",
    "Capacitate cupă": "1,0 m³",
    "Adâncime maximă de săpare": "6,5 m",
    "Rază maximă de acțiune": "10,1 m",
    "Viteză de deplasare": "5,5 km/h"
  },
  images: [
    "https://www.multitech.ro/wp-content/uploads/2024/07/cat_videojet_lpa.jpg",
    "https://www.multitech.ro/wp-content/uploads/2024/07/cat_videojet_lcm.jpg",
    "https://www.multitech.ro/wp-content/uploads/2014/01/cat_videojet_tto.jpg",
    "https://www.multitech.ro/wp-content/uploads/2014/01/cat_videojet_tij.jpg"
  ],
  documents: [
    { name: "Specificații tehnice", type: "PDF", size: "2.3 MB" },
    { name: "Manual de instalare", type: "PDF", size: "4.1 MB" },
    { name: "Ghid de întreținere", type: "PDF", size: "3.7 MB" },
    { name: "Instrucțiuni de siguranță", type: "PDF", size: "1.8 MB" }
  ],
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


  const relatedProducts = [
    { id: 1, name: "CX160D Kotrógép", image: "/api/placeholder/300/200", category: "Nehéz Gépek" },
    { id: 2, name: "CX300D Kotrógép", image: "/api/placeholder/300/200", category: "Nehéz Gépek" },
    { id: 3, name: "Hidraulikus Kalapács", image: "/api/placeholder/300/200", category: "Tartozékok" }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  // Javított addToCart funkció
  const handleAddToCart = () => {
    addToCart(product);
    showNotification(`${product.name} hozzáadva a kosárhoz!`);
    
    // Cart drawer megnyitása kis késleltetéssel
    // setTimeout(() => {
    //   showCartDrawer();
    // }, 500);
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
                <button className="nav-btn prev d-flex align-items-center justify-content-center" onClick={prevImage}>
                  <ChevronLeft size={24} />
                </button>
                <button className="nav-btn next d-flex align-items-center justify-content-center" onClick={nextImage}>
                  <ChevronRight size={24} />
                </button>
              </div>
              <div className="d-flex gap-3 justify-content-center">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    className={`image-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                    />
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

              <h1 className="product-title fs-1 mb-3">
                {product.name}
              </h1>

              <div className="d-flex flex-column flex-md-row gap-3 gap-md-4 mb-4 text-muted">
                <div>
                  <strong>Marca:</strong> {product.brand}
                </div>
                <div>
                  <strong>Model:</strong> {product.model}
                </div>
              </div>

              <p className="fs-5 lh-base text-secondary mb-4">
                {product.description}
              </p>

              {/* Action Buttons */}
              <div className="d-flex flex-column flex-md-row gap-3 mb-4">
                <button 
                  className="btn btn-primary-custom py-3 h-100 px-4 d-flex align-items-center justify-content-center gap-2 flex-fill"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart size={18} />
                  Adaugă în coș
                </button>
                <button
                  className={`btn-icon d-flex align-items-center justify-content-center ${isFavorite ? 'active' : ''}`}
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
                </button>
                <button className="btn-icon secondary d-flex align-items-center justify-content-center">
                  <Share2 size={18} />
                </button>
              </div>

              {/* Service Badges */}
              <div className="d-flex flex-wrap gap-3 mb-4">
                {[
                  { icon: Truck, text: 'Livrare gratuită' },
                  { icon: Shield, text: '2 ani garanție' },
                  { icon: Wrench, text: 'Serviciul de instalare' }
                ].map((service, index) => (
                  <div key={index} className="service-badge px-3 py-2 d-flex align-items-center gap-2">
                    <service.icon size={16} />
                    <span className="fs-7">{service.text}</span>
                  </div>
                ))}
              </div>

              {/* Key Features */}
              {/* <h4 className="mb-3">Főbb jellemzők</h4> */}
              {/* <div className="row g-2">
                {product.keyFeatures.map((feature, index) => (
                  <div key={index} className="col-12 col-xl-6">
                    <div className="feature-item p-3 d-flex align-items-center gap-2">
                      <Award size={16} className="feature-icon" />
                      <span className="fs-7">{feature}</span>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>

          {/* Tabs Section */}
          <div className="tabs-container mb-5">
            <div className="tabs-nav d-flex">
              {[
                { id: 'description', label: 'Descriere', icon: FileText },
                { id: 'specifications', label: 'Specificații', icon: Award },
                { id: 'documents', label: 'Documente', icon: Download },
                { id: 'locations', label: 'Locuri de utilizare', icon: MapPin },
                { id: 'reviews', label: 'Recenzii', icon: Star }
              ].map(tab => (
                <button
                  key={tab.id}
                  className={`tab-btn px-3 py-3 px-lg-4 py-lg-4 d-flex align-items-center gap-2 ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <tab.icon size={16} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="p-3 p-lg-4">
              {activeTab === 'description' && (
                <div>
                  <h4 className="mb-3">Descriere</h4>
                  <p className="fs-5 lh-base mb-3">
                   Cu noua imprimantă Videojet 1280, Videojet redefinește fiabilitatea și simplitatea în utilizare. De la interfața intuitivă și până la caracteristicile de design inteligent, imprimanta Videojet 1280 cu jet continuu de cerneală (Continuous InkJet) se poate utiliza cu ușurință de către orice operator.</p>
                  <p className="fs-5 lh-base mb-3">
                   Imprimanta dispune de interfața SIMPLICiTY™, o interfață intuitivă cu ecran tactil de 8” inspirată de la tablete, care reduce considerabil interacțiunile operatorului cu imprimanta pentru a ajuta la eliminarea erorilor potențiale.
                  </p>
                  <p className="lh-base">
                   Sistemul fără mizerie, fără risipă, fără greșeli Videojet Smart Cartridge™, se asigură de eliminarea fluidelor din cartușe și oferă o protecție suplimentară împotriva scurgerilor în timpul transportului și a manipulării. În combinație cu Videojet SmartCell™, nu există scurgeri de deșeuri periculoase de care să vă faceți griji, contribuind la simplificarea întreținerii de rutină.
                  </p>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div>
                  <h4 className="mb-3">Specificații</h4>
                  <div className="row g-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="col-12 col-lg-6">
                        <div className="spec-item p-3 d-flex justify-content-between">
                          <span className="spec-label">{key}</span>
                          <span className="spec-value">{value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'documents' && (
                <div>
                  <h4 className="mb-3">Documente</h4>
                  <div className="row g-3">
                    {product.documents.map((doc, index) => (
                      <div key={index} className="col-12 col-md-6 col-xl-4">
                        <div className="document-card p-3">
                          <div className="d-flex align-items-center gap-3 mb-3">
                            <div className="document-icon p-3">
                              <FileText size={20} />
                            </div>
                            <div>
                              <h6 className="mb-1">{doc.name}</h6>
                              <small className="text-muted">{doc.type} • {doc.size}</small>
                            </div>
                          </div>
                          <button className="btn btn-primary-custom w-100 py-2 d-flex align-items-center justify-content-center gap-2">
                            <Download size={16} />
                            <span>Letöltés</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'locations' && (
                <div>
                  <h4 className="mb-3">Locuri de utilizare</h4>
                  {product.usageLocations.map((location, index) => (
                    <div key={index} className="location-card p-3 mb-3">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h6 className="mb-0">{location.location}</h6>
                        <span className="date-badge px-3 py-1 fs-7">
                          {location.date}
                        </span>
                      </div>
                      <p className="mb-0 text-muted">Project: {location.project}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h4 className="mb-3">Recenzii</h4>
                  {product.reviews.map((review, index) => (
                    <div key={index} className="review-card p-3 mb-3">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div>
                          <h6 className="mb-1">{review.author}</h6>
                          <div className="text-muted fs-7">{review.company}</div>
                        </div>
                        <div className="d-flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={`rating-star ${i >= review.rating ? 'empty' : ''}`}
                              fill={i < review.rating ? 'currentColor' : 'none'}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="mb-2 lh-base">{review.text}</p>
                      <small className="text-muted">{review.date}</small>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {/* <div className="bg-white rounded-4 shadow-sm p-4">
            <h4 className="mb-1">Kapcsolódó termékek</h4>
            <p className="text-muted mb-4">Ezek a termékek is érdekelhetik</p>
            <div className="row g-4">
              {relatedProducts.map(relatedProduct => (
                <div key={relatedProduct.id} className="col-12 col-md-6 col-lg-4">
                  <a href="#" className="related-card d-block">
                    <div className="related-image">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                      />
                    </div>
                    <div className="p-3">
                      <h6 className="mb-1">{relatedProduct.name}</h6>
                      <small className="text-muted">{relatedProduct.category}</small>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ProductPage;