"use client";

import CartDrawer from "@/components/cart/CartDrawer";
import { createContext, useContext, useState } from "react";


type NotificationContextType = {
  showNotification: (message: string) => void;
  showCartDrawer: () => void;
  hideCartDrawer: () => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [message, setMessage] = useState<string | null>(null);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

  const showNotification = (msg: string, autoOpenCart: boolean = false) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 4000); // 4s display time

     if (autoOpenCart) {
      setTimeout(() => {
        setIsCartDrawerOpen(true);
      }, 800); // Notification után kis késéssel
    }
  };

  const showCartDrawer = () => {
    setIsCartDrawerOpen(true);
  };

  const hideCartDrawer = () => {
    setIsCartDrawerOpen(false);
  };

  return (
    <NotificationContext.Provider value={{ 
      showNotification, 
      showCartDrawer, 
      hideCartDrawer 
    }}>
      {children}
      
      {/* Modern Brand Notification Toast */}
      {message && (
        <div className="notification-toast">
          <div className="notification-content">
            <div className="notification-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path 
                  d="M20 6L9 17L4 12" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="notification-text">
              <p className="notification-message">{message}</p>
              <div className="notification-submessage">Sikeresen hozzáadva</div>
            </div>
          </div>
          <div className="notification-progress"></div>
        </div>
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartDrawerOpen} 
        onClose={hideCartDrawer} 
      />

      
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error("useNotification must be used within a NotificationProvider");
  return context;
};