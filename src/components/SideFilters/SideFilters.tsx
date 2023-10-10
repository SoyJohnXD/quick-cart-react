import { useEffect, useState } from "react";
import { SideFilters } from "../../types";
import Filter from "./components/Filter";

export function SideFilters({
  setProductsList,
  productsList,
  products,
}: SideFilters) {
  const categoriesFilter = [
    [
      { title: "Alimentos Básicos", isCheck: false },
      { title: "Bebidas", isCheck: false },
      { title: "Lácteos", isCheck: false },
      { title: "Frutas y Verduras", isCheck: false },
      { title: "Panadería", isCheck: false },
      { title: "Limpieza", isCheck: false },
      { title: "Cuidado Personal", isCheck: false },
      { title: "Tecnología", isCheck: false },
      { title: "Hogar", isCheck: false },
      { title: "Otros", isCheck: false },
    ],
    [
      { title: "REFISAL", isCheck: false },
      { title: "SELLO ROJO", isCheck: false },
      { title: "VAN CAMPS", isCheck: false },
      { title: "GOURMET", isCheck: false },
    ],
  ];
  const [filters, setFilters] = useState(categoriesFilter);
  useEffect(() => {
    if (filters.flat().some((filter) => filter.isCheck)) {
      setProductsList(
        products.filter((product) => {
          const selectedFilters = filters
            .flat()
            .map((filter) => {
              if (filter.isCheck) {
                return filter.title.toLowerCase();
              }
            })
            .filter(Boolean);

          const productCategories = product.categories?.map((category) =>
            category.toLowerCase()
          );

          return productCategories?.some((category) =>
            selectedFilters.includes(category)
          );
        })
      );
    } else {
      setProductsList(products);
    }
  }, [filters]);

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
            {categoriesFilter[0].map((category) => (
              <Filter
                filters={filters}
                filter={category}
                setFilters={setFilters}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-normal mb-2">Tipo de Producto</h2>
          <div className="space-y-2 ml-3">
            {categoriesFilter[1].map((category) => (
              <Filter
                filters={filters}
                filter={category}
                setFilters={setFilters}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
