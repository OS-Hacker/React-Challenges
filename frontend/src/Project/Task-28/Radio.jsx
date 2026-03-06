import React, { useState } from "react";

const Radio = ({ day, boy }) => {
  const [days, setDays] = useState("");
  const [boys, setBoys] = useState("");

  console.log("days", days);
  console.log("boys", boys);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
      }}
    >
      {day.map((item, i) => {
        return (
          <div key={i}>
            <input
              type="radio"
              name="day"
              value={item}
              onChange={(e) => setDays(e.target.value)}
            />
            <label htmlFor="">{item}</label>
          </div>
        );
      })}
      <h1>kalu</h1>
      {boy.map((item, i) => {
        return (
          <div key={i}>
            <input
              type="radio"
              name="boy"
              value={item}
              onChange={(e) => setBoys(e.target.value)}
            />
            <label htmlFor="">{item}</label>
          </div>
        );
      })}

      <h4>
        {days} and {boys}{" "}
      </h4>
    </div>
  );
};

export default Radio;
