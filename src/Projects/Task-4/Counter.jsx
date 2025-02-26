import { useRef, useState } from "react";
import styled from "styled-components";

const Counter = () => {
  
  const [count, setCount] = useState(0);

  let IntervalRef = useRef();

  const handleStart = () => {
    IntervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(IntervalRef.current);
  };

  const handleReset = () => {
    setCount(0);
    clearInterval(IntervalRef.current);
  };

  return (
    <Wrapper>
      <div className="container">
        <h1 className="count">{count}</h1>
        <div className="">
          <button onClick={handleStart}>start</button>
          <button onClick={handleReset}>reset</button>
          <button onClick={handleStop}>stop</button>
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
    height: 20vh;
  }

  button {
    margin: 5px;
    padding: 3px;
    cursor: pointer;
  }
`;
