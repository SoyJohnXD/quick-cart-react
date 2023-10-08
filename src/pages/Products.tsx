import Breadcum from "../components/Breadcum/Breadcum";
import { ListProduct } from "../components/ListProducts/ListProduct";
import { SideFilters } from "../components/SideFilters/SideFilters";
import { products } from "../constants";

export function Products() {
  return (
    <div className="mt-9">
      <Breadcum />
      <h1 className="text-3xl w-full text-center py-3 font-bold border-b border-gray-200">
        Listado de productos
      </h1>
      <div className="w-full flex flex-row ">
        <SideFilters />
        <ListProduct products={products} />
      </div>
    </div>
  );
}
