import React, { useState } from "react";
import styled from "styled-components";

const History = ({ data, setData, handleEdit }) => {
  // delete
  const handleDelete = (id) => {
    setData(data.filter((ele) => ele.id !== id));
  };

  return (
    <Wrapper>
      <div className="container">
        {data.length > 0 ? (
          <>
            {data?.map((item) => {
              const { id, text, amount } = item;
              return (
                <div
                  className={`card_container ${
                    amount < 0 ? "expense" : "income"
                  }`}
                  key={id}
                >
                  <div
                    className={amount < 0 ? "white" : "red"}
                    onClick={() => handleDelete(id)}
                  >
                    ❌
                  </div>
                  <div
                    className={amount < 0 ? "white" : "red"}
                    onClick={() => handleEdit(id, text, amount)}
                  >
                    📝
                  </div>
                  <div>{text}</div>
                  <div>{amount}</div>
                </div>
              );
            })}
          </>
        ) : (
          <h4>Please Add Expense</h4>
        )}
      </div>
    </Wrapper>
  );
};

export default History;

const Wrapper = styled.section`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
  }

  .card_container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 2px solid black;
    width: 200px;
    color: white;
  }

  .expense {
    background-color: red;
  }
  .income {
    background-color: #33ee75;
  }

  .white {
    background-color: white;
    cursor: pointer;
  }

  .red {
    background-color: white;
    cursor: pointer;
  }
`;
