import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import DataTable from "./DataTable";
import Pagination from "./Pagination";

const ShowData = () => {
  const URL = "https://jsonplaceholder.typicode.com/todos";

  const [showData, setShowData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setShowData(data);
        setSearchData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filterData = showData.filter((ele) =>
      ele.title.toLowerCase().includes(inputText.toLowerCase())
    );
    setSearchData(filterData);
    setCurrentPage(1); // Reset to the first page on search
  }, [inputText, showData]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(searchData.length / itemsPerPage);

  // Get firstIndex and lastIndex
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const currentItems = searchData.slice(firstIndex, lastIndex);

  const handlePrev = () => {
    if (currentPage === currentPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Edit
  const [selectedId, setSelectedId] = useState("");
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleEdit = ({ id, title, completed }) => {
    setSelectedId(id);
    setTitle(title);
    setCompleted(completed);
  };

  // Update
  const handleUpdate = (id) => {
    const updatedShowData = showData.map((ele) => {
      if (ele.id === id) {
        return { ...ele, title: title, completed: completed };
      }
      return ele;
    });

    setShowData(updatedShowData);
    setSelectedId(null);
    setTitle("");
    setCompleted(false);
  };

  return (
    <Wrapper>
      <div className="container">
        <SearchInput inputText={inputText} setInputText={setInputText} />
        <DataTable
          searchData={currentItems}
          handleEdit={handleEdit}
          selectedId={selectedId}
          value={title}
          completed={completed}
          setTitle={setTitle}
          setCompleted={setCompleted}
          handleUpdate={handleUpdate}
        />
        <Pagination
          handlePrev={handlePrev}
          handleNext={handleNext}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </Wrapper>
  );
};

export default ShowData;

const Wrapper = styled.section`
  .container {
    margin: 5%;
  }
  table {
    width: 800px;
    margin: auto;
    border-collapse: collapse;
  }
  th,
  td {
    padding: 12px;
    border: 2px solid #dddddd;
  }
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  .pagination button {
    margin: 0 10px;
    padding: 10px;
    cursor: pointer;
  }
  .pagination span {
    margin: 0 10px;
  }
  .notFound {
    text-align: center;
    margin: 20px 0;
  }
  button {
    padding: 3px 8px;
    cursor: pointer;
  }
`;
