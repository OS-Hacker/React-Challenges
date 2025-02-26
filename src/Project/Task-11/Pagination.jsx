import React, { useEffect, useState } from "react";

const Pagination = () => {
  const URL = "https://jsonplaceholder.typicode.com/users";

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // pagination
  // first make state currentPage and setCurrentPage initial page is 1
  // second create variable itemsPerPage (how many items you want per Page)
  // third get totalPages like data.length / currentPage but i want single value that for i use
  // Math.ceil(data.length / currentPage); it give totalPages
  // created method like handlePrev that under write a condition if currentPage > 0 then
  // setCurrentPage(currentPage - 1)
  // second method like handleNext then under write condition if currentPage < totalPages then
  // setCurrentPage(currentPage + 1)
  // now find lastIndex like currentPage * itemsPerPage
  // now find firstIndex like lastIndex - itemsPerPage
  // finally get currentItems using slice method - slice method return selected element in array
  // it not change origina array it return new array , it take two parameter one is startIndex or
  // endIndex and andIndex is not included it.
  // slice(firstIndex , lastIndex)

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const lastIndex = currentItems * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const currentItems = data.slice(firstIndex, lastIndex);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
      {currentItems.length > 0 ? (
        <>
          {currentItems?.map((ele) => {
            const { id, name } = ele;
            return (
              <div key={id}>
                <h3>{name}</h3>
              </div>
            );
          })}
          <div>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </>
      ) : (
        <h1>Date Not Found!</h1>
      )}
    </>
  );
};

export default Pagination;
