import { createSlice } from "@reduxjs/toolkit";

const count = JSON.parse(localStorage.getItem("counter"));

const initialState = {
  value: count ? count : 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,

  reducers: {
    increment: (state, action) => {
      state.value += 1;
      localStorage.setItem("counter", JSON.stringify(state.value));
    },
    decrement: (state, action) => {
      if (state.value > 0) {
        state.value -= 1;
      }

      localStorage.setItem("counter", JSON.stringify(state.value));
    },
    incrementByAmount: (state, action) => {
      state.value += +action.payload;

      localStorage.setItem("counter", JSON.stringify(state.value));
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
