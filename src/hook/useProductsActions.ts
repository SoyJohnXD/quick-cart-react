import { add, remove } from "../store/products/slice";
import { product } from "../types";

import { useAppDispatch } from "./store";

export const useProductsActions = () => {
  const dispatch = useAppDispatch();

  const addProduct = ({ ...props }: product) => {
    dispatch(add({ ...props }));
  };
  const removeProduct = (id: string) => {
    dispatch(remove(id));
  };

  return { addProduct, removeProduct };
};
