"use client";

import { useState, useMemo } from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Breadcrumb from "@/common/Breadcrumb";
import { Link } from "@/i18n/navigation";
import { X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/multitech-products";

const categories = [
  "Inkjet Caractere Mici (CIJ)",
  "Inkjet Termic (TIJ)",
  "Transfer Termic (TTO)",
  "Inkjet Caractere Mari (LCM)",
  "Laser, Stații de Lucru",
  "Micropercuție",
  "Laser",
  "Etichetare",
  "Filtrare Fum",
  "Robotică / Automatizare",
];

const ProductPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const { addToCart } = useCart();

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory =
        selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategories, searchTerm]);

  const handleFilterChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const renderFilters = () => (
    <div>
      <h5 className="mb-2">Filter by Category</h5>
      <div className="d-flex flex-column gap-1">
        {categories.map((category) => (
          <div key={category} className="form-check form-check-sm">
            <input
              className="form-check-input"
              type="checkbox"
              value={category}
              id={`filter-${category}`}
              checked={selectedCategories.includes(category)}
              onChange={() => handleFilterChange(category)}
              style={{ transform: "scale(0.85)", marginRight: "6px" }}
            />
            <label className="form-check-label small" htmlFor={`filter-${category}`}>
              {category}
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Products" subtitle="Shop" />
      <div className="lonyo-section-padding10">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 d-none d-lg-block">{renderFilters()}</div>

            <div className="col-lg-9">
              {/* Mobile filter button */}
              <div className="d-block d-lg-none mb-3">
                <button
                  className="btn btn-outline-secondary w-100"
                  onClick={() => setMobileFilterOpen(true)}
                >
                  Filter Products
                </button>
              </div>

              <input
                type="text"
                className="form-control mb-4"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <div className="row">
                {filteredProducts.map((product) => (
                  <div key={product.name} className="col-md-6 col-lg-4 mb-4">
                    <div className="card h-100">
                      <Link href="/product" className="text-decoration-none text-dark">
                        <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text">{product.brand}</p>
                        </div>
                      </Link>
                      <div className="card-footer bg-white border-top-0">
                        <button
                          className="btn btn-outline-primary w-100"
                          onClick={() =>
                            addToCart({
                              ...product,
                              id: product.name,
                            })
                          }
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {filteredProducts.length === 0 && <p>No products match your filters.</p>}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilterOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-white p-4"
          style={{ zIndex: 1050, overflowY: "auto" }}
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="mb-0">Filter Products</h5>
            <button className="btn btn-sm btn-light" onClick={() => setMobileFilterOpen(false)}>
              <X size={20} />
            </button>
          </div>
          {renderFilters()}
        </div>
      )}

      <FooterOne />
    </>
  );
};

export default ProductPage;
