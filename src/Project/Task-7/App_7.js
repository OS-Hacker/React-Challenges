import React, { useState } from "react";
import AddtTodo from "./AddtTodo";
import Layout from "./Layout";

const App_7 = () => {
  const [inputText, setInputText] = useState("");

  const [todos, setTodos] = useState([]);

  
  return (
    <>
      <Layout
        inputText={inputText}
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
      
      />
      <AddtTodo todos={todos} setTodos={setTodos}  />
    </>
  );
};

export default App_7;
