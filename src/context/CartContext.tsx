"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Digital Blood Pressure Monitor",
      price: 89.99,
      quantity: 1,
      image: "/assets/images/products/blood-pressure.jpg",
    },
    {
      id: 2,
      name: "Surgical Mask Box (50 pcs)",
      price: 19.99,
      quantity: 2,
      image: "/assets/images/products/mask-box.jpg",
    },
  ]);

  return <CartContext.Provider value={{ cartItems }}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
