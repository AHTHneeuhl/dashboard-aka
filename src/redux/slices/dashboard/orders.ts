import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TOrder } from "types";

const initialState = {
  orders: [] as TOrder[],
};

export const orders = createSlice({
  name: "orders",
  initialState,
  reducers: {
    // Set orders from Json order file to redux store
    setOrders: (state, action: PayloadAction<TOrder[]>) => {
      return {
        ...state,
        orders: action.payload,
      };
    },
    // Cancel order & remove from redux store
    cancelOrder: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== action.payload),
      };
    },
  },
});

export const { setOrders, cancelOrder } = orders.actions;
export default orders.reducer;
