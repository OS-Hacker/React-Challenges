import React from "react";

const Interest = ({ formData, setFormData, errors }) => {
  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        interest: e.target.checked
          ? [...prev.interest, e.target.name]
          : prev.interest.filter((ele) => ele !== e.target.name),
      };
    });
  };

  console.log(formData);

  return (
    <>
      <div>
        <input
          type="checkbox"
          name="codding"
          checked={formData.interest.includes("codding")}
          onChange={handleChange}
        />
        <label>coding</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="watching movies"
          checked={formData.interest.includes("watching movies")}
          onChange={handleChange}
        />
        <label>watching movies</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="playing cricket"
          checked={formData.interest.includes("playing cricket")}
          onChange={handleChange}
        />
        <label>playing cricket</label>
      </div>
      {errors.interest && <span>{errors.interest}</span>}
    </>
  );
};

export default Interest;
