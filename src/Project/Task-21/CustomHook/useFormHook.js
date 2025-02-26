import React, { useState } from "react";

const useFormHook = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData(initialValues);
  };

  return [formData, handleChange, handleSubmit];
};

export default useFormHook;
