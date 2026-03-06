import React, { useState } from "react";

const FormComp = ({ formData, handleChange, handleGender }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const result = Validation();

    console.log(result);

    if (Validation()) {
      console.log(formData);
      alert("Form successfully submitted");
    }
  };

  // validation
  const [error, setError] = useState({});

  const Validation = () => {
    
    const { name, age, email, password, conform_pass, gender } = formData;

    const storeErrors = {};

    // name
    if (!name.trim()) {
      storeErrors.name = "Name is required";
    } else if (name.length < 3) {
      storeErrors.name = "Name length should be greater than 3";
    } else if (!isNaN(name)) {
      storeErrors.name = "Enter a valid name";
    }

    // age
    if (!age.trim()) {
      storeErrors.age = "Age is required";
    } else if (age.length > 2) {
      storeErrors.age = "Age length should be less than two numerics";
    } else if (isNaN(age)) {
      storeErrors.age = "Enter a valid age";
    }

    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (!email.trim()) {
      storeErrors.email = "Email is required";
    } else if (!regex.test(email)) {
      storeErrors.email = "Enter a valid email";
    }

    const pass_regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // password
    if (!password.trim()) {
      storeErrors.password = "Password is required";
    } else if (password.length < 8) {
      storeErrors.password = "Password should be greater than 8 characters";
    } else if (!pass_regex.test(password)) {
      storeErrors.password =
        "Password should be minimum eight characters, at least one letter and one number";
    }

    // confirm password
    if (!conform_pass.trim()) {
      storeErrors.conform_pass = "Password is required";
    } else if (conform_pass !== password) {
      storeErrors.conform_pass = "Password and confirm password do not match";
    }

    // gender
    if (gender === "") {
      storeErrors.gender = "Gender is required";
    }

    setError(storeErrors);

    return Object.keys(storeErrors).length === 0;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
        />
        {error && <span>{error.name}</span>}
      </div>
      <br />
      <div>
        <input
          type="number"
          name="age"
          value={formData.age}
          placeholder="Age"
          onChange={handleChange}
        />
        {error && <span>{error.age}</span>}
      </div>
      <br />
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
        />
        {error && <span>{error.email}</span>}
      </div>
      <br />
      <div>
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
        />
        {error && <span>{error.password}</span>}
      </div>
      <br />
      <div>
        <input
          type="password"
          name="conform_pass"
          value={formData.conform_pass}
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        {error && <span>{error.conform_pass}</span>}
      </div>
      <br />
      <div>
        <input
          type="radio"
          name="gender"
          checked={formData.gender === "male"}
          onChange={handleGender}
          value="male"
        />
        <label>Male</label>
        <input
          type="radio"
          name="gender"
          checked={formData.gender === "female"}
          value="female"
          onChange={handleGender}
        />
        <label>Female</label>
      </div>
      {error && <span>{error.gender}</span>}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComp;
