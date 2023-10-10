import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { product } from "../../types";
import { products } from "../../constants";

const persistedState = localStorage.getItem("__redux__state__");
const initialState: product[] = persistedState
  ? JSON.parse(persistedState)?.products ?? products
  : products;

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<product>) => {
      return [...state, { ...action.payload }];
    },
    remove: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      return state.filter((product) => product.id !== id);
    },
  },
});

export default productsSlice.reducer;
export const { add, remove } = productsSlice.actions;
