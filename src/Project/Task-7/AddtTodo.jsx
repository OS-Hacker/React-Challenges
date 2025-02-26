import React, { useState } from "react";
import styled from "styled-components";

const AddTodo = ({ todos, setTodos }) => {
  const deleteHandler = (id) => {
    const removeTodo = todos.filter((todo) => todo.id !== id);
    setTodos(removeTodo);
  };

  const [selectedId, setSelectedId] = useState("");
  const [editingText, setEditingText] = useState("");

  const editHandler = (id, text) => {
    setSelectedId(id);
    setEditingText(text);
  };

  const handleDone = (id) => {
    setTodos(
      todos.map((ele) => (ele.id === id ? { ...ele, text: editingText } : ele))
    );
    setSelectedId(null);
    setEditingText("");
  };

  return (
    <Wrapper>
      {todos.length <= 0 ? (
        <h3 style={{ margin: "10px" }}>PLEASE CREATE THE TASK☹️</h3>
      ) : (
        <>
          {todos?.map((item) => {
            const { id, text } = item;

            return (
              <div className="main" key={id}>
                <h3 className="text">
                  {selectedId === id ? (
                    <input
                      type="text"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      autoFocus
                    />
                  ) : (
                    text
                  )}
                </h3>
                {selectedId === id ? (
                  <button onClick={() => handleDone(id)}>Done</button>
                ) : (
                  <button onClick={() => editHandler(id, text)}>Edit</button>
                )}
                <button onClick={() => deleteHandler(id)}>Delete</button>
              </div>
            );
          })}
        </>
      )}
    </Wrapper>
  );
};

export default AddTodo;

const Wrapper = styled.section`
  .main {
    margin: 20px;
  }

  .text {
    display: inline;
    margin: 20px;
  }
`;
