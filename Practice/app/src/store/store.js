import {combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./reducers/dataReducer";

const rootReducer = combineReducers({
  dataState: dataReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;