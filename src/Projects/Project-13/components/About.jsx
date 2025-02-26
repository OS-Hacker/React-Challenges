import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/ContextTheme";

const About = () => {

  const [toggle,setToggle] = useTheme()


  return (
    <Wrapper>
      <div className={`conatiner ${toggle ? "DarkMode" : ""}`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, vero,
        sint impedit atque non incidunt in minima quae quo cum dolorum
        voluptatem tempora enim minus vitae dolores, consequuntur eum
        necessitatibus vel. Nam tenetur, hic praesentium iusto cumque nihil
        nostrum reiciendis unde quasi veniam maiores animi officiis quo tempora
        non distinctio placeat expedita suscipit fugiat ad optio modi aliquam
        exercitationem delectus. Distinctio deleniti eligendi inventore rerum
        dignissimos praesentium laboriosam quod error quaerat nam velit nesciunt
        repellendus unde dolor eum, deserunt qui laudantium provident asperiores
        recusandae alias nihil corporis voluptates delectus! Omnis ab corrupti
        excepturi quas sapiente officia quam culpa recusandae nesciunt.
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section`
  .conatiner {
    padding: 30px;
  }
`;
