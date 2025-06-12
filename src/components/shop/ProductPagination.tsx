// components/shop/ProductPagination.tsx
import React from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react"; // Ezeket telepítened kell, ha még nem tetted: npm install lucide-react

interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const ProductPagination: React.FC<ProductPaginationProps> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  return (
    <div className="col-12 d-flex justify-content-center align-items-center gap-2 mt-4">
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
};

export default ProductPagination;