import { configureStore } from "@reduxjs/toolkit";
import transectionSlice from "./TransectionSlice";

export const store = configureStore({
  reducer: {
    transection: transectionSlice,
  },
});
