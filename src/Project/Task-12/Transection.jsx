import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTransection } from "./redux-toolkit/TransectionSlice";

const Trasections = () => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  };

  const Dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    Dispatch(addTransection(formData));
    setFormData({
      title: "",
      amount: "",
    });
  };

  return (
    <Wrapper>
      <div className="main">
        <h1 className="Balance_value">Expense Tracker</h1>
        <p className="Balance_text">Your Balance</p>
        <h1 className="Balance_value" id="total">
          ₹0
        </h1>

        <div className="container">
          <div className="income_container">
            <h4 className="text">Income</h4>
            <h2 className="income">₹00.00</h2>
          </div>
          <h1 className="text">|</h1>
          <div className="expense_container">
            <h4 className="text">Expense</h4>
            <h2 className="expense">₹00.00</h2>
          </div>
        </div>

        <div className="btn_container">
          <button type="button" className="Add_btn btn">
            ADD
          </button>
          <button type="button" className="Show_History btn">
            History
          </button>
        </div>

        <div className="Add_transaction">
          <h2 className="heading">Add Transaction</h2>
          <form id="transition_form" onSubmit={handleSubmit}>
            <span className="Error" style={{ color: "red" }}></span>
            <input
              type="text"
              id="inputText"
              placeholder="Enter Title..."
              onChange={handleChange}
              value={formData.title}
              name="title"
            />
            <input
              type="number"
              id="inputAmount"
              placeholder="Amount"
              autoFocus
              onChange={handleChange}
              value={formData.amount}
              name="amount"
            />
            <div>
              <button type="submit" id="btn-income">
                ADD transection
              </button>
            </div>
          </form>
        </div>

        <div className="history">
          <h3 className="heading">History</h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default Trasections;

const Wrapper = styled.section`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 90vh;
    background-color: rgb(214, 214, 214);
    font-family: Arial, Helvetica, sans-serif;
    user-select: none;
  }
  .Balance_text {
    font-size: 15px;
    margin-top: 30px;
    color: gray;
  }
  .Balance_value {
    font-size: 35px;
  }
  .container {
    display: flex;
    justify-content: center;
    gap: 30px;
    box-shadow: 2px 2px 5px 2px;
    padding: 15px;
    background-color: whitesmoke;
    text-transform: uppercase;
    font-size: 16px;
    border-radius: 4px;
    margin-top: 20px;
  }
  .text {
    color: gray;
    margin-top: 12px;
    font-weight: 600;
  }
  .income {
    text-align: center;
    padding-top: 2px;
    color: green;
  }
  .expense {
    text-align: center;
    padding-top: 2px;
    color: red;
  }
  .heading {
    text-transform: uppercase;
    margin-bottom: 8px;
    margin-top: 12px;
    font-size: 17px;
    color: gray;
    text-align: center;
  }
  input {
    border: none;
    padding: 6px 10px;
    width: 100%;
    max-width: 300px;
    background-color: rgb(236, 235, 235);
    border-radius: 4px;
    outline: none;
    font-size: 18px;
    margin-bottom: 12px;
    margin-top: 3px;
  }
  .btn {
    padding: 6px 40px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    border-radius: 15px;
    margin-top: 5px;
    background-color: rgb(236, 235, 235);
    transition: all 0.5s;
    font-weight: bold;
    user-select: none;
  }
  .btn:hover {
    background-color: rgb(28, 24, 24);
    color: white;
  }
  .btn_container {
    margin-top: 15px;
  }

  /* inistal */
  .history {
    display: none;
  }

  .hide {
    display: none;
  }
  .show {
    display: block;
  }

  #transition_form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  #btn-income,
  #btn-expense {
    padding: 6px 40px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    border-radius: 15px;
    margin-top: 5px;
    background-color: rgb(236, 235, 235);
    transition: all 0.5s;
    font-weight: bold;
    user-select: none;
  }

  #btn-income:hover {
    background-color: rgb(28, 213, 111);
    color: white;
  }
  #btn-expense:hover {
    background-color: rgb(213, 46, 28);
    color: white;
  }

  .plus {
    display: flex;
    justify-content: space-between;
    list-style: none;
    background-color: rgb(72, 223, 72);
    padding: 5px 20px;
    width: 260px;
    border-radius: 20px;
    margin-top: 8px;
    font-size: 17px;
    color: white;
    position: relative;
  }

  .mins {
    display: flex;
    justify-content: space-between;
    list-style: none;
    background-color: rgb(223, 87, 72);
    padding: 5px 20px;
    border-radius: 20px;
    width: 260px;
    margin-top: 8px;
    font-size: 17px;
    color: white;
    position: relative;
  }

  .delete-btn {
    cursor: pointer;
    background-color: rgb(247, 122, 122);
    border: 0;
    color: white;
    font-size: 14px;
    line-height: 20px;
    padding: 1px 2px;
    position: absolute;
    top: 50%;
    right: -52px;
    transform: translate(-100%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 4px;
  }

  li:hover .delete-btn {
    opacity: 1;
    color: rgb(238, 238, 237);
  }

  @media (max-width: 600px) {
    .Balance_value {
      font-size: 28px;
    }
    .income,
    .expense {
      font-size: 20px;
    }
    .btn {
      padding: 6px 35px;
    }
  }
`;
