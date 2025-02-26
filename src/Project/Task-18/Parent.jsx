import React, { useState } from "react";
import styled from "styled-components";
import Child from "./Child";

const Parent = () => {
  const [color, setColor] = useState("");
  return (
    <Wrapper>
      <div className="box" style={{ backgroundColor: color }}></div>
      <Child setColor={setColor} color={color} />
    </Wrapper>
  );
};

export default Parent;

const Wrapper = styled.section`
  .box {
    border: 2px solid black;
    width: 150px;
    height: 150px;
  }
`;
