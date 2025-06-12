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

    if (!form.name.trim()) errors.name = "Név megadása kötelező";
    if (!form.email.trim()) errors.email = "Email megadása kötelező";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      errors.email = "Érvénytelen email formátum";
    if (!form.phone.trim()) errors.phone = "Telefonszám megadása kötelező";

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

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", form);
      console.log("Cart items:", cartItems);
      showNotification("Ajánlatkérés sikeresen elküldve!");
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
    showNotification("PDF letöltés kezdődik...");
    // Implement PDF export logic
  };

  const shareCart = () => {
    navigator.clipboard.writeText(window.location.href);
    showNotification("Kosár link másolva!");
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const estimatedDelivery = "3-5 munkanap";

  // Mock recommended products
  const recommendedProducts = [
    {
      id: "rec1",
      name: "Hidraulikus tömlő szett",
      image: "/api/placeholder/150/100",
    },
    {
      id: "rec2",
      name: "Karbantartási csomag",
      image: "/api/placeholder/150/100",
    },
    {
      id: "rec3",
      name: "Biztonsági felszerelés",
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

            <h2 className="empty-title">A kosár üres</h2>
            <p className="empty-subtitle">
              Kezdj el vásárolni és válassz a kiváló termékek közül!
            </p>

            <div className="empty-actions">
              <button className="btn-primary-custom">
                <Package size={18} />
                Termékek böngészése
              </button>
            </div>
          </div>

          {/* Recommended Products */}
          <div className="recommended-section">
            <h3 className="recommended-title">Ajánlott termékek</h3>
            <div className="row g-4">
              {recommendedProducts.map((product) => (
                <div key={product.id} className="col-md-4">
                  <div className="recommended-card">
                    <img src={product.image} alt={product.name} />
                    <div className="recommended-content">
                      <h4>{product.name}</h4>
                      <button className="btn-outline-custom">
                        <Plus size={16} />
                        Hozzáadás
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .cart-page-container {
            min-height: 100vh;
            background: linear-gradient(
              135deg,
              rgba(0, 139, 205, 0.02) 0%,
              rgba(91, 194, 231, 0.02) 100%
            );
          }

          .empty-cart-section {
            text-align: center;
            padding: 80px 20px;
          }

          .empty-cart-animation {
            position: relative;
            margin-bottom: 40px;
            display: inline-block;
          }

          .empty-cart-icon {
            width: 120px;
            height: 120px;
            background: linear-gradient(135deg, #008bcd 0%, #5bc2e7 100%);
            border-radius: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            margin: 0 auto;
            animation: emptyFloat 4s ease-in-out infinite;
            box-shadow: 0 20px 40px rgba(0, 139, 205, 0.2);
            position: relative;
          }

          .cart-sparkle {
            position: absolute;
            width: 8px;
            height: 8px;
            background: #f2a900;
            border-radius: 50%;
            animation: sparkleFloat 3s ease-in-out infinite;
          }

          .sparkle-1 {
            top: 20px;
            right: 15px;
            animation-delay: 0s;
          }

          .sparkle-2 {
            bottom: 25px;
            left: 10px;
            animation-delay: 1s;
          }

          .sparkle-3 {
            top: 40px;
            left: -5px;
            animation-delay: 2s;
          }

          .empty-title {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 16px;
            background: linear-gradient(135deg, #008bcd 0%, #5bc2e7 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .empty-subtitle {
            font-size: 18px;
            color: #666;
            margin-bottom: 32px;
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.5;
          }

          .empty-actions {
            margin-bottom: 60px;
          }

          .btn-primary-custom {
            background: linear-gradient(135deg, #008bcd 0%, #5bc2e7 100%);
            color: white;
            border: none;
            padding: 16px 32px;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 8px 20px rgba(0, 139, 205, 0.3);
          }

          .btn-primary-custom:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 30px rgba(0, 139, 205, 0.4);
          }

          .recommended-section {
            margin-top: 40px;
          }

          .recommended-title {
            text-align: center;
            font-size: 24px;
            font-weight: 700;
            color: #1a1a1a;
            margin-bottom: 32px;
          }

          .recommended-card {
            background: white;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
          }

          .recommended-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 32px rgba(0, 139, 205, 0.15);
          }

          .recommended-card img {
            width: 100%;
            height: 150px;
            object-fit: cover;
          }

          .recommended-content {
            padding: 20px;
          }

          .recommended-content h4 {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 12px;
            color: #1a1a1a;
          }

          .btn-outline-custom {
            background: rgba(0, 139, 205, 0.1);
            color: #008bcd;
            border: 1px solid rgba(0, 139, 205, 0.2);
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .btn-outline-custom:hover {
            background: #008bcd;
            color: white;
          }

          @keyframes emptyFloat {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes sparkleFloat {
            0%,
            100% {
              transform: translateY(0px) scale(1);
              opacity: 0.7;
            }
            50% {
              transform: translateY(-15px) scale(1.3);
              opacity: 1;
            }
          }
        `}</style>
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
              <h3>Kosár</h3>
              <p className="cart-subtitle">
                Válassz az alábbi lehetőségek közül
              </p>
            </div>
            <div className="cart-header-actions">
              <button onClick={shareCart} className="header-action-btn">
                <Share2 size={18} />
                Megosztás
              </button>
              <button onClick={exportToPDF} className="header-action-btn">
                <Download size={18} />
                PDF export
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
                      src={item.image || "/api/placeholder/120/120"}
                      alt={item.name}
                    />
                   
                  </div>

                  <div className="item-details-section">
                    <div className="item-header">
                      <h3 className="item-name">{item.name}</h3>
                      <div className="item-meta">
                        <span className="item-category">
                          {item.category || "Építőipari gép"}
                        </span>
                        <span className="item-model">
                          Modell: {item.model || "CX210D"}
                        </span>
                      </div>
                    </div>

                  

                    <div className="item-actions">
                      <div className="quantity-section">
                        <span className="quantity-label">Mennyiség</span>
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
                        title="Eltávolítás"
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
                <h3 className="summary-title">Összesítő</h3>
                <div className="summary-items">
                  <div className="summary-row">
                    <span>Termékek száma:</span>
                    <span className="summary-value">{totalItems} db</span>
                  </div>
                  <div className="summary-row">
                    <span>Becsült szállítás:</span>
                    <span className="summary-value">{estimatedDelivery}</span>
                  </div>
                  <div className="summary-row">
                    <span>Szállítási költség:</span>
                    <span className="summary-value free">Ingyenes</span>
                  </div>
                </div>

                <div className="summary-features">
                  <div className="feature-item">
                    <Shield size={16} />
                    <span>Garancia minden termékre</span>
                  </div>
                  <div className="feature-item">
                    <Truck size={16} />
                    <span>Profi telepítési szolgáltatás</span>
                  </div>
                  <div className="feature-item">
                    <Star size={16} />
                    <span>Prémium ügyfélszolgálat</span>
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
                    <h3 className="form-title">Ajánlatkérés</h3>
                    <p className="form-subtitle">
                      Töltse ki az adatokat az egyedi ajánlatért
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="quote-form">
                  <div className="form-group">
                    <label className="form-label">
                      <User size={16} />
                      Teljes név *
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

                  <div className="form-group">
                    <label className="form-label">
                      <Building size={16} />
                      Cégnév
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="form-input"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Építő Kft."
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

                  <div className="form-group">
                    <label className="form-label">
                      <MessageSquare size={16} />
                      Megjegyzés
                    </label>
                    <textarea
                      name="message"
                      className="form-textarea"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="További információk, speciális igények..."
                      rows={3}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        Kapcsolatfelvétel módja
                      </label>
                      <select
                        name="preferredContact"
                        className="form-select"
                        value={form.preferredContact}
                        onChange={handleChange}
                      >
                        <option value="email">Email</option>
                        <option value="phone">Telefon</option>
                        <option value="both">Mindkettő</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Sürgősség</label>
                      <select
                        name="urgency"
                        className="form-select"
                        value={form.urgency}
                        onChange={handleChange}
                      >
                        <option value="normal">Normál</option>
                        <option value="urgent">Sürgős</option>
                        <option value="asap">Azonnal</option>
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
                        Küldés...
                      </>
                    ) : (
                      <>
                        <Calculator size={18} />
                        Ajánlat kérése
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

      <style jsx>{`
        .cart-page-container {
          min-height: 100vh;
          background: linear-gradient(
            135deg,
            rgba(0, 139, 205, 0.02) 0%,
            rgba(91, 194, 231, 0.02) 100%
          );
        }

        .cart-header-section {
          margin-bottom: 32px;
        }

        .cart-header-content {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .cart-title {
          font-size: 28px;
          font-weight: 700;
          margin: 0;
          background: linear-gradient(135deg, #008bcd 0%, #5bc2e7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cart-subtitle {
          color: #666;
          margin: 4px 0 0 0;
          font-size: 16px;
        }

        .cart-header-actions {
          display: flex;
          gap: 12px;
        }

        .header-action-btn {
          background: rgba(0, 139, 205, 0.1);
          color: #008bcd;
          border: 1px solid rgba(0, 139, 205, 0.2);
          padding: 10px 16px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .header-action-btn:hover {
          background: #008bcd;
          color: white;
          transform: translateY(-2px);
        }

        .cart-items-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cart-item-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          display: flex;
          gap: 24px;
          transition: all 0.3s ease;
          animation: slideInUp 0.6s ease-out both;
          border: 1px solid rgba(0, 139, 205, 0.05);
        }

        .cart-item-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 139, 205, 0.1);
        }

        .item-image-section {
          position: relative;
          flex-shrink: 0;
        }

        .item-image-section img {
          width: 120px;
          height: 120px;
          object-fit: cover;
          border-radius: 12px;
          background: #f8f9fa;
        }

        .item-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: linear-gradient(135deg, #008bcd 0%, #5bc2e7 100%);
          color: white;
          font-size: 12px;
          font-weight: 700;
          padding: 4px 8px;
          border-radius: 6px;
          box-shadow: 0 2px 8px rgba(0, 139, 205, 0.3);
        }

        .item-details-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .item-header {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .item-name {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0;
          line-height: 1.3;
        }

        .item-meta {
          display: flex;
          gap: 16px;
          font-size: 14px;
          color: #666;
        }

        .item-category {
          background: rgba(0, 139, 205, 0.1);
          color: #008bcd;
          padding: 4px 8px;
          border-radius: 6px;
          font-weight: 600;
        }

        .item-specs {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .spec-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          color: #666;
        }

        .spec-item svg {
          color: #008bcd;
        }

        .item-actions {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 16px;
          flex-wrap: wrap;
        }

        .quantity-section {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .quantity-label {
          font-size: 12px;
          color: #666;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 2px;
          background: rgba(0, 139, 205, 0.05);
          border-radius: 10px;
          padding: 4px;
          border: 1px solid rgba(0, 139, 205, 0.1);
        }

        .quantity-btn {
          width: 32px;
          height: 32px;
          border: none;
          background: white;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #008bcd;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .quantity-btn:hover {
          background: #008bcd;
          color: white;
          transform: scale(1.1);
        }

        .quantity-display {
          min-width: 36px;
          text-align: center;
          font-weight: 700;
          color: #008bcd;
          font-size: 16px;
        }

        .item-action-buttons {
          display: flex;
          gap: 8px;
        }

        .action-btn {
          width: 36px;
          height: 36px;
          border: none;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .action-btn.save {
          background: rgba(242, 169, 0, 0.1);
          color: #f2a900;
        }

        .action-btn.save:hover {
          background: #f2a900;
          color: white;
          transform: scale(1.1);
        }

        .action-btn.remove {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }

        .action-btn.remove:hover {
          background: #ef4444;
          color: white;
          transform: scale(1.1);
        }

        .cart-summary-section {
          display: flex;
          flex-direction: column;
          gap: 24px;
          position: sticky;
          top: 20px;
        }

        .summary-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 139, 205, 0.05);
        }

        .summary-title {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 16px 0;
        }

        .summary-items {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(0, 139, 205, 0.1);
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
        }

        .summary-value {
          font-weight: 600;
          color: #1a1a1a;
        }

        .summary-value.free {
          color: #22c55e;
          font-weight: 700;
        }

        .summary-features {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #666;
        }

        .feature-item svg {
          color: #008bcd;
          flex-shrink: 0;
        }

        .quote-form-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 139, 205, 0.05);
        }

        .form-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .form-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #008bcd 0%, #5bc2e7 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .form-title {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0;
        }

        .form-subtitle {
          font-size: 14px;
          color: #666;
          margin: 2px 0 0 0;
        }

        .quote-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .form-label svg {
          color: #008bcd;
        }

        .form-input,
        .form-textarea,
        .form-select {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid rgba(0, 139, 205, 0.1);
          border-radius: 10px;
          font-size: 14px;
          transition: all 0.3s ease;
          background: rgba(0, 139, 205, 0.02);
        }

        .form-input:focus,
        .form-textarea:focus,
        .form-select:focus {
          outline: none;
          border-color: #008bcd;
          background: white;
          box-shadow: 0 0 0 3px rgba(0, 139, 205, 0.1);
        }

        .form-input.error {
          border-color: #ef4444;
          background: rgba(239, 68, 68, 0.05);
        }

        .error-text {
          font-size: 12px;
          color: #ef4444;
          font-weight: 600;
        }

        .submit-btn {
          background: linear-gradient(135deg, #008bcd 0%, #5bc2e7 100%);
          color: white;
          border: none;
          padding: 16px 24px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(0, 139, 205, 0.3);
          position: relative;
          overflow: hidden;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(0, 139, 205, 0.4);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .submit-btn.loading {
          background: linear-gradient(135deg, #5bc2e7 0%, #f2a900 100%);
        }

        .loading-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .cart-header-content {
            flex-direction: column;
            align-items: flex-start;
          }

          .cart-item-card {
            flex-direction: column;
            gap: 16px;
          }

          .item-image-section {
            align-self: center;
          }

          .item-actions {
            justify-content: center;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .cart-summary-section {
            position: static;
          }
        }

        @media (max-width: 480px) {
          .cart-title {
            font-size: 24px;
          }

          .item-name {
            font-size: 18px;
          }

          .cart-item-card {
            padding: 16px;
          }

          .quote-form-card {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default ModernCartPage;
