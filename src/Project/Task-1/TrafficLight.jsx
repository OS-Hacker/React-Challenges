import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TrafficLight = () => {
  // Question
  // red    ==> 4000 second
  // yellow ==> 2000 second
  // green  ==> 6000 second

  const Lights = {
    green: "green",
    yellow: "yellow",
    red: "red",
  };

  const [active, setActive] = useState(Lights.red);

  useEffect(() => {
    if (active === Lights.red) {
      setTimeout(() => {
        setActive(Lights.yellow);
      }, 4000);
    } else if (active === Lights.yellow) {
      setTimeout(() => {
        setActive(Lights.green);
      }, 2000);
    } else if (active === Lights.green) {
      setTimeout(() => {
        setActive(Lights.red);
      }, 6000);
    }
  }, [active]);

  return (
    <Warpper>
      <div className="container">
        <div
          className="circle green"
          style={active !== Lights.green ? { opacity: 0.5 } : null}
        ></div>
        <div
          className="circle yellow"
          style={active !== Lights.yellow ? { opacity: 0.5 } : null}
        ></div>
        <div
          className="circle red"
          style={active !== Lights.red ? { opacity: 0.5 } : null}
        ></div>
      </div>
    </Warpper>
  );
};

export default TrafficLight;

const Warpper = styled.section`
  .container {
    width: 100px;
    padding: 10px;
    border: 2px solid black;
    margin: auto;
    border-radius: 10px;
  }

  .circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 8px auto;
  }

  .green {
    background-color: green;
  }
  .yellow {
    background-color: yellow;
  }
  .red {
    background-color: red;
  }
`;
