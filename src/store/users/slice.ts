import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { User, UserWithId } from "../../types";
import { USERS_DEFAULT } from "../../constants";

const persistedState = localStorage.getItem("__redux__state__");
const initialState: UserWithId[] = persistedState
  ? JSON.parse(persistedState)?.users ?? USERS_DEFAULT
  : USERS_DEFAULT;

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
