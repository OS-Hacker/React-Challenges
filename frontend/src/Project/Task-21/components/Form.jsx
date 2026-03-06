import React from "react";
import useFormHook from "../CustomHook/useFormHook";

const Form = () => {
  const [formData, handleChange, handleSubmit] = useFormHook({
    name: "",
    age: "",
    email: "",
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name : </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div>
          <label>Age : </label>
          <input
            type="text"
            name="age"
            onChange={handleChange}
            value={formData.age}
          />
        </div>
        <div>
          <label>Email : </label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
