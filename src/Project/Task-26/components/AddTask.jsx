import React from "react";

const AddTask = ({ inputText, setInputText, handleAdd }) => {
  return (
    <>
      <input
        type="text"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
};

export default AddTask;
