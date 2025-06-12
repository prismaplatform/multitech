import React, { useState } from 'react';


// A modern ikon a lenyíló nyílhoz
const ChevronIcon = ({ isExpanded }: { isExpanded: boolean }) => (
  <svg
    stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `rotate(${isExpanded ? '180deg' : '0deg'})`, transition: 'transform 0.2s ease-in-out' }}
  >
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
  </svg>
);

interface ProductFilterProps {
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
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  categories, brands, surfaces,
  selectedCategories, setSelectedCategories,
  selectedBrands, setSelectedBrands,
  selectedSurfaces, setSelectedSurfaces,
  filterCounts,
}) => {
  const [isCollapsed, setIsCollapsed] = useState({ category: false, brand: true, surface: true });
  const [isExpanded, setIsExpanded] = useState({ category: false, brand: false, surface: false });

  const toggleCollapse = (type: keyof typeof isCollapsed) => setIsCollapsed((prev) => ({ ...prev, [type]: !prev[type] }));
  const toggleExpanded = (type: keyof typeof isExpanded) => setIsExpanded((prev) => ({ ...prev, [type]: !prev[type] }));
  const handleToggle = (value: string, selected: string[], setSelected: React.Dispatch<React.SetStateAction<string[]>>) => {
    setSelected((prev) => prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]);
  };

  const renderFilterGroup = (
    title: string, items: string[], selectedItems: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>,
    type: keyof typeof isCollapsed, counts: Record<string, number>
  ) => {
    const visibleItems = isExpanded[type] ? items : items.slice(0, 5);
    const hasMoreItems = items.length > 5;
    const isGroupCollapsed = isCollapsed[type];

    return (
      <div className="filter-section">
                    <h5>{title}</h5>


              {visibleItems.map((item) => {
                const count = counts[item] || 0;
                const isChecked = selectedItems.includes(item);
                const isDisabled = count === 0 && !isChecked;

                return (
                  <div key={item} className={`form-check ${isDisabled ? 'disabled' : ''}`}>
                    <input className="form-check-input" type="checkbox" id={`filter-desktop-${type}-${item}`} value={item} checked={isChecked} onChange={() => handleToggle(item, selectedItems, setSelected)} disabled={isDisabled} />
                    <label className="form-check-label" htmlFor={`filter-desktop-${type}-${item}`}>
                      <span>{item}</span><small className="text-muted ms-2">({count})</small>
                    </label>
                  </div>
                );
              })}

            {hasMoreItems && (
              <button className="form-check-label mt-2" onClick={(e) => { e.stopPropagation(); toggleExpanded(type); }}>
                {isExpanded[type] ? 'Show Less' : `Show More (${items.length - 5})`}
              </button>
            )}
          </div>
                   
                   

      

    );
  };

  return (
    <div>
      {/* <h4 className="mb-3">Filters</h4> */}
      {renderFilterGroup("Category", categories, selectedCategories, setSelectedCategories, "category", filterCounts.categories)}
      {renderFilterGroup("Brand", brands, selectedBrands, setSelectedBrands, "brand", filterCounts.brands)}
      {renderFilterGroup("Surface", surfaces, selectedSurfaces, setSelectedSurfaces, "surface", filterCounts.surfaces)}
    </div>
  );
};

export default ProductFilter;