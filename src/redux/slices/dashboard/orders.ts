import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TOrder, TStatus } from "types";

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
    // Update order status
    updateOrderStatus: (
      state,
      action: PayloadAction<{ id: number; status: TStatus }>
    ) => {
      return {
        ...state,
        orders: state.orders.map((order) => {
          if (order.id === action.payload.id) {
            return {
              ...order,
              status: action.payload.status,
            };
          }
          return order;
        }),
      };
    },
  },
});

export const { setOrders, cancelOrder, updateOrderStatus } = orders.actions;
export default orders.reducer;
