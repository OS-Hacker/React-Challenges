import React from "react";

const Settings = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        settings: e.target.name,
      };
    });
  };

  console.log(formData)

  

  return (
    <>
      <div>
        <input
          type="radio"
          name="dark"
          checked={formData.settings === "dark"}
          onChange={handleChange}
        />
        <label>Dark</label>
      </div>
      <div>
        <input
          type="radio"
          name="light"
          checked={formData.settings === "light"}
          onChange={handleChange}
        />
        <label>Light</label>
      </div>
    </>
  );
};

export default Settings;
