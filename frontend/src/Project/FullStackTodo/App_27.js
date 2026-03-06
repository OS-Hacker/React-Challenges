import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import axios from "./../../../node_modules/axios/lib/axios";

const App_27 = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const baseUrl = "http://localhost:8080/todo";

  // get todos
  const handleGetTodo = async () => {
    try {
      const { data } = await axios.get(baseUrl);
      setTodos(data?.todos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetTodo();
  }, []);

  // create todo
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${baseUrl}/create`, { title: inputText });
      console.log("Data saved successfully:", res.data);
      setInputText("");

      // update localState
      setTodos((prev) => [...prev, res.data]); // add the new todo from response
    } catch (error) {
      console.log(error);
    }
  };

  // handleToggle
  const handleToggle = async (id) => {
    try {
      // to update localstate
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo._id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );

      // find todo that toggle
      const todoToUpdate = todos.find((todo) => todo._id === id);

      if (!todoToUpdate) {
        throw new Error(`Todo with id ${id} not found`);
      }

      const updatedTodo = {
        ...todoToUpdate,
        completed: !todoToUpdate.completed,
      };

      await axios.put(`${baseUrl}/edit/${id}`, updatedTodo);
    } catch (error) {
      console.error("Error toggling todo:", error);
    }
  };

  // delete todo
  const deleteHandler = async (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
    await axios.delete(`${baseUrl}/delete/${id}`);
  };

  return (
    <>
      <AddTodo
        inputText={inputText}
        setInputText={setInputText}
        handleSubmit={handleSubmit}
      />
      <TodoList
        todos={todos}
        handleToggle={handleToggle}
        deleteHandler={deleteHandler}
      />
    </>
  );
};

export default App_27;
