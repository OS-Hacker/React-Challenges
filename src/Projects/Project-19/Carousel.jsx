import React, { useEffect, useState } from "react";
import { Images } from "./Images";
import styled from "styled-components";

const Carousel = () => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  //  simple logic is when activeImgIndex is 0 then show me images last image
  //  else show previous images
  const handlePrev = () => {
    setActiveImgIndex((prev) => (prev === 0 ? Images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImgIndex((prev) => (prev + 1) % Images.length);
  };

  //  setTimeout

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 3000);

    return () => clearTimeout(timer);
  }, [activeImgIndex]);

  return (
    <Wrapper>
      <div className="container">
        <button onClick={handlePrev}>Previous</button>
        {Images?.map((url, idx) => {
          return (
            <div key={idx}>
              <img
                src={url}
                alt="img"
                className={`${activeImgIndex === idx ? "show" : "hide"}`}
              />
            </div>
          );
        })}
        <button onClick={handleNext}>Next</button>
      </div>
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.section`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  img {
    width: 500px;
    height: 300px;
  }

  .show {
    display: block;
  }
  .hide {
    display: none;
  }
`;
