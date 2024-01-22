import React, { useState } from "react";
import doublePrevArrow from "../assets/doublePrevArrow.svg";
import doubleNextArrow from "../assets/doubleNextArrow.svg";
import prevArrow from "../assets/prevArrow.svg";
import nextArrow from "../assets/nextArrow.svg";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (newPage: number) => void;
  onItemsPerPageChange: (newItem: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const handlePageChange = (newPage: number) => {
    onPageChange(newPage);
  };

  const handlePageClick = (page: number) => {
    handlePageChange(page);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handleItemsPerPageChange = (e: { target: { value: string } }) => {
    const newItemsPerPage = parseInt(e.target.value);
    setItemsPerPage(newItemsPerPage);
    onItemsPerPageChange(newItemsPerPage);
    handlePageChange(1);
  };

  return (
    <div className="flex items-center justify-center w-60">
      <img
        src={doublePrevArrow}
        alt="맨앞으로"
        onClick={() => handlePageClick(1)}
        className="cursor-pointer"
      />
      <img
        src={prevArrow}
        alt="한칸앞으로"
        onClick={handlePrevClick}
        className="cursor-pointer"
      />
      <p className="w-7 text-center">페이지</p>
      <input
        type="text"
        placeholder={String(currentPage)}
        onChange={(e) => handlePageChange(parseInt(e.target.value))}
        className="w-3 h-1.5"
      />
      <p>/{totalPages}</p>
      <img
        src={nextArrow}
        alt="한칸뒤로"
        onClick={handleNextClick}
        className="cursor-pointer"
      />
      <img
        src={doubleNextArrow}
        alt="맨뒤로"
        onClick={() => handlePageClick(totalPages)}
        className="cursor-pointer"
      />
      <select
        value={itemsPerPage}
        onChange={handleItemsPerPageChange}
        className="mx-2"
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
      </select>
    </div>
  );
};

export default Pagination;
