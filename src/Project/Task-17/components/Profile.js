import React from "react";

const Profile = ({ formData, setFormData, errors, setErrors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });

    // clear Errors
    setErrors((prev) => {
      return {
        ...prev,
        [name]: "",
      };
    });
    
  };

  return (
    <>
      <form>
        <div>
          <label>Name : </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Age : </label>
          <input
            type="number" 
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <span>{errors.age}</span>}
        </div>
        <div>
          <label>Email : </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
      </form>
    </>
  );
};

export default Profile;
