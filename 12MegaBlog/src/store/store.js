import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js"; // 👈 must include .js

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
