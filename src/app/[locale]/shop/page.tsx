"use client";

import { useState, useMemo, useEffect } from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Breadcrumb from "@/common/Breadcrumb";
import { products } from "@/data/multitech-products";
import { Product } from "@/types/product-type"; // Győződj meg róla, hogy a product típus importálása helyes

// Komponensek importálása
import ProductCard from "@/components/shop/ProductCard";
import ProductFilter from "@/components/shop/ProductFilter";
import ProductPagination from "@/components/shop/ProductPagination";
import MobileFilterDrawer from "@/components/shop/MobileFilterDrawer";
import ShopToolbar from "@/components/shop/ShopToolbar";
import ActiveFilters from "@/components/shop/ActiveFilters";

// Szűrőkhöz használt adataink
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
  // === STATE MANAGEMENT ===

  // Fő state a szűrőknek és a megjelenítésnek
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSurfaces, setSelectedSurfaces] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("default");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const productsPerPage = 15;

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const [tempSelectedCategories, setTempSelectedCategories] = useState<
    string[]
  >([]);
  const [tempSelectedBrands, setTempSelectedBrands] = useState<string[]>([]);
  const [tempSelectedSurfaces, setTempSelectedSurfaces] = useState<string[]>(
    []
  );

  const filteredAndSortedProducts = useMemo(() => {
    let filtered: Product[] = products.filter((product) => {
      const matchCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const matchBrand =
        selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const matchSurface =
        selectedSurfaces.length === 0 ||
        selectedSurfaces.every((selected) =>
          product.surfaces?.toLowerCase().includes(selected.toLowerCase())
        );
      const matchSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchCategory && matchBrand && matchSurface && matchSearch;
    });
    switch (sortOption) {
      case "name-asc":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      // Itt bővíthető a rendezés pl. ár alapján, ha az adatmodell tartalmazza
      default:
        // Alapértelmezett rendezés (az eredeti sorrend marad)
        break;
    }

    return filtered;
  }, [
    selectedCategories,
    selectedBrands,
    selectedSurfaces,
    searchTerm,
    sortOption,
  ]);

  // 2. Dinamikus darabszámok kiszámítása a szűrőkhöz
  const filterCounts = useMemo(() => {
    const counts = {
      categories: {} as Record<string, number>,
      brands: {} as Record<string, number>,
      surfaces: {} as Record<string, number>,
    };

    // A logika itt változatlan, a teljes terméklistán dolgozik, hogy releváns számokat mutasson
    products
      .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .forEach((product) => {
        if (
          (selectedBrands.length === 0 ||
            selectedBrands.includes(product.brand)) &&
          (selectedSurfaces.length === 0 ||
            selectedSurfaces.every((s) =>
              product.surfaces?.toLowerCase().includes(s.toLowerCase())
            ))
        ) {
          counts.categories[product.category] =
            (counts.categories[product.category] || 0) + 1;
        }
        if (
          (selectedCategories.length === 0 ||
            selectedCategories.includes(product.category)) &&
          (selectedSurfaces.length === 0 ||
            selectedSurfaces.every((s) =>
              product.surfaces?.toLowerCase().includes(s.toLowerCase())
            ))
        ) {
          counts.brands[product.brand] =
            (counts.brands[product.brand] || 0) + 1;
        }
        if (
          (selectedCategories.length === 0 ||
            selectedCategories.includes(product.category)) &&
          (selectedBrands.length === 0 ||
            selectedBrands.includes(product.brand))
        ) {
          product.surfaces?.split(",").forEach((surface) => {
            const s = surface.trim();
            if (s) counts.surfaces[s] = (counts.surfaces[s] || 0) + 1;
          });
        }
      });
    return counts;
  }, [searchTerm, selectedCategories, selectedBrands, selectedSurfaces]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    return filteredAndSortedProducts.slice(
      startIndex,
      startIndex + productsPerPage
    );
  }, [filteredAndSortedProducts, currentPage]);

  const totalPages = Math.ceil(
    filteredAndSortedProducts.length / productsPerPage
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [
    selectedCategories,
    selectedBrands,
    selectedSurfaces,
    searchTerm,
    sortOption,
  ]);

  const handleOpenMobileFilter = () => {
    setTempSelectedCategories([...selectedCategories]);
    setTempSelectedBrands([...selectedBrands]);
    setTempSelectedSurfaces([...selectedSurfaces]);
    setMobileFilterOpen(true);
  };

  const handleApplyFilters = () => {
    setSelectedCategories([...tempSelectedCategories]);
    setSelectedBrands([...tempSelectedBrands]);
    setSelectedSurfaces([...tempSelectedSurfaces]);
    setMobileFilterOpen(false);
  };

  const handleClearAllTemp = () => {
    setTempSelectedCategories([]);
    setTempSelectedBrands([]);
    setTempSelectedSurfaces([]);
  };

  const handleClearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedSurfaces([]);
    setSearchTerm("");
    setSortOption("default");
  };
  // const productCount = filteredAndSortedProducts.length;
  // const startItem = (currentPage - 1) * productsPerPage + 1;
  // const endItem = Math.min(
  //   startItem + productsPerPage - 1,
  //   filteredAndSortedProducts.length
  // );
  return (
    <>
      <HeaderOne />

      <Breadcrumb title="Products" subtitle="Shop" />

      <div className="lonyo-section-padding10">
        <div className="container">
          <div className="row">
            {/* --- BAL OLDALI SÁV: DESKTOP SZŰRŐK --- */}
            <div className="col-lg-3 d-none d-lg-block">
              <ProductFilter
                categories={categories}
                brands={brands}
                surfaces={surfaces}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
                selectedSurfaces={selectedSurfaces}
                setSelectedSurfaces={setSelectedSurfaces}
                filterCounts={filterCounts}
              />
            </div>

            {/* --- JOBB OLDALI SÁV: FŐ TARTALOM --- */}
            <div className="col-lg-9">
              {/* Mobil szűrő gomb */}
              <div className="d-block d-lg-none mb-3">
                <button
                  className="btn btn-outline-primary w-100"
                  onClick={handleOpenMobileFilter}
                >
                  Filter & Sort Products
                </button>
              </div>

              {/* Felső vezérlőpult: Kereső, Rendezés, Nézetváltó */}
              <ShopToolbar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                sortOption={sortOption}
                setSortOption={setSortOption}
                viewMode={viewMode}
                setViewMode={setViewMode}
                productCount={filteredAndSortedProducts.length}
                totalProducts={products.length}
                currentPage={currentPage}
                productsPerPage={productsPerPage}

                 selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
                selectedSurfaces={selectedSurfaces}
                setSelectedSurfaces={setSelectedSurfaces}
                onClearAll={handleClearAllFilters}
              />

              {/* Aktív szűrők kijelzése */}
              {/* <ActiveFilters
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
                selectedSurfaces={selectedSurfaces}
                setSelectedSurfaces={setSelectedSurfaces}
                onClearAll={handleClearAllFilters}
              /> */}
              {/* <p className="text-muted mb-4">
                {productCount > 0
                  ? `Showing ${startItem}–${endItem} of ${productCount} results`
                  : "No products found"}
              </p> */}
              {/* Terméklista */}
              <div
                className={`row ${
                  viewMode === "grid"
                    ? "row-cols-1 row-cols-md-2 row-cols-xl-3 g-4"
                    : "row-cols-1 g-4"
                }`}
              >
                {paginatedProducts.length > 0 ? (
                  paginatedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      viewMode={viewMode}
                    />
                  ))
                ) : (
                  <div className="col-12">
                    <p className="text-center py-5">
                      No products match your filters.
                    </p>
                  </div>
                )}
              </div>

              {/* Lapozó (Pagination) */}
              {filteredAndSortedProducts.length > 0 && totalPages > 1 && (
                <div className="mt-5 d-flex justify-content-center">
                  <ProductPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    setCurrentPage={setCurrentPage}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* --- OLDALON KÍVÜLI ELEM: MOBIL SZŰRŐ FIÓK --- */}
      <MobileFilterDrawer
        isOpen={mobileFilterOpen}
        onClose={() => setMobileFilterOpen(false)}
        categories={categories}
        brands={brands}
        surfaces={surfaces}
        selectedCategories={tempSelectedCategories}
        setSelectedCategories={setTempSelectedCategories}
        selectedBrands={tempSelectedBrands}
        setSelectedBrands={setTempSelectedBrands}
        selectedSurfaces={tempSelectedSurfaces}
        setSelectedSurfaces={setTempSelectedSurfaces}
        filterCounts={filterCounts}
        onApplyFilters={handleApplyFilters}
        onClearAll={handleClearAllTemp}
      />

      <FooterOne />
    </>
  );
};

export default ProductPage;
