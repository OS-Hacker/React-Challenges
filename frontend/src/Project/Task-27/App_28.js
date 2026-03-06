import React, { useState } from "react";

const App_28 = () => {
  const [selectSkill, SetSelectSkill] = useState([]);

  const handleCheck = (e) => {
    if (e.target.checked) {
      SetSelectSkill((prevSkill) => [...prevSkill, e.target.value]);
    } else {
      SetSelectSkill((prevSkill) =>
        prevSkill.filter((item) => item !== e.target.value)
      );
    }
  };

  const skills = ["HTML", "CSS", "JS", "REACT", "NODE"];

  console.log(selectSkill)

  return (
    <>
      <h4>{selectSkill}</h4>
      <br />
      {skills.map((item, i) => {
        return (
          <form key={i}>
            <input
              type="checkbox"
              id={item}
              value={item}
              checked={selectSkill.includes(item)}
              onChange={handleCheck}
            />
            <label htmlFor={item}> {item}</label>
          </form>
        );
      })}
    </>
  );
};

export default App_28;
