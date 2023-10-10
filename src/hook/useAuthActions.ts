import { login, logout } from "../store/auth/slice";
import { userAuth } from "../types";
import { useAppDispatch } from "./store";

export const useAuthActions = () => {
  const dispatch = useAppDispatch();

  const loginUser = ({ email, name, role }: userAuth) => {
    dispatch(login({ email, name, role }));
  };
  const logoutUser = () => {
    dispatch(logout());
  };

  return { loginUser, logoutUser };
};
