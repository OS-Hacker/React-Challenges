import React, { createContext, useContext, useState } from "react";

const context = createContext();

const CountContext = ({ children }) => {
  const initalCount = () => {
    return localStorage.getItem("count")
      ? JSON.parse(localStorage.getItem("count"))
      : 0;
  };

  const [count, setCount] = useState(initalCount);

  const incressCount = () => {
    setCount((state) => {
      const storeCount = state + 1;
      localStorage.setItem("count", JSON.stringify(storeCount));
      return storeCount;
    });
  };

  const decressCount = () => {
    setCount((state) => {
      const storeCount2 = state > 0 ? state - 1 : state;
      localStorage.setItem("count", JSON.stringify(storeCount2));
      return storeCount2;
    });
  };

  return (
    <context.Provider value={[count, incressCount, decressCount]}>
      {children}
    </context.Provider>
  );
};  

export default CountContext;

export const HandleCount = () => useContext(context);
