import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";


const store = configureStore({
  reducer: {
    dataState: dataSlice,
  },
});

export default store;