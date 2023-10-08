import { categoriesFilter } from "../../constants";
import Filter from "./components/Filter";

export function SideFilters() {
  return (
    <div className="hidden md:block w-1/6 h-auto border border-gray-200 ">
      <div className="max-w-md mx-auto bg-white xl:p-6 p-4 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-normal">Filtros</h1>
          <button className="text-black-500 underline text-xs">
            Limpiar Filtros
          </button>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-normal mb-2">Marca</h2>

          <div className="space-y-2 ml-3">
            {categoriesFilter.brand.map((category) => (
              <Filter title={category.title} onChange={category.onChange} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-normal mb-2">Tipo de Producto</h2>
          <div className="space-y-2 ml-3">
            {categoriesFilter.type_product.map((category) => (
              <Filter title={category.title} onChange={category.onChange} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
