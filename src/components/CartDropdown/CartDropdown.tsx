"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const CartDropdown = () => {
  const { cartItems, addToCart, decrementQuantity } = useCart();

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
          <li
            key={item.id}
            style={{
              marginBottom: 8,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <img src={item.image} alt={item.name} width={40} style={{ marginRight: 8 }} />
            <div style={{ flexGrow: 1 }}>
              <div>{item.name}</div>
              <div>Quantity: {item.quantity}</div>
            </div>

            <button onClick={() => decrementQuantity(item.id)} aria-label="Decrease quantity">
              -
            </button>
            <button onClick={() => addToCart(item)} aria-label="Increase quantity">
              +
            </button>
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
