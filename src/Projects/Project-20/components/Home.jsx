import React, { useState } from "react";
import { Quiz } from "./Quiz";
import styled from "styled-components";

const Home = () => {
  const [activeQuiz, setActiveQuiz] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const handleNextQuestion = () => {
    setActiveQuiz((prev) => prev + 1);
    setSelectedOption(null);
    if (selectedOption === Quiz[activeQuiz].answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  return (
    <Wrapper>
      <div className="main">
        {activeQuiz < Quiz.length ? (
          <>
            {Quiz?.map((questions, idx) => {
              const { question, options, answer } = questions;
              return (
                <div
                  className={` container ${
                    activeQuiz === idx ? "show" : "hide"
                  }`}
                  key={idx}
                >
                  <h4>{question}</h4>        
                  <ul className="options">
                    {options.map((option, index) => (
                      <li
                        key={index}
                        onClick={() => handleOptionClick(index)}
                        className={`${
                          selectedOption !== null
                            ? index === Quiz[activeQuiz].answer
                              ? "currect"
                              : selectedOption === index
                              ? "wrong"
                              : ""
                            : ""
                        }`}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </>
        ) : (
          <>
            <h1>Final Score</h1>
            <h1>{score}</h1>
          </>
        )}
        {activeQuiz < Quiz.length ? (
          <>
            <button
              onClick={handleNextQuestion}
              disabled={selectedOption === null}
            >
              Next Question
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.section`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    padding: 20px;
    border-radius: 8px;
  }

  .show {
    display: block;
  }

  .hide {
    display: none;
  }

  h4 {
    color: #333;
    margin-bottom: 10px;
  }

  .options {
    list-style: none;
    padding: 0;
  }

  .options li {
    padding: 10px;
    margin-bottom: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
  }

  .currect {
    background-color: #5df567;
  }
  .wrong {
    background-color: #ef5555;
  }
`;
