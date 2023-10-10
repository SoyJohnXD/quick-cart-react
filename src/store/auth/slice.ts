import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { userAuth } from "../../types";
import { AUTH_EMPTY } from "../../constants";

const persistedState = localStorage.getItem("__redux__state__");
const initialState: userAuth = persistedState
  ? JSON.parse(persistedState)?.auth ?? AUTH_EMPTY
  : AUTH_EMPTY;

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
