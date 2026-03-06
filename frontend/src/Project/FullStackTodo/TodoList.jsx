import React from "react";
import "./TodoList.css";

const TodoList = ({ todos, handleToggle, deleteHandler }) => {
  return (
    <ul className="todo-list">
      {todos.length > 0 ? (
        todos.map((todo) => {
          const { _id, title, completed } = todo;
          return (
            <li key={_id} className="todo-item">
              <input
                type="checkbox"
                checked={completed}
                onChange={() => handleToggle(_id)}
              />
              <h4 className={`${completed ? "completed" : ""}`}>{title}</h4>
              <button onClick={() => deleteHandler(_id)}>Delete</button>
            </li>
          );
        })
      ) : (
        <li className="empty-message">Please Add Todos</li>
      )}
    </ul>
  );
};

export default TodoList;
