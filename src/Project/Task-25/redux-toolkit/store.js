import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slice1/Counter";
import TodoSlice from "./Slice2/TodoSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo: TodoSlice,
  },
});
