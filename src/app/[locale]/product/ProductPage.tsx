"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const mockProduct = {
  id: "test",
  name: "Blood Pressure Monitor",
  category: "Diagnostics",
  description: "test",
};

const ProductPage = () => {
  const { addToCart } = useCart();

  return (
    <div className="container py-5">
      <div className="row g-4">
        {/* Image */}
        <div className="col-lg-6">
          <Image
            src={"/assets/images/products/1.png"}
            alt={mockProduct.name}
            width={600}
            height={400}
            className="img-fluid rounded border"
          />
        </div>

        {/* Product Info */}
        <div className="col-lg-6 d-flex flex-column justify-content-between">
          <div>
            <h2>{mockProduct.name}</h2>
            <p className="text-muted mb-1">Category: {mockProduct.category}</p>
            <button
              className="btn btn-outline-primary w-100"
              onClick={() => addToCart(mockProduct)}
            >
              Add to Cart
            </button>
          </div>
          <div className="mt-3">
            <Link href="/shop" className="text-decoration-none">
              &larr; Back to shop
            </Link>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="row mt-5">
        <div className="col">
          <h4>Description</h4>
          <p>{mockProduct.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
