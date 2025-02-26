import React from "react";
import styled from "styled-components";

const Expense = ({
  amount,
  text,
  setText,
  setAmount,
  handleEnter,
  editMode,
  editText,
  editAmount,
  handleUpdate,
  setEditText,
  setEditAmount,
}) => {
  return (
    <Wrapper>
      <div className="container">
        <input
          type="text"
          placeholder="Enter text"
          value={editMode ? editText : text}
          onChange={(e) => editMode ? setEditText(e.target.value) : setText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter amount"
          value={editMode ? editAmount : amount}
          onChange={(e) => editMode ? setEditAmount(e.target.value) : setAmount(e.target.value)}
        />

        <button onClick={editMode ? handleUpdate : handleEnter}>
          {editMode ? "Update" : "Enter"}
        </button>
      </div>
    </Wrapper>
  );
};

export default Expense;

const Wrapper = styled.section`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }
`;
