import React, { useState } from "react";
import FormComp from "./components/FormComp";

const App_24 = () => {

  
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    conform_pass: "",
    gender: "",
  });

  // fields
  const handleChange = (e) => {
    setFormData((prev) => {
      const { name, value } = e.target;
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // gender
  const handleGender = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        gender: e.target.value,
      };
    });
  };

  return (
    <>
      <FormComp
        formData={formData}
        handleChange={handleChange}
        handleGender={handleGender}
      />
    </>
  );
};

export default App_24;
