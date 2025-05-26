"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const CartDropdown = () => {
  const { cartItems } = useCart();

  return (
    <div
      className="cart-dropdown"
      style={{
        position: "fixed",
        top: 90,
        right: 20,
        background: "#fff",
        padding: 16,
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      <h5>Cart</h5>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {cartItems.map((item: any) => (
          <li key={item.id} style={{ marginBottom: 8, display: "flex", alignItems: "center" }}>
            <img src={item.image} alt={item.name} width={40} style={{ marginRight: 8 }} />
            <div>
              <div>{item.name}</div>
              <div>
                {item.quantity} × ${item.price.toFixed(2)}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Link href="/cart" className="lonyo-default-btn mt-2 d-block text-center">
        View Cart
      </Link>
    </div>
  );
};

export default CartDropdown;
