import React from "react";

const AddTodo = ({ inputText, setInputText,handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
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

export default AddTodo;
