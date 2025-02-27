import { createSlice } from "@reduxjs/toolkit";

const saveToLocalStorage = (state) => {
  localStorage.setItem("transection", JSON.stringify(state.transection));
};

const transectionSlice = createSlice({
  name: "transection",
  initialState: {
    transection: JSON.parse(localStorage.getItem("transection")) || [],
  },
  reducers: {
    addTransection: (state, action) => {
      state.transection.push(action.payload);
      saveToLocalStorage(state);
    },
  },    
});

export default transectionSlice.reducer;

export const { addTransection } = transectionSlice.actions;
