"use client";

import { useState, useMemo } from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Breadcrumb from "@/common/Breadcrumb";
import { Link } from "@/i18n/navigation";
import { X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/multitech-products";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNotification } from "@/context/NotificationContext";

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

const brands = [
  "Videojet",
  "Foba",
  "Couth",
  "Eidos",
  "Etipack",
  "Novexx",
  "Bofa",
  "Cassel",
  "Universal Robots",
  "MiR",
];
const surfaces = [
  "Plastic",
  "PET",
  "Organic",
  "Hârtie / Carton",
  "Sticlă",
  "Lemn",
  "Folie",
  "Altă suprafață",
  "Oțel",
  "Aluminiu",
  "Alt metal",
];

const ProductPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSurfaces, setSelectedSurfaces] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    category: true,
    brand: false,
    surface: false,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;

  const { addToCart } = useCart();
  const { showNotification } = useNotification();

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory =
        selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const matchSurface =
        selectedSurfaces.length === 0 ||
        selectedSurfaces.every((selected) =>
          product.surfaces
            ?.split(",")
            .map((s) => s.trim().toLowerCase())
            .includes(selected.toLowerCase())
        );
      const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());

      return matchCategory && matchBrand && matchSurface && matchSearch;
    });
  }, [selectedCategories, selectedBrands, selectedSurfaces, searchTerm]);

  useMemo(() => {
    setCurrentPage(1);
  }, [selectedCategories, selectedBrands, selectedSurfaces, searchTerm]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const toggleDropdown = (type: "category" | "brand" | "surface") => {
    setDropdowns((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleToggle = (
    value: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const renderFilterGroup = (
    title: string,
    items: string[],
    selectedItems: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>,
    type: "category" | "brand" | "surface"
  ) => (
    <div className="mb-3">
      <h5
        className="mb-2 cursor-pointer d-flex justify-content-between align-items-center"
        onClick={() => toggleDropdown(type)}
        style={{ cursor: "pointer" }}
      >
        {title}
        <span style={{ fontSize: "0.85rem" }}>{dropdowns[type] ? "▲" : "▼"}</span>
      </h5>
      {dropdowns[type] && (
        <div className="d-flex flex-column gap-1">
          {items.map((item) => (
            <div key={item} className="form-check form-check-sm">
              <input
                className="form-check-input"
                type="checkbox"
                value={item}
                id={`filter-${type}-${item}`}
                checked={selectedItems.includes(item)}
                onChange={() => handleToggle(item, selectedItems, setSelected)}
                style={{ transform: "scale(0.85)", marginRight: "6px" }}
              />
              <label className="form-check-label small" htmlFor={`filter-${type}-${item}`}>
                {item}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderPagination = () => (
    <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={16} /> Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Next <ChevronRight size={16} />
      </button>
    </div>
  );

  const renderFilters = () => (
    <div>
      {renderFilterGroup(
        "Filter by Category",
        categories,
        selectedCategories,
        setSelectedCategories,
        "category"
      )}
      {renderFilterGroup("Filter by Brand", brands, selectedBrands, setSelectedBrands, "brand")}
      {renderFilterGroup(
        "Filter by Surface",
        surfaces,
        selectedSurfaces,
        setSelectedSurfaces,
        "surface"
      )}
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
                {paginatedProducts.map((product) => (
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
                          onClick={() => {
                            addToCart({ ...product, id: product.name });
                            showNotification(`${product.name} added to cart`);
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {filteredProducts.length > productsPerPage && renderPagination()}

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
