import React, { useState } from "react";
import Tabs from "./Tabs";
import styled from "styled-components";

const TabForm = () => {
  const [isActive, setIsActive] = useState(0);

  const ActiveTab = Tabs[isActive].component;

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    interest: [],
    settings: "dark",
  });

  const [errors, setErrors] = useState({});

  const handleNext = () => {
    if (isActive === 0 && profileValidation()) {
      // Only proceed to the next step if the profile is valid in the first tab
      setIsActive((prev) => prev + 1);
    }

    if (isActive === 1) {
      if (interestValidation()) {
        setIsActive((prev) => prev + 1);
      }
    }
  };

  const handlePrev = () => {
    setIsActive((prev) => prev - 1);
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData); 
    alert(JSON.stringify(formData));
  };

  const profileValidation = () => {
    const storeErrors = {};
    const { name, age, email } = formData;

    if (!name.trim()) {
      storeErrors.name = "Name field is required";
    } else if (name.length < 3) {
      storeErrors.name = "Name must be greater than 3 characters";
    }

    if (!age.trim()) {
      storeErrors.age = "Age field is required";
    } else if (isNaN(age)) {
      storeErrors.age = "Enter a valid age";
    } else if (age < 18) {
      storeErrors.age = "Age must be greater than 18";
    }

    if (!email.trim()) {
      storeErrors.email = "Email field is required";
    } else if (email.length < 3) {
      storeErrors.email = "Email must be greater than 3 characters";
    }

    setErrors(storeErrors);
    return Object.keys(storeErrors).length === 0;
  };

  const interestValidation = () => {
    const { interest } = formData;
    const newStoreErrors = {};

    if (interest.length < 1) {
      newStoreErrors.interest = "Please select at least one interest";
    }
    setErrors(newStoreErrors);
    return Object.keys(newStoreErrors).length === 0;
  };

  return (
    <Wrapper>
      <div className="heading_container">
        {Tabs?.map((tab, idx) => (
          <div key={idx}>
            <h4 onClick={() => setIsActive(idx)} className="tabs">
              {tab.name}
            </h4>
          </div>
        ))}
      </div>
      <div className="tab_body">
        <ActiveTab
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />

        <div className="btn_container">
          {isActive > 0 && <button onClick={handlePrev}>Prev</button>}

          {isActive < Tabs.length - 1 && (
            <button onClick={handleNext}>Next</button>
          )}
          
          {isActive === Tabs.length - 1 && (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default TabForm;

const Wrapper = styled.section`
  .heading_container {
    display: flex;
    margin-top: 10px;
  }

  .tabs {
    border: 2px solid black;
    padding: 8px;
    cursor: pointer;
  }

  .tab_body {
    border: 2px solid black;
    height: 30vh;
    padding: 8px;
  }

  .btn_container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;
