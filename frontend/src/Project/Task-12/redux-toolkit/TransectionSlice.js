import { createSlice } from "@reduxjs/toolkit";

const saveToLocalStorage = (state) => {
  localStorage.setItem("transactions", JSON.stringify(state.transactions));
};

const transactionSlice = createSlice({
  name: "myTransaction",
  initialState: {
    transactions: JSON.parse(localStorage.getItem("transactions")) || [],
    totalAmount: 0,
    income: 0,
    expense: 0,
  },
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
      saveToLocalStorage(state);
    },  

    calculateTotals: (state) => {  
      const totals = state.transactions.reduce(
        (acc, transaction) => {
          acc.totalAmount += +transaction.amount;
          if (transaction.amount > 0) {
            acc.income += +transaction.amount;
          } else {
            acc.expense += Math.abs(transaction.amount);
          }
          return acc;
        },
        { totalAmount: 0, income: 0, expense: 0 }
      );

      state.totalAmount = parseFloat(totals.totalAmount.toFixed(2));
      state.income = parseFloat(totals.income.toFixed(2));
      state.expense = parseFloat(totals.expense.toFixed(2));

      saveToLocalStorage(state); // Save to localStorage
    },

    removeTransaction: (state, action) => {
      state.transactions = state.transactions.filter((tran, index) => {
        return index !== action.payload;
      });

      saveToLocalStorage(state);
    },
  },
});

export default transactionSlice.reducer;

export const { addTransaction, calculateTotals ,removeTransaction} = transactionSlice.actions;
