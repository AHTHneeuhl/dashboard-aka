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
    editOrderQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const updatedOrders = state.orders.map((order) => {
        if (order.id === action.payload.id) {
          return { ...order, quantity: action.payload.quantity };
        }
        return order;
      });
      return {
        ...state,
        orders: updatedOrders,
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
    sortByPlacedOn: (state, action: PayloadAction<TSort>) => {
      const updatedOrders = [...state.orders].sort((a, b) => {
        const dateA = new Date(a.placedOn);
        const dateB = new Date(b.placedOn);
        if (action.payload === "desc" && dateA < dateB) {
          return -1;
        }
        if (action.payload === "asc" && dateA > dateB) {
          return +1;
        }
        return 0;
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
  editOrderQuantity,
  filterOrders,
  sortOrders,
} = orders.actions;
export default orders.reducer;
