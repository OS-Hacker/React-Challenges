import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeTransaction } from "./redux-toolkit/TransectionSlice";

const History = ({ transactions }) => {
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(removeTransaction(index));
  };

  return (
    <Wrapper>
      <div className="history">
        <h3 className="heading">History</h3>
        <ul>
          {transactions?.map((transaction, index) => (
            <div key={index} className="dx">
              <li className={transaction.amount > 0 ? "plus" : "mins"}>
                <span>{transaction.title}</span>
                <span>₹{Math.abs(transaction.amount)?.toFixed(2)}</span>
              </li>
              <span className="delete-btn" onClick={() => handleDelete(index)}>
                X
              </span>
            </div>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .dx {
    display: flex;
    gap: 3px;
  }
  .delete-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: rgb(247, 122, 122);
    border: 0;
    color: white;
    font-size: 14px;
    width: 30px;
    height: 25px;
    position: relative;
    top: 10px;
    transition: opacity 0.3s ease;
    border-radius: 4px;
  }

  .delete-btn:hover {
    background-color: rgb(242, 63, 63);
  }


`;

export default History;
