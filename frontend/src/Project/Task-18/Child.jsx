import React from "react";

const Child = ({color,setColor}) => {
  return (
    <>
      <input
        type="text"
        name="name"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </>
  );
};

export default Child;
