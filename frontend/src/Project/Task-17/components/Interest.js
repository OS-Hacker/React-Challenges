import React from "react";
import styled from "styled-components";

const Layout = ({ formData, setFormData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevForm) => {
      return {
        ...prevForm,
        interest: checked
          ? [...prevForm.interest, name]
          : prevForm.interest.filter((tag) => tag !== name),
      };
    });
  };

  console.log(formData)

  const tags = ["HTML", "CSS", "JS", "NODE"];

  return (
    <Wrapper>
      <div className="container">
        <h2>TO DO APP</h2>
        <form onSubmit={handleSubmit}>
          <div className="">
            <input
              type="text"
              name="text"
              className="inputText"
              placeholder="add todo..."
              value={formData.text}
              onChange={handleChange}
            />

            <button type="submit" className="btn">
              ADD
            </button>

            <select
              name="status"
              id="select"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="" hidden>
                Status
              </option>
              <option value="Pending">Pending</option>
              <option value="Done">Done</option>
              <option value="Upcoming">Upcoming</option>
            </select>

            <div className="tags-container">
              {tags.map((tag, i) => {
                return (
                  <div>
                    <label htmlFor="html">{tag}</label>
                    <input
                      type="checkbox"
                      id="html"
                      name={tag}
                      onChange={handleCheckboxChange}
                      checked={formData.interest.includes(tag)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.section`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 60vh;
  }

  .inputText {
    margin: 20px 0px;
    width: 300px;
    height: 6vh;
    border-radius: 20px;
    background-color: white;
    font-size: 20px;
    padding-left: 10px;
  }

  #select {
    width: 80px;
    height: 5vh;
    margin-left: 4px;
    border-radius: 10px;
    font-size: 15px;
  }

  .btn {
    width: 150px;
    height: 5vh;
    border-radius: 10px;
    cursor: pointer;
  }

  .tags-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }

  .tag {
    border: 2px solid black;
    padding: 8px;
    margin: 5px 0px;
    border-radius: 5px;
  }
`;
