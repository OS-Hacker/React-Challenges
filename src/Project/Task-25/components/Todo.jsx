import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  updateTodo,
} from "../redux-toolkit/Slice2/TodoSlice";

const Todo = () => {
  const [inputText, setInputText] = useState("");

  const dispatch = useDispatch();

  // add todo
  const handleAddtodo = () => {
    dispatch(addTodo(inputText));
    setInputText("");
  };

  // show todos
  const { todos } = useSelector((state) => state?.todo);

  // update todo
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(null);
  const [editText, setEditText] = useState(null);

  const handleUpdate = (todo) => {
    setIsEdit(true);
    setId(todo.id);
    setEditText(todo.text);
  };

  const handleEditTodo = (id) => {
    dispatch(updateTodo({ id, editText }));
    setIsEdit(false);
    setEditText("");
    setId(null);
  };

  return (
    <>
      <h2>To Do List</h2>
      <input
        type="text"
        value={isEdit ? editText : inputText}
        name="name"
        placeholder="add todo"
        onChange={(e) =>
          isEdit ? setEditText(e.target.value) : setInputText(e.target.value)
        }
      />
      <button onClick={() => (isEdit ? handleEditTodo(id) : handleAddtodo())}>
        {isEdit ? "Edit todo" : "Add todo"}
      </button>

      <div>
        {todos?.map((todo) => {
          const { id, text } = todo;
          return (
            <ul key={id}>
              <span>{text}</span>
              <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
              <button onClick={() => handleUpdate(todo)}>Update</button>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default Todo;
