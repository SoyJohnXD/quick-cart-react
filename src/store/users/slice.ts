import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { User, UserWithId } from "../../types";

const DEFAULT_STATE: UserWithId[] = [
  {
    id: "1",
    name: "Admin",
    lastname: "Admin",
    email: "admin@admin.com",
    password: "admin",
    role: "admin",
  },
  {
    id: "2",
    name: "John",
    lastname: "Londono",
    email: "johnjulin2@gmail.com",
    password: "password",
    role: "client",
  },
];

const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem("__redux__state__");
  if (persistedState) return JSON.parse(persistedState).users;
  return DEFAULT_STATE;
})();

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID();
      return [...state, { id, ...action.payload }];
    },
    /* editUserWithId: (state, action: PayloadAction<UserWithId>) => {
      const { name, email, github } = action.payload;
      const newState = state.map((user) => ({
        ...user,
        ...(user.id === action.payload?.id && { name, email, github }),
      }));
      return newState;
    },
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    }, */
  },
});

export default usersSlice.reducer;
export const { addNewUser /* deleteUserById, editUserWithId */ } =
  usersSlice.actions;
