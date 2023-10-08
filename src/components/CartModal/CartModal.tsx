import { useMemo } from "react";
import { Modal } from "../Modal/Modal";
import { Modal as IModal } from "../../types";
import { cartProducts } from "../../constants";
import { CartProduct } from "./components/CartProduct";
import { currencyFormatter } from "../../utils";
import { Button } from "../Button/Button";
import "./CartModal.css";

export default function CartModal({ show, setShow }: IModal) {
  const total = useMemo(() => {
    return cartProducts.reduce((accumulator, product) => {
      return accumulator + product.quantity_buy * product.price;
    }, 0);
  }, [cartProducts]);

  return (
    <Modal
      id="cart-modal"
      show={show}
      setShow={setShow}
      title="Carrito de Compra"
      classContainer="justify-end"
      classContent="rounded-cart h-screen"
    >
      <div className="max-w-md mx-auto top-0 h-fit bg-white  overflow-hidden md:max-w-lg relative ">
        <div className="flex flex-col divide-y divide-gray-200 h-max ">
          {cartProducts.map((product) => (
            <CartProduct key={product.id} {...product} />
          ))}
        </div>
        <div className="flex items-center justify-between bottom-0 pb-6 py-4 bg-gray-100 fixed cart-totals ">
          <h3 className="text-gray-900 font-semibold">
            Total: ${currencyFormatter("COP", total)}
          </h3>
          <Button
            onClick={() => {}}
            type="button"
            title="Ir a Pagar"
            classButton="py-2 px-6 bg-purple-700 hover:bg-purple-800 text-white inline m-0"
          />
        </div>
      </div>
    </Modal>
  );
}
