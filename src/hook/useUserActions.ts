import {
  addNewUser,
  /*  deleteUserById,
  editUserWithId deleteUserById,
  editUserWithId */
} from "../store/users/slice";
import { User } from "../types";
import { useAppDispatch } from "./store";

export const useUserActions = () => {
  const dispatch = useAppDispatch();

  /*  const removeUser = (id: string) => {
    dispatch(deleteUserById(id));
  };
 */
  const addUser = ({ name, lastname, email, password, role }: User) => {
    dispatch(addNewUser({ name, lastname, email, password, role }));
  };

  /* const editUser = ({ name, email, github }: User, userId: UserId) => {
    dispatch(editUserWithId({ id: userId, name, email, github }));
  }; */

  return { addUser /* removeUser,  editUser */ };
};
