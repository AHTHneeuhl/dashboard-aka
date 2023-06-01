import { combineReducers } from "@reduxjs/toolkit";
import orders from "./orders";

export default combineReducers({
  orders,
});

export * from "./orders";
