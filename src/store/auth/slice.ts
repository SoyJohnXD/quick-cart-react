import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Auth, userAuth } from "../../types";

const initialState: userAuth = (() => {
  const persistedState = localStorage.getItem("__redux__state__");
  if (persistedState) return JSON.parse(persistedState).auth;
  return {
    name: "",
    email: "",
    role: "client",
  };
})();

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<userAuth>): userAuth => {
      return {
        ...action.payload,
      };
    },
    logout: (): userAuth => {
      return {
        name: "",
        email: "",
        role: "client",
      };
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
