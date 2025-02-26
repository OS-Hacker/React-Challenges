import React from "react";

const Layout = ({ inputText, setInputText, setTodos, todos }) => {
  const obj = {
    id: new Date().getTime(),
    text: inputText,
  };

  const addHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, obj]);
    setInputText("");
  };

  return (
    <>
      <form style={{ margin: "10px" }}>
        <input
          type="text"
          name=""
          id=""
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <button onClick={addHandler}>Add Task</button>
      </form>
    </>
  );
};

export default Layout;
