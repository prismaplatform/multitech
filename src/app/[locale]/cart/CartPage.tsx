"use client";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { Trash2 } from "lucide-react";

const CartPage = () => {
  const { cartItems, removeFromCart, addToCart, decrementQuantity } = useCart();

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    console.log("Cart items:", cartItems);
    alert("Your offer request has been sent!");
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="alert alert-warning">Your cart is currently empty.</div>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead className="table-light">
                <tr>
                  <th>Product</th>
                  <th>Qty</th>
                  <th style={{ width: 60, textAlign: "center" }}>
                    {" "}
                    {/* narrow column */}
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item: any) => (
                  <tr key={item.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src={item.image} alt={item.name} width={50} className="me-3" />
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td className="text-center align-middle">
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <button
                          type="button"
                          className="btn btn-outline-secondary p-0 d-flex justify-content-center align-items-center"
                          style={{
                            width: "28px",
                            height: "28px",
                            minWidth: "28px",
                            fontSize: "18px",
                          }}
                          onClick={() => decrementQuantity(item.id)}
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          −
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          type="button"
                          className="btn btn-outline-secondary p-0 d-flex justify-content-center align-items-center"
                          style={{
                            width: "28px",
                            height: "28px",
                            minWidth: "28px",
                            fontSize: "18px",
                          }}
                          onClick={() => addToCart(item)}
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td style={{ textAlign: "center" }}>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        type="button"
                        aria-label={`Remove ${item.name} from cart`}
                        className="btn btn-link p-0"
                        style={{ color: "#dc3545" }} // red icon color
                      >
                        <Trash2 size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <hr className="my-5" />

          <h4 className="mb-3">Request an Offer</h4>
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                Full Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="company" className="form-label">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="form-control"
                value={form.company}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                Phone Number*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-12 text-end">
              <button type="submit" className="btn btn-primary mt-3">
                Request an Offer
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default CartPage;
