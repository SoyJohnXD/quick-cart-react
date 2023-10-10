import { add, remove } from "../store/cart/slice";
import { CartProduct } from "../types";

import { useAppDispatch } from "./store";

export const useCartActions = () => {
  const dispatch = useAppDispatch();

  const addProductCart = ({ ...props }: CartProduct) => {
    dispatch(add({ ...props }));
  };
  const removeProductCart = (id: string) => {
    dispatch(remove(id));
  };

  return { addProductCart, removeProductCart };
};
