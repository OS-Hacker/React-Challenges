import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  addTransaction,
  calculateTotals,
} from "./redux-toolkit/TransectionSlice";
import History from "./History";

const Transactions = () => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
  });

  const dispatch = useDispatch();

  const { transactions, totalAmount, income, expense } = useSelector(
    (state) => state?.myTransaction
  );

  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch, transactions]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.amount) {
      alert("Please fill in all fields");
      return;
    }
    dispatch(addTransaction(formData));
    setFormData({
      title: "",
      amount: "",
    });
  };

  // toggle tarnsection and history

  const [showHistory, setShowHistory] = useState(false);

  const toggleHistory = () => {
    setShowHistory((prevState) => !prevState);
  };

  return (
    <Wrapper>
      <div className="main">
        <h1 className="Balance_value">Expense Tracker</h1>
        <p className="Balance_text">Your Balance</p>
        <h1 className="Balance_value" id="total">
          ₹{totalAmount?.toFixed(2)}
        </h1>

        <div className="container">
          <div className="income_container">
            <h4 className="text">Income</h4>
            <h2 className="income">₹{income?.toFixed(2)}</h2>
          </div>
          <h1 className="text">|</h1>
          <div className="expense_container">
            <h4 className="text">Expense</h4>
            <h2 className="expense">₹{expense?.toFixed(2)}</h2>
          </div>
        </div>

        <div className="btn_container">
          <button type="button" className="Add_btn btn" onClick={toggleHistory}>
            {showHistory ? "Transactions" : "History"}
          </button>
        </div>

        {!showHistory ? (
          <>
            <div className="Add_transaction">
              <h2 className="heading" style={{ marginBottom: "10px" }}>
                Add Transaction
              </h2>
              <form id="transition_form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="inputText"
                  placeholder="Enter Title..."
                  autoFocus
                  onChange={handleChange}
                  value={formData.title}
                  name="title"
                />
                <input
                  type="number"
                  id="inputAmount"
                  placeholder="Amount"
                  onChange={handleChange}
                  value={formData.amount}
                  name="amount"
                />
                <div>
                  <button type="submit" class="btn">
                    ADD Transaction
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <>
            {/* History */}
            <History transactions={transactions} />
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default Transactions;

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
    min-height: 80vh;
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
    /* margin-bottom: 8px; */
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

  #transition_form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .btn {
    padding: 8px 20px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    border-radius: 15px;
    margin: px 3px;
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
