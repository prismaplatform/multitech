import { X } from "lucide-react";

interface ActiveFiltersProps {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  selectedBrands: string[];
  setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSurfaces: string[];
  setSelectedSurfaces: React.Dispatch<React.SetStateAction<string[]>>;
  onClearAll: () => void;
}

const ActiveFilters: React.FC<ActiveFiltersProps> = ({
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

  if (allFilters.length === 0) {
    return (
      <>
        <div className="active-filters d-flex align-items-center flex-wrap gap-2">
          <strong className="me-2">Active Filters:</strong>
        </div>
      </>
    );
  }

  const removeFilter = (type: string, value: string) => {
    if (type === "category")
      setSelectedCategories((prev) => prev.filter((item) => item !== value));
    if (type === "brand")
      setSelectedBrands((prev) => prev.filter((item) => item !== value));
    if (type === "surface")
      setSelectedSurfaces((prev) => prev.filter((item) => item !== value));
  };

  return (
    <>
      <div className="active-filters d-flex align-items-center flex-wrap gap-2">
        <strong className="me-2 p-2">Active Filters:</strong>
        {allFilters.map(({ type, value }) => (
          <div key={`${type}-${value}`} className="badge-filter">
            {value}
            <button
              className="close"
              onClick={() => removeFilter(type, value)}
              aria-label={`Szűrő eltávolítása: ${value}`}
            >
              &times;
            </button>
          </div>
        ))}

        {allFilters.length > 1 && (
          <button
            className="btn btn-link btn-sm text-danger ms-auto"
            onClick={onClearAll}
          >
            Clear All
          </button>
        )}
      </div>
    </>
  );
};

export default ActiveFilters;
