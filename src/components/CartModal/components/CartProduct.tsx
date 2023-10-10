import { trashIcon } from "../../../assets";
import { useCartActions } from "../../../hook/useCartActions";
import { CartProductWhitId } from "../../../types";
import { currencyFormatter } from "../../../utils";
import { Button } from "../../Button/Button";

export function CartProduct({
  cartId,
  id,
  name,
  brand,
  quantity,
  unit,
  price,
  quantity_buy,
  img,
}: CartProductWhitId) {
  const { removeProductCart } = useCartActions();
  return (
    <div id={id} className="flex items-center justify-between py-4 px-6">
      <div className="flex flex-row items-center justify-start w-3/4">
        <img
          className="w-16 h-16 object-cover rounded"
          src={img}
          alt="Product Image"
        />
        <div className="ml-3">
          <h3 className="text-gray-900 font-semibold">
            {`${name} ${brand} - ${quantity} ${unit} `} X {quantity_buy}
          </h3>
          <p className="text-gray-700 mt-1">
            ${currencyFormatter("COP", price)}
          </p>
        </div>
      </div>

      <Button
        title=""
        onClick={() => {
          removeProductCart(cartId);
        }}
        type="button"
        classButton="rounded-lg  py-2 px-4"
        classIcon="w-4 h-4 invert"
        icon={trashIcon}
      />
    </div>
  );
}
