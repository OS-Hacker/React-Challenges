import React from "react";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskList from "./components/TaskList";

const App_26 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tasklist" element={<TaskList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App_26;

// 1. Create the Login Form
// Fields: Email and Password.

// Validation: Ensure email is in a valid format and password meets your criteria (e.g., minimum length).

// 2. Handling Form Submission
// Redirect: Upon successful login, redirect to the TaskList component.

// 3. TaskList Component
// Task Display: Show a list of tasks with their titles and status.

// Initial Status: Tasks are initially marked as "Pending".

// 4. Task Status Toggle
// Toggle Functionality: When a user clicks on a task's status, it toggles between "Pending" and "Completed".

// 5. AddList Component
// Task Addition: Add tasks to the TaskList using the AddList component.

// 6. Delete Task Functionality
// Task Deletion: Allow users to delete tasks from the TaskList.

// 7. Status Filter
// Filter Options: Provide filters for:

// All tasks

// Pending tasks

// Completed tasks
