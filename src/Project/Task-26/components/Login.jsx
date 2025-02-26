import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });

    // when i type inpute then error is remove
    setError((prevError) => {
      return {
        ...prevError,
        [name]: "",
      };
    });
  };

  const [error, setError] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
   if(validation()){
     try {
       const response = await fetch("https://reqres.in/api/login", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(formData),
       });

       if (response.ok) {
         navigate("/tasklist");
       }
     } catch (error) {
       console.log(error);
     }
   }
  };

  // validation

  const validation = () => {
    const storeErrors = {};

    const { email, password } = formData;

    if (!email.trim()) {
      storeErrors.email = "Email is required";
    }
    if (!password.trim()) {
      storeErrors.password = "Password is required";
    } else if (password.length < 8) {
      storeErrors.password = "Password length should be grether then 8";
    }

    setError(storeErrors);

    return Object.keys(storeErrors).length === 0;
  };

  //

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="">Emial</label>
          <input
            type="text"
            value={formData.email}
            name="email"
            onChange={handleChange}
          />
          {error?.email && <span style={{ color: "red" }}>{error.email}</span>}
        </div>
        <div className="">
          <label htmlFor="">Password</label>
          <input
            type="text"
            value={formData.password}
            name="password"
            onChange={handleChange}
          />
          {error?.password && (
            <span style={{ color: "red" }}>{error.password}</span>
          )}
        </div>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Login;
