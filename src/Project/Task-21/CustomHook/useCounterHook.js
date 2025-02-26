import React, { useState } from "react";

const useCounterHook = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 0));
  };

  return [count, increment, decrement];
};

export default useCounterHook;
