import React from "react";
import styled from "styled-components";

const Trasections = ({ data }) => {
  // totalAmount
  const totalAmount = data
    ?.filter((ele) => ele.amount)
    .reduce((prev, current) => prev + current.amount, 0);

  console.log(totalAmount);

  // income
  const Income = data
    ?.filter((ele) => ele.amount > 0)
    .reduce((prev, current) => (prev += current.amount), 0);

  // expense
  const Expense = data
    ?.filter((ele) => ele.amount < 0)
    .reduce((prev, current) => (prev += current.amount * -1), 0);

  return (
    <Wrapper>
      <div className="main">
        <h4>TotalAmout</h4>
        <h1>{totalAmount}</h1>
      </div>
      <div className="container">
        <div className="income">
          <h3>Income</h3>
          <h2>{Income}</h2>
        </div>
        <div className="expense">
          <h3>Expense</h3>
          <h2>{Expense}</h2>
        </div>
      </div>
    </Wrapper>
  );
};

export default Trasections;

const Wrapper = styled.section`
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 20vh;
  }
  .container {
    display: flex;
    justify-content: center;
    height: 10vh;
    align-items: center;
    text-align: center;
    gap: 20px;
    margin-bottom: 20px;
  }
`;
