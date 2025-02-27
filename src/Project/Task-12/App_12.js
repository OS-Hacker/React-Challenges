import React from "react";
import Trasections from "./Transection";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store";

const App_12 = () => {
  return (
    <>
      <Provider store={store}>
        <Trasections />
      </Provider>
    </>
  );
};

export default App_12;
