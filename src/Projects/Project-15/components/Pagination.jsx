import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Pagination = ({
  subContainerStyle,
  totalPages,
  setCurrentPage,
  currentPage,
}) => {
  return (
    <Wrapper>
      <div style={subContainerStyle}>
        <button
          onClick={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, idx) => {
          return (
            <button
              onClick={() => setCurrentPage(idx + 1)}
              className={currentPage === idx + 1 ? "Active" : "unActive"}
            >
              {idx + 1}
            </button>
          );
        })}
        <button
          onClick={() =>
            setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
          }
        >
          Next
        </button>
      </div>
    </Wrapper>
  );
};

export default Pagination;

const Wrapper = styled.section`
  .Active {
    padding: 5px 10px;
    background-color: #6a63f1;
    color: white;
  }
  .unActive {
    padding: 5px 10px;
  }
`;
