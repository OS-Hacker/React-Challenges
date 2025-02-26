import React from "react";
import useCounterHook from "../CustomHook/useCounterHook";

const CounterApp = () => {
  const [count, increment, decrement] = useCounterHook(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default CounterApp;
