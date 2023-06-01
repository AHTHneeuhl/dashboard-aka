import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TOrder, TSort, TStatus } from "types";

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
    // Filter order by status
    filterOrders: (state, action: PayloadAction<TStatus>) => {
      const updatedOrders =
        action.payload === "All"
          ? state.orders
          : state.orders.filter((order) => order.status === action.payload);
      return {
        ...state,
        orders: updatedOrders,
      };
    },
    // Sort order ascending & descending order
    sortOrders: (state, action: PayloadAction<TSort>) => {
      const updatedOrders = [...state.orders].sort((a, b) => {
        if (action.payload === "desc") {
          return a.price - b.price;
        }
        return b.price - a.price;
      });
      return {
        ...state,
        orders: updatedOrders,
      };
    },
  },
});

export const {
  setOrders,
  cancelOrder,
  updateOrderStatus,
  filterOrders,
  sortOrders,
} = orders.actions;
export default orders.reducer;
