import React from "react";
import { HandleCount } from "./context/CountContext";

const Counter = () => {
  const [count, incressCount, decressCount] = HandleCount();

  return (
    <>
      <div className="container">
        <h1>{count}</h1>
        <button onClick={incressCount}>Incress</button>
        <button onClick={decressCount}>Decress</button>
      </div>
    </>
  );
};

export default Counter;
