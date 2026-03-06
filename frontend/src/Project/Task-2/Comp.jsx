import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80vh;
  }
  input {
    margin-bottom: 12px;
  }
  button {
    width: 150px;
  }
  .error {
    color: red;
  }
`;

const Comp = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [error, setError] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  // display register user
  const [user, setUser] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, age, email, password, confirm_password } = formData;

    const storeErrors = {}; // we store errors in keys and object format

    // Name
    if (!name.trim()) {
      storeErrors.name = "Name is required";
    } else if (name.length < 3) {
      storeErrors.name = "Name must be at least 3 characters";
    }

    // Age
    if (!age.trim()) {
      storeErrors.age = "Age is required";
    } else if (isNaN(age) || age.length > 2) {
      storeErrors.age = "Age must be a number and less than 2 characters";
    }

    // Email
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!email.trim()) {
      storeErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      storeErrors.email = "Please enter a valid email";
    }

    // Password
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    if (!password.trim()) {
      storeErrors.password = "Password is required";
    } else if (password.length < 8) {
      storeErrors.password = "Password length must be at least 8 characters";
    } else if (!passwordRegex.test(password)) {
      storeErrors.password =
        "Password must include numbers, one capital letter, and special characters";
    }

    // Confirm Password
    if (!confirm_password.trim()) {
      storeErrors.confirmPass = "Confirm Password is required";
    } else if (password !== confirm_password) {
      storeErrors.confirmPass = "Password and Confirm Password do not match!";
    }

    if (Object.keys(storeErrors).length === 0) {
      alert("Form submitted successfully");

      setUser((prevData) => {
        return [...prevData, formData];
      });

      // Handle form submission
      setFormData({
        name: "",
        age: "",
        email: "",
        password: "",
        confirm_password: "",
      });
    } else {
      setError(storeErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Remove error when field is corrected
    setError({ ...error, [name]: "" });
  };

  console.log(user);

  return (
    <Wrapper>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <br />
          <input
            placeholder="Enter Name"
            onChange={handleChange}
            value={formData.name}
            name="name"
          />
          {error.name && <span className="error">{error.name}</span>}
          <br />
          <label>Age</label>
          <br />
          <input
            placeholder="Enter Age"
            onChange={handleChange}
            value={formData.age}
            name="age"
          />
          {error.age && <span className="error">{error.age}</span>}
          <br />
          <label>Email</label>
          <br />
          <input
            placeholder="Enter Email"
            onChange={handleChange}
            value={formData.email}
            name="email"
          />
          {error.email && <span className="error">{error.email}</span>}
          <br />
          <label>Password</label>
          <br />
          <input
            placeholder="Enter Password"
            onChange={handleChange}
            value={formData.password}
            name="password"
          />
          {error.password && <span className="error">{error.password}</span>}
          <br />
          <label>Confirm Password</label>
          <br />
          <input
            placeholder="Enter Confirm Password"
            onChange={handleChange}
            value={formData.confirm_password}
            name="confirm_password"
          />
          {error.confirmPass && (
            <span className="error">{error.confirmPass}</span>
          )}
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>

      {user?.map((ele) => {
        const { name, age } = ele;
        return (
          <>
            <h1>{name}</h1>
            <h1>{age}</h1>
          </>
        );
      })}
    </Wrapper>
  );
};

export default Comp;
