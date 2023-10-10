import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { CartProduct, CartProductWhitId } from "../../types";
import { cartProducts } from "../../constants";

const persistedState = localStorage.getItem("__redux__state__");
const initialState: CartProductWhitId[] = persistedState
  ? JSON.parse(persistedState)?.cart ?? cartProducts
  : cartProducts;

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartProduct>) => {
      const cartId = crypto.randomUUID();
      return [...state, { cartId, ...action.payload }];
    },
    remove: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      return state.filter((cart) => cart.cartId !== id);
    },
  },
});

export default cartSlice.reducer;
export const { add, remove } = cartSlice.actions;
