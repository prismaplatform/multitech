"use client";

import { useCart } from "@/context/CartContext";
import { useNotification } from "@/context/NotificationContext";
import { useState } from "react";
import {
  Trash2,
  Plus,
  Minus,
  Heart,
  Download,
  Share2,
  Clock,
  Truck,
  Shield,
  FileText,
  User,
  Building,
  Mail,
  Phone,
  MessageSquare,
  Calculator,
  Star,
  ArrowRight,
  ShoppingCart,
  Package,
} from "lucide-react";
import Link from "next/link";

const ModernCartPage = () => {
  const { cartItems, removeFromCart, addToCart, decrementQuantity, clearCart } =
    useCart();
  const { showNotification } = useNotification();

  const [savedItems, setSavedItems] = useState<string[]>([]);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    preferredContact: "email",
    urgency: "normal",
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!form.name.trim()) errors.name = "Este obligatoriu să introduceți numele";
    if (!form.email.trim()) errors.email = "Este obligatoriu să introduceți email-ul";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      errors.email = "Format de email invalid";
    if (!form.phone.trim()) errors.phone = "Este obligatoriu să introduceți numărul de telefon";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      showNotification("Vă rugăm să completați câmpurile obligatorii!");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", form);
      console.log("Cart items:", cartItems);
      showNotification("Cererea de ofertă a fost trimisă cu succes!");
      setIsSubmitting(false);

      // Reset form
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
        preferredContact: "email",
        urgency: "normal",
      });
    }, 2000);
  };

  const exportToPDF = () => {
    showNotification("Descărcarea PDF-ului începe...");
    // Implement PDF export logic
  };

  const shareCart = () => {
    navigator.clipboard.writeText(window.location.href);
    showNotification("Link-ul coșului a fost copiat!");
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const estimatedDelivery = "3-5 zile lucrătoare";

  // Mock recommended products
  const recommendedProducts = [
    {
      id: "rec1",
      name: "Set furtunuri hidraulice",
      image: "/api/placeholder/150/100",
    },
    {
      id: "rec2",
      name: "Pachet de mentenanță",
      image: "/api/placeholder/150/100",
    },
    {
      id: "rec3",
      name: "Echipament de siguranță",
      image: "/api/placeholder/150/100",
    },
  ];

  if (cartItems.length === 0) {
    return (
      <div className="cart-page-container">
        <div className="container py-5">
          {/* Empty Cart State */}
          <div className="empty-cart-section">
            <div className="empty-cart-animation">
              <div className="empty-cart-icon">
                <ShoppingCart size={64} />
              </div>
            </div>

            <h2 className="empty-title">Coșul este gol</h2>
            <p className="empty-subtitle">
              Începe să cumperi și alege dintre produsele excelente!
            </p>

            <div className="empty-actions">
              <Link href="/shop">
              <button className="btn-primary-custom">
                <Package size={18} />
                Căutare produse
              </button>
              </Link>
            </div>
          </div>

          {/* Recommended Products */}
          {/* <div className="recommended-section">
            <h3 className="recommended-title">Produse recomandate</h3>
            <div className="row g-4">
              {recommendedProducts.map((product) => (
                <div key={product.id} className="col-md-4">
                  <div className="recommended-card">
                    <img src={product.image} alt={product.name} />
                    <div className="recommended-content">
                      <h4>{product.name}</h4>
                      <button className="btn-outline-custom">
                        <Plus size={16} />
                        Adaugă
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page-container">
      <div className="container py-5">
        {/* Cart Header */}
        <div className="cart-header-section">
          <div className="cart-header-content">
            <div className="cart-header-info">
              <h3>Coș</h3>
              <p className="cart-subtitle">
                Alege dintre opțiunile de mai jos
              </p>
            </div>
            <div className="cart-header-actions">
              <button onClick={shareCart} className="header-action-btn">
                <Share2 size={18} />
                Partajare
              </button>
              <button onClick={exportToPDF} className="header-action-btn">
                <Download size={18} />
                Export PDF
              </button>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {/* Cart Items Section */}
          <div className="col-lg-8">
            <div className="cart-items-section">
              {cartItems.map((item: any, index: number) => (
                <div
                  key={item.id}
                  className="cart-item-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="item-image-section">
                    <img
                      src={item.image || "https://www.multitech.ro/wp-content/uploads/2024/07/cat_videojet_lpa.jpg"}
                      alt={item.name}
                    />
                   
                  </div>

                  <div className="item-details-section">
                    <div className="item-header">
                      <h3 className="item-name">{item.name}</h3>
                      <div className="item-meta">
                        <span className="service-badge px-3 py-2 d-flex align-items-center gap-2">
                          {item.category || "Mașină de construcții"}
                        </span>
                        <span className="item-model align-items-center d-flex">
                          Model: {item.model || "CX210D"}
                        </span>
                      </div>
                    </div>

                  

                    <div className="item-actions">
                      <div className="quantity-section">
                        <span className="quantity-label">Cantitate</span>
                        <div className="quantity-controls">
                          <button
                            className="quantity-btn decrease"
                            onClick={() => decrementQuantity(item.id)}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="quantity-display">
                            {item.quantity}
                          </span>
                          <button
                            className="quantity-btn increase"
                            onClick={() => addToCart(item)}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      <div className="item-action-buttons">
                         <button
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                        title="Eliminare"
                      >
                        <Trash2 size={16} />
                        <div className="remove-ripple"></div>
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Summary & Form */}
          <div className="col-lg-4">
            <div className="cart-summary-section">
              {/* Summary Card */}
              <div className="summary-card">
                <h3 className="summary-title">Sumar</h3>
                <div className="summary-items">
                  <div className="summary-row">
                    <span>Numărul de produse:</span>
                    <span className="summary-value">{totalItems} buc</span>
                  </div>
                  <div className="summary-row">
                    <span>Livrare estimată:</span>
                    <span className="summary-value">{estimatedDelivery}</span>
                  </div>
                  <div className="summary-row">
                    <span>Cost de transport:</span>
                    <span className="summary-value free">Gratuit</span>
                  </div>
                </div>

                <div className="summary-features">
                  <div className="feature-item">
                    <Shield size={16} />
                    <span>Garanție pentru toate produsele</span>
                  </div>
                  <div className="feature-item">
                    <Truck size={16} />
                    <span>Serviciu de instalare profesional</span>
                  </div>
                  <div className="feature-item">
                    <Star size={16} />
                    <span>Serviciul clienți premium</span>
                  </div>
                </div>
              </div>

              {/* Quote Request Form */}
              <div className="quote-form-card">
                <div className="form-header">
                  <div className="form-icon">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="form-title">Cerere de ofertă</h3>
                    <p className="form-subtitle">
                      Completați datele pentru o ofertă personalizată
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="quote-form">
                  <div className="form-group">
                    <label className="form-label">
                      <User size={16} />
                      Nume complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      className={`form-input ${formErrors.name ? "error" : ""}`}
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ion Popescu"
                    />
                    {formErrors.name && (
                      <span className="error-text">{formErrors.name}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <Building size={16} />
                      Numele companiei
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="form-input"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Construcții SRL"
                    />
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
                        placeholder="ion@email.ro"
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
                        placeholder="+40 720 123 456"
                      />
                      {formErrors.phone && (
                        <span className="error-text">{formErrors.phone}</span>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <MessageSquare size={16} />
                      Observații
                    </label>
                    <textarea
                      name="message"
                      className="form-textarea"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Informații suplimentare, cerințe speciale..."
                      rows={3}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        Metoda de contact
                      </label>
                      <select
                        name="preferredContact"
                        className="form-select"
                        value={form.preferredContact}
                        onChange={handleChange}
                      >
                        <option value="email">Email</option>
                        <option value="phone">Telefon</option>
                        <option value="both">Ambele</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Urgență</label>
                      <select
                        name="urgency"
                        className="form-select"
                        value={form.urgency}
                        onChange={handleChange}
                      >
                        <option value="normal">Normal</option>
                        <option value="urgent">Urgent</option>
                        <option value="asap">Imediat</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`submit-btn ${isSubmitting ? "loading" : ""}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner"></div>
                        Se trimite...
                      </>
                    ) : (
                      <>
                        <Calculator size={18} />
                        Cerere de ofertă
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
    </div>
  );
};

export default ModernCartPage;