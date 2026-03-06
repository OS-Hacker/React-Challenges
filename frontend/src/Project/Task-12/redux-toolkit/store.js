import { configureStore } from "@reduxjs/toolkit";
import transectionSlice from "./TransectionSlice";

export const store = configureStore({
  reducer: {
    myTransaction: transectionSlice,
  },
});
