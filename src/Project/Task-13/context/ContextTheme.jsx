import React, { createContext, useContext, useState } from "react";

const context = createContext();

const ContextTheme = ({ children }) => {
  const initialTheme = () => {
    return JSON.parse(localStorage.getItem("darkTheme"))
      ? JSON.parse(localStorage.getItem("darkTheme"))
      : false;
  };

  const [toggle, setToggle] = useState(initialTheme);

  const toggleTheme = () => {
    setToggle((ele) => {
      const theme = !ele;
      localStorage.setItem("darkTheme", JSON.stringify(theme));
      return theme;
    });
  };

  return (
    <context.Provider value={[toggle, toggleTheme]}>
      {children}
    </context.Provider>
  );
};

export default ContextTheme;

// custum function
export const useTheme = () => useContext(context);

// context api :

// first create function like myContext that parameter under take - children
// second createContext method like - const context = createContext();
// third that function under return <context.Provider value={[]} >{children}</context.Provider>
// four stap is wrap App.js - <myContext>App.js</myContext>
