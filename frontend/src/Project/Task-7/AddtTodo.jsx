import React from "react";

const AddtTodo = ({ inputText, setInputText, handleAdd }) => {
  return (
    <>
      <form action="" onSubmit={handleAdd}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddtTodo;
