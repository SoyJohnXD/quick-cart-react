import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/slice";
import authReducer from "./auth/slice";
import cartReducer from "./cart/slice";
import productsReducer from "./products/slice";

const persistenceLocalStorageMiddleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
};

export const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
    auth: authReducer,
    cart: cartReducer,
  },
  middleware: [persistenceLocalStorageMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
