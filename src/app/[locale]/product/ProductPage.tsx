// app/product/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const mockProduct = {
  id: 1,
  name: "Advanced Digital Thermometer",
  price: "$49.99",
  category: "Thermometers",
  description: `This advanced digital thermometer provides accurate and fast readings. Suitable for medical professionals and home use. Features a flexible tip and waterproof body for easy cleaning.`,
  image: "/assets/images/career/c1.png",
};

const ProductPage = () => {
  return (
    <div className="container py-5">
      <div className="row g-4">
        {/* Image */}
        <div className="col-lg-6">
          <Image
            src={mockProduct.image}
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
            <h4 className="text-primary mb-4">{mockProduct.price}</h4>
            <button className="btn btn-primary w-100" onClick={() => {}}>
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
