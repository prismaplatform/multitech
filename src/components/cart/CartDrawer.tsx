"use client";

import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";
import {
  X,
  ShoppingCart,
  FileText,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { cartItems, removeFromCart, addToCart, decrementQuantity } = useCart();
  const router = useRouter();
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Először rendereljük rejtetten
      setShouldRender(true);
      document.body.style.overflow = "hidden";
      
      // Kis késéssel indítjuk az animációt
      setTimeout(() => {
        setIsAnimating(true);
      }, 50);
    } else {
      // Azonnal leállítjuk az animációt
      setIsAnimating(false);
      
      // DOM-ból való eltávolítás után hogy az animáció befejeződött
      setTimeout(() => {
        setShouldRender(false);
        document.body.style.overflow = "unset";
      }, 600); // CSS transition ideje
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleViewCart = () => {
    onClose();
    router.push("/cart");
  };

  const handleRequestOffer = () => {
    onClose();
    router.push("/cart#offer-form");
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Ne rendereljük ha nincs szükség rá
  if (!shouldRender) return null;

  return (
    <>
      {/* Premium Backdrop */}
      <div
        className={`cart-backdrop ${isAnimating ? "show" : ""}`}
        onClick={onClose}
      />

      {/* Premium Cart Drawer */}
      <div className={`cart-drawer ${isAnimating ? "show" : ""}`}>
        {/* Floating Header */}
        <div className="cart-header">
          <div className="cart-title-section">
            <div className="cart-icon-wrapper">
              <ShoppingCart size={20} />
              <div className="icon-glow"></div>
            </div>
            <div className="title-content">
              <h3 className="cart-title">Kosár</h3>
              <p className="cart-subtitle">
                <span className="item-count">{totalItems}</span>
                <span className="item-text">termék kiválasztva</span>
              </p>
            </div>
          </div>
          <button onClick={onClose} className="close-btn">
            <X size={20} />
            <div className="close-ripple"></div>
          </button>
        </div>

        {/* Dynamic Content */}
        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-animation">
                <div className="empty-cart-icon">
                  <ShoppingCart size={48} />
                  
                </div>
              </div>
              <h4 className="empty-title">Kosár üres</h4>
              <p className="empty-subtitle">
                Kezdj el vásárolni és add hozzá kedvenc termékeidet!
              </p>
            </div>
          ) : (
            <div className="cart-items">
              {cartItems.map((item: any, index: number) => (
                <div
                  key={item.id}
                  className="cart-item"
                  style={{ animationDelay: `${index * 120}ms` }}
                  data-item-index={index}
                >
                  <div className="item-image-container">
                    <div className="item-image">
                      <img
                        src={item.image || "/api/placeholder/60/60"}
                        alt={item.name}
                      />
                      <div className="image-overlay"></div>
                    </div>
                  </div>

                  <div className="item-details">
                    <h4 className="item-name">{item.name}</h4>
                    <div className="item-actions">
                      <div className="quantity-section">
                        <span className="quantity-label">Mennyiség</span>
                        <div className="quantity-controls">
                          <button
                            className="quantity-btn decrease"
                            onClick={() => decrementQuantity(item.id)}
                          >
                            <Minus size={14} />
                            <div className="btn-ripple"></div>
                          </button>
                          <div className="quantity-display">
                            <span className="quantity">{item.quantity}</span>
                          </div>
                          <button
                            className="quantity-btn increase"
                            onClick={() => addToCart(item)}
                          >
                            <Plus size={14} />
                            <div className="btn-ripple"></div>
                          </button>
                        </div>
                      </div>
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
              ))}
            </div>
          )}
        </div>

        {/* Premium Footer */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            
            <button onClick={handleViewCart} className="action-btn secondary">
              <div className="btn-content">
                <ShoppingCart size={18} />
                <span>Kosár megtekintése</span>
                <ArrowRight size={16} className="btn-arrow" />
              </div>
              <div className="btn-bg"></div>
            </button>

            {/* <button onClick={handleRequestOffer} className="action-btn primary">
              <div className="btn-content">
                <FileText size={18} />
                <span>Ajánlatkérés</span>
                <ArrowRight size={16} className="btn-arrow" />
              </div>
              <div className="btn-bg"></div>
              <div className="btn-glow"></div>
            </button> */}
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;