import React, { useState } from "react";
import AddtTodo from "./AddtTodo";
import ListTodo from "./ListTodo";

const App_7 = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  // Add todo
  const handleAdd = (e) => {
    e.preventDefault();

    const Obj = {
      id: new Date().getTime(),
      title: inputText,
      completed: false,
    };

    if (inputText.trim() !== "") {
      setTodos((prevTodos) => {
        return [...prevTodos, Obj];
      });
    } else {
      alert("Add todo");
    }

    setInputText("");
  };

  // toggle
  const onToggle = (id) => {
    setTodos((prevTodo) => {
      return prevTodo.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });
    });
  };

  // delete todo
  const onDelete = (id) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <AddtTodo
        inputText={inputText}
        setInputText={setInputText}
        handleAdd={handleAdd}
      />
      <ListTodo todos={todos} onToggle={onToggle} onDelete={onDelete} />
    </>
  );
};

export default App_7;
