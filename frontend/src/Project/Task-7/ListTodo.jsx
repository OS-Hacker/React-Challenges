import React from "react";
import "./ListTodo.css";

const ListTodo = ({ todos, onToggle, onDelete }) => {
  return (
    <div className="todo-list">
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <div className="todo-content">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => onToggle(todo.id)}
                  className="todo-checkbox"
                />
                <span
                  // className="todo-text"
                  className={`todo-item ${todo.completed ? "completed" : ""}`}
                >
                  {todo.title}
                </span>
                <button
                  onClick={() => onDelete(todo.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-message">No todos found. Please add a new todo!</p>
      )}
    </div>
  );
};

export default ListTodo;
