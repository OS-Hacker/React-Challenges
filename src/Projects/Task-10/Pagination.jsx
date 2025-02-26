import React from "react";

const Pagination = ({ handlePrev, handleNext ,currentPage,totalPages}) => {
  return (
    <>
      <div className="pagination">
        <button onClick={handlePrev}>Prev</button>
          <span>{currentPage} of {totalPages}</span>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
};

export default Pagination;
