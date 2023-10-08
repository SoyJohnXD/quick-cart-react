import { CartProduct } from "../../../types";
import { currencyFormatter } from "../../../utils";

export function CartProduct({
  id,
  name,
  brand,
  quantity,
  unit,
  price,
  quantity_buy,
  img,
}: CartProduct) {
  return (
    <div id={id} className="flex items-center py-4 px-6">
      <img
        className="w-16 h-16 object-cover rounded"
        src={img}
        alt="Product Image"
      />
      <div className="ml-3">
        <h3 className="text-gray-900 font-semibold">
          {`${name} ${brand} - ${quantity} ${unit} `} X {quantity_buy}
        </h3>
        <p className="text-gray-700 mt-1">${currencyFormatter("COP", price)}</p>
      </div>
      <button className="ml-auto py-2 px-4 bg-orange-400 hover:bg-orange-600 text-white rounded-lg">
        Remover
      </button>
    </div>
  );
}
