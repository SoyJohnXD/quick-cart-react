import { useState } from "react";
import Breadcum from "../components/Breadcum/Breadcum";
import { ListProduct } from "../components/ListProducts/ListProduct";
import { SideFilters } from "../components/SideFilters/SideFilters";
import { product } from "../types";
import { useAppSelector } from "../hook/store";

export function Products() {
  const Products = useAppSelector((state) => state.products);
  const [productsList, setProductsList] = useState<product[]>(Products);

  return (
    <div className="mt-9">
      <Breadcum />
      <h1 className="text-3xl w-full text-center py-3 font-bold border-b border-gray-200">
        Listado de productos
      </h1>
      <div className="w-full flex flex-row ">
        <SideFilters
          setProductsList={setProductsList}
          productsList={productsList}
          products={Products}
        />
        <ListProduct products={productsList} />
      </div>
    </div>
  );
}
