import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux-toolkit/Slice1/Counter";

const Counter = () => {
  const { value } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const [inputText, setInputText] = useState("");

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(inputText));
    setInputText("");
  };
  return (
    <Wrapper>
      <div className="container">
        <h1>Counter</h1>
        <h3>{value}</h3>
        <div className="">
          <button onClick={() => dispatch(increment())}>increment</button>
          <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
        <div className="">
          <input
            type="number"
            placeholder="Enter amount"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button onClick={handleIncrementByAmount}>incrementByAmount</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Counter;

const Wrapper = styled.section`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }
`;
