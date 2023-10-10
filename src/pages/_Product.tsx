import { useState } from "react";
import { useParams } from "react-router-dom";
import { currencyFormatter } from "../utils";
import { useAppSelector } from "../hook/store";
import { useCartActions } from "../hook/useCartActions";
import { CartProduct, product } from "../types";

export default function Product() {
  const { product } = useParams();
  const Products = useAppSelector((state) => state.products);
  const [prod, setProd] = useState<product>(
    Products.find((_product) => _product.id === product)
  );

  const { addProductCart } = useCartActions();

  const handdleAddProductCart = (): void => {
    const { id, name, brand, img, variants, description } = prod;
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
    <div className="bg-gray-100 py-4 mt-9">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
              <img
                className="w-full h-full object-cover"
                src={prod?.img}
                alt="Product Image"
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button
                  onClick={handdleAddProductCart}
                  className="w-full text-center border-none font-bold text-white bg-purple-700 hover:bg-purple-800 py-2 text-lg gap-1 flex flex-row items-center justify-center"
                >
                  Agregar
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full text-center border-none font-bold text-white bg-red-500 hover:bg-red-800 py-2 text-lg gap-1 flex flex-row items-center justify-center">
                  Lista de deseos
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold mb-2">
              {prod?.name} {prod?.brand} {prod?.variants[0].quantity}{" "}
              {prod?.variants[0].unit}
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Envios inmediatos a todo el pais 📩
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-500">Precio: </span>
                <span className="text-gray-600">
                  {currencyFormatter("COP", prod?.variants[0].price || 0)}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-500">Disponibilidad:</span>
                <span className="text-gray-600">{prod?.variants[0].stock}</span>
              </div>
            </div>

            <div className="mb-4">
              <span className="font-bold text-gray-500">Tamaño:</span>
              <div className="flex items-center mt-2">
                {prod?.variants.map((variant, index) => (
                  <button
                    key={"variant_" + index}
                    className="text-white py-2 px-4 rounded-full font-bold mr-2 bg-orange-500"
                  >
                    {variant.quantity} {variant.unit}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-700">
                Descripcion del producto
              </span>
              <p className="text-gray-600 text-sm mt-2">{prod?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
