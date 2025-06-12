import React, { useState } from 'react';


// A modern ikon a lenyíló nyílhoz
const ChevronIcon = ({ isExpanded }: { isExpanded: boolean }) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ transform: `rotate(${isExpanded ? '180deg' : '0deg'})`, transition: 'transform 0.2s ease-in-out' }}>
        <path fill="none" d="M0 0h24v24H0z"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
    </svg>
);

interface MobileFilterDrawerProps {
  // ... a props definíciók változatlanok maradnak
  isOpen: boolean;
  onClose: () => void;
  categories: string[];
  brands: string[];
  surfaces: string[];
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  selectedBrands: string[];
  setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSurfaces: string[];
  setSelectedSurfaces: React.Dispatch<React.SetStateAction<string[]>>;
  filterCounts: {
    categories: Record<string, number>;
    brands: Record<string, number>;
    surfaces: Record<string, number>;
  };
  onClearAll: () => void;
  onApplyFilters: () => void;
}

const MobileFilterDrawer: React.FC<MobileFilterDrawerProps> = ({
  isOpen, onClose, categories, brands, surfaces,
  selectedCategories, setSelectedCategories,
  selectedBrands, setSelectedBrands,
  selectedSurfaces, setSelectedSurfaces,
  filterCounts, onClearAll, onApplyFilters
}) => {
  const [isCollapsed, setIsCollapsed] = useState({ category: false, brand: false, surface: false });

  const toggleCollapse = (type: keyof typeof isCollapsed) => {
    setIsCollapsed((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleToggle = (value: string, selected: string[], setSelected: React.Dispatch<React.SetStateAction<string[]>>) => {
    setSelected((prev) => prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]);
  };
  
  const renderFilterGroup = (
    title: string, items: string[], selectedItems: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>,
    type: keyof typeof isCollapsed, counts: Record<string, number>
  ) => (
    <div className="filter-card mb-3">
      <div className="filter-card-header" onClick={() => toggleCollapse(type)}>
        <h6 className="text-uppercase">{title}</h6>
        <ChevronIcon isExpanded={!isCollapsed[type]} />
      </div>
      {!isCollapsed[type] && (
        <div className="filter-card-body">
          <div className="d-flex flex-column gap-2">
            {items.map((item) => {
              const count = counts[item] || 0;
              const isChecked = selectedItems.includes(item);
              const isDisabled = count === 0 && !isChecked;
              return (
                <div key={item} className={`custom-checkbox-wrapper ${isDisabled ? 'disabled' : ''}`}>
                  <input type="checkbox" id={`filter-mobile-${type}-${item}`} value={item} checked={isChecked} onChange={() => handleToggle(item, selectedItems, setSelected)} disabled={isDisabled} />
                  <label htmlFor={`filter-mobile-${type}-${item}`}>
                    <span>{item}</span> <span className="item-count">{count}</span>
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className={`mobile-filter-drawer-overlay ${isOpen ? 'show' : ''}`} onClick={onClose}>
      <div className={`mobile-filter-drawer ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Filters</h5>
          <button className="btn-close" onClick={onClose}></button>
        </div>
        <div className="drawer-content">
          {renderFilterGroup("Category", categories, selectedCategories, setSelectedCategories, "category", filterCounts.categories)}
          {renderFilterGroup("Brand", brands, selectedBrands, setSelectedBrands, "brand", filterCounts.brands)}
          {renderFilterGroup("Surface", surfaces, selectedSurfaces, setSelectedSurfaces, "surface", filterCounts.surfaces)}
        </div>
        <div className="drawer-footer">
          <button className="btn btn-primary w-100 mb-2" onClick={onApplyFilters}>
            Apply Filters
          </button>
          <button className="btn btn-light w-100" onClick={onClearAll}>
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileFilterDrawer;