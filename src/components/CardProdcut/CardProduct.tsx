import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { CartProduct, product } from "../../types";
import { currencyFormatter, stringToKebabCase } from "../../utils";
import { cartIcon } from "../../assets";
import { useCartActions } from "../../hook/useCartActions";
import "./CardProduct.css";

export function CardProduct({
  id,
  name,
  variants,
  brand,
  img,
  description,
}: product) {
  const { price, unit, quantity } =
    (variants && variants.find((variant) => variant.is_outstanding)) ||
    variants[0];
  const { addProductCart } = useCartActions();

  const handdleAddProductCart = (): void => {
    const productCart: CartProduct = {
      id,
      name,
      brand,
      img,
      ...variants[0],
      variants,
      description,
      quantity_buy: 1,
    };
    addProductCart(productCart);
  };
  return (
    <div className="product">
      <Link to={`../product/${stringToKebabCase(id)}`}>
        <img className="w-auto h-auto" src={img} alt={name} />
        <div className="details">
          <p className="uppercase text-[16px] text-gray-500">{brand}</p>
          <p className="text-[14px] text-gray-500">{name}</p>
          <p className="text-[14px] text-gray-500">
            {quantity} {unit}
          </p>
          <h3 className="text-gray-900 font-bold">
            ${currencyFormatter("COP", price || 0)}
          </h3>
        </div>
      </Link>
      <Button
        title="Agregar"
        icon={cartIcon}
        type="button"
        classButton="button-product bg-purple-700 hover:bg-purple-800 rounded-none "
        classIcon="w-5 h-5 invert"
        onClick={() => {
          handdleAddProductCart();
        }}
      />
    </div>
  );
}
