"use client";

import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

interface Product {
  name: string;
  brand: string;
  category: string;
  industries: string;
  applications: string;
  surfaces: string;
  image?: string;
}

interface ProductCardProps {
  product: Product;
  viewMode: "grid" | "list";
}

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode }) => {
  const productSlug = encodeURIComponent(product.name.toLowerCase().replace(/\s+/g, '-'));

  // Grid View
  if (viewMode === "grid") {
    return (
      <>

        <div className="col">
          <Link href={`/product/${productSlug}`} className="product-card">
            <div className="card-image-wrapper">
              <Image
                src={product.image || '/assets/images/placeholder.png'}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
                className="card-image"
              />
              
              <div className="brand-badge">{product.category}</div>
            </div>
            
            <div className="card-content">
              <h3 className="card-title">{product.name}</h3>
              
              
              
              
              <p className="card-description">
                {product.applications || "High-performance solution designed for professional applications with superior quality and reliability."}
              </p>
              
              <button className="view-details-btn">
                View Details
              </button>
            </div>
          </Link>
        </div>
      </>
    );
  }

  // List View
  return (
    <>

      <div className="col">
        <Link href={`/product/${productSlug}`} className="product-card-list">
          <div className="list-content">
            <div className="list-image-wrapper">
              <Image
                src={product.image || '/assets/images/placeholder.png'}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
                className="list-image"
              />
            </div>
            
            <div className="list-info">
              <div className="list-header">
                <h3 className="list-title">{product.name}</h3>
                <div className="list-badges">
                  <span className="list-category-badge">{product.category}</span>
                  <span className="list-brand-badge">{product.brand}</span>
                </div>
              </div>
              
              <div className="list-meta-row">
                {product.industries && (
                  <div className="list-meta-item">
                    <span className="meta-label">Industry:</span>
                    <span>{product.industries}</span>
                  </div>
                )}
                {product.surfaces && (
                  <div className="list-meta-item">
                    <span className="meta-label">Surface:</span>
                    <span>{product.surfaces}</span>
                  </div>
                )}
              </div>
              
              <p className="list-description">
                {product.applications || "High-performance solution designed for professional applications with superior quality and reliability. Perfect for demanding environments."}
              </p>
              
              <div className="list-actions">
                <button className="list-view-btn">
                  View Details →
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;