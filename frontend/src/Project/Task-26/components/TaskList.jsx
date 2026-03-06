import React, { useState } from "react";
import styled from "styled-components";
import AddTask from "./AddTask";

const TaskList = () => {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [currentStatus, setCurrentStatus] = useState("All");

  // Add a new task
  const handleAddTask = () => {
    if (inputText.trim() === "") return; // Prevent adding empty tasks

    const newTask = {
      title: inputText,
      status: "pending", // Corrected typo from "padding" to "pending"
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setInputText(""); // Clear input after adding
  };

  // Toggle task status between "pending" and "completed"
  const handleToggleStatus = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index
          ? {
              ...task,
              status: task.status === "pending" ? "completed" : "pending", // Corrected typo
            }
          : task
      )
    );
  };

  // Delete a task
  const handleDeleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  // Filter tasks based on status
  const handleFilterChange = (e) => {
    setCurrentStatus(e.target.value);
  };

  const filteredTasks = tasks.filter(
    (task) =>
      currentStatus === "All" ||
      task.status.toLowerCase() === currentStatus.toLowerCase()
  );

  console.log(currentStatus);

  return (
    <Wrapper>
      {/* add task search bar */}
      <AddTask
        setInputText={setInputText}
        inputText={inputText}
        handleAdd={handleAddTask}
      />

      {/* add select to filter the status */}
      <select onChange={handleFilterChange} value={currentStatus}>
        <option value="" hidden>
          Filter
        </option>
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>

      {/* display task in table formate */}
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task, index) => (
              <tr key={index}>
                <td>{task.title}</td>
                <td onClick={() => handleToggleStatus(index)}>{task.status}</td>
                <td onClick={() => handleDeleteTask(index)}>❌</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No tasks found</td>
            </tr>
          )}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default TaskList;

const Wrapper = styled.section`
  table,
  th,
  td {
    border: 2px solid black;
    border-collapse: collapse;
    padding: 5px;
    text-align: center;
  }
`;
