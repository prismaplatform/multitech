import { List, Grid, Search, X } from "lucide-react";

interface ShopToolbarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
  productCount: number;
  totalProducts: number;
  currentPage: number;
  productsPerPage: number;
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  selectedBrands: string[];
  setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSurfaces: string[];
  setSelectedSurfaces: React.Dispatch<React.SetStateAction<string[]>>;
  onClearAll: () => void;
}

const ShopToolbar: React.FC<ShopToolbarProps> = ({
  searchTerm,
  setSearchTerm,
  sortOption,
  setSortOption,
  viewMode,
  setViewMode,
  productCount,
  totalProducts,
  currentPage,
  productsPerPage,
  selectedCategories,
  setSelectedCategories,
  selectedBrands,
  setSelectedBrands,
  selectedSurfaces,
  setSelectedSurfaces,
  onClearAll,
}) => {
  const allFilters = [
    ...selectedCategories.map((value) => ({ type: "category", value })),
    ...selectedBrands.map((value) => ({ type: "brand", value })),
    ...selectedSurfaces.map((value) => ({ type: "surface", value })),
  ];

  const removeFilter = (type: string, value: string) => {
    if (type === "category")
      setSelectedCategories((prev) => prev.filter((item) => item !== value));
    if (type === "brand")
      setSelectedBrands((prev) => prev.filter((item) => item !== value));
    if (type === "surface")
      setSelectedSurfaces((prev) => prev.filter((item) => item !== value));
  };

  const getFilterTypeLabel = (type: string) => {
    switch (type) {
      case "category": return "Category";
      case "brand": return "Brand";
      case "surface": return "Surface";
      default: return type;
    }
  };

  return (
    <>
      

      <div className="shop-toolbar">
        {/* Top section - Search and controls */}
        <div className="row g-3 align-items-center">
          {/* Search input */}
          <div className="col-lg-10">
            <div className="search-wrapper">
              <Search className="search-icon" size={16} />
              <input
                type="text"
                className="form-control search-input"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {/* Controls */}
          <div className="col-lg-2">
            <div className="d-flex justify-content-lg-end align-items-center gap-3">
              {/* Sort dropdown */}
              <select
                className="form-select sort-select"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="name-asc">Name: A-Z</option>
                <option value="name-desc">Name: Z-A</option>
              </select>
              
              {/* View toggle */}
              {/* <div className="view-toggle d-flex">
                <button
                  className={`btn ${viewMode === "grid" ? "active" : ""}`}
                  onClick={() => setViewMode("grid")}
                  aria-label="Grid View"
                >
                  <Grid size={16} />
                </button>
                <button
                  className={`btn ${viewMode === "list" ? "active" : ""}`}
                  onClick={() => setViewMode("list")}
                  aria-label="List View"
                >
                  <List size={16} />
                </button>
              </div> */}
            </div>
          </div>
        </div>

        {/* Active Filters */}
        {allFilters.length > 0 && (
          <div className="filters-section">
            <div className="d-flex flex-wrap align-items-center gap-2">
              <span className="fw-semibold text-muted me-2">Active Filters:</span>
              {allFilters.map(({ type, value }) => (
                <span key={`${type}-${value}`} className="filter-badge">
                  <span className="filter-type">{getFilterTypeLabel(type)}:</span>
                  <span>{value}</span>
                  <button
                    onClick={() => removeFilter(type, value)}
                    className="filter-remove"
                    aria-label={`Remove filter: ${value}`}
                  >
                    <X size={12} />
                  </button>
                </span>
              ))}
              {allFilters.length > 1 && (
                <button
                  onClick={onClearAll}
                  className="clear-all-btn ms-2"
                >
                  Clear All
                </button>
              )}
            </div>
          </div>
        )}

        {/* Results counter */}
        <div className="results-counter">
          {productCount > 0 
            ? `Showing ${Math.min((currentPage - 1) * productsPerPage + 1, productCount)}-${Math.min(currentPage * productsPerPage, productCount)} of ${productCount} products` 
            : 'No products found'}
        </div>
      </div>
    </>
  );
};

export default ShopToolbar;