import React, { useState } from "react";
import styled from "styled-components";

const Collapsible = ({ title, children, intialCallaps = true }) => {
  const [collapse, setCollapse] = useState(intialCallaps);
  
  return (
    <Wrapper>
      <div className="container">
        <div className="title" onClick={() => setCollapse(!collapse)}>
          <h2>{title}</h2>
          <span className="symbol">{collapse ? "🔽" : "🔼"}</span>
        </div>
        <div className={collapse ? "collpesed" : "content"}>{children}</div>
      </div>
    </Wrapper>
  );
};

export default Collapsible;

const Wrapper = styled.section`
  .container {
    margin: 20px;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff0f0;
    padding: 6px;
  }

  .symbol {
    font-size: 20px;
    cursor: pointer;
  }

  .content {
    background-color: #e7e6e5;
    padding: 10px;
    height: 10vh;
  }

  .collpesed {
    height: 0;
    overflow: hidden;
  }
`;
