import React, { useContext } from "react";
import styled from "styled-components";
import { useTheme } from "../context/ContextTheme";


const Home = () => {
  const [toggle, toggleTheme] = useTheme();

  return (
    <Wrapper>
      <div className={`container ${toggle ? "DarkMode" : ""}`}>
        <span className="icon" onClick={toggleTheme}>
          {toggle ? "☀️" : "🌚"}
        </span>
        <h1>Om Shinde</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eius
          placeat! Rem, obcaecati, sit itaque quasi tempore ad culpa aliquam,
          distinctio repellat eveniet et consequatur. Itaque tempore quisquam
          molestiae cumque! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Dignissimos, earum unde? Et velit dolores quia alias eum vero
          magnam culpa rerum voluptates ad sapiente laborum minus perferendis
          reiciendis ex reprehenderit numquam laboriosam, officia libero.
        </p>
      </div>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.section`
  .container {
    width: 100%;
    padding: 30px;
  }

  .icon {
    font-size: 30px;
    cursor: pointer;
  }

`;
