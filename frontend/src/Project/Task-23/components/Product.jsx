import React, { useContext, useState, useEffect } from "react";
import { context } from "../context/ProductContext";
import styled from "styled-components";

const Product = () => {
  const { loading, data } = useContext(context);
  const [filteredData, setFilteredData] = useState([]);
  const [inputText, setInputText] = useState("");

  const buttonLabels = [
    "All",
    "Men's clothing",
    "Women's clothing",
    "Jewelery",
    "Electronics",
  ];

  // filter product by category
  const filterProduct = (category) => {
    setFilteredData(
      category === "All"
        ? data
        : data.filter((product) => product.category === category.toLowerCase())
    );
  };

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  // filter product by search
  const searchProduct = () => {
    setFilteredData(
      data.filter(
        (product) =>
          product.title.toLowerCase().includes(inputText.toLowerCase()) ||
          product.description.toLowerCase().includes(inputText.toLowerCase())
      )
    );
  };

  useEffect(() => {
    searchProduct();
  }, [inputText, data]);

  return (
    <Wrapper>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <div className="main">
            {buttonLabels?.map((label) => (
              <button key={label} onClick={() => filterProduct(label)}>
                {label}
              </button>
            ))}
          </div>
          <div className="container">
            <div className="search">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Search products..."
              />
            </div>
            {filteredData.length ? (
              filteredData.map((product) => {
                const { id, category, description, image, title } = product;
                return (
                  <div className="product" key={id}>
                    <img src={image} alt={title} className="img" />
                    <p>{category}</p>
                    <h4>{title.substring(0, 20)}...</h4>
                    <p>{description.substring(0, 20)}...</p>
                  </div>
                );
              })
            ) : (
              <p>No products found</p>
            )}
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default Product;

const Wrapper = styled.section`
  .container {
    display: grid;
    grid-template-columns: repeat(3, 300px);
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    text-align: center;
    margin-top: 20px;
  }

  .product {
    border: 2px solid black;
    padding: 10px;
  }

  .img {
    width: 100px;
    height: 100px;
  }

  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 20vh;
  }

  button {
    padding: 10px;
    cursor: pointer;
  }

  input {
    padding: 10px;
    margin-top: 20px;
    width: 300px;
  }
`;
