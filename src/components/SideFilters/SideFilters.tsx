import { useEffect, useState } from "react";
import { SideFilters } from "../../types";
import Filter from "./components/Filter";

export function SideFilters({ setProductsList, products }: SideFilters) {
  type CategoryItem = {
    title: string;
    isCheck: boolean;
  };

  function extractCategories(): CategoryItem[] {
    const categories: string[] = [];
    products.forEach((product) => {
      product.categories?.forEach((category: string) => {
        if (!categories.includes(category)) {
          categories.push(category);
        }
      });
    });

    const categoryItems: CategoryItem[] = categories.map((category) => {
      return {
        title: category,
        isCheck: false,
      };
    });

    return categoryItems;
  }

  const filtersExtract = extractCategories();

  const [filters, setFilters] = useState(filtersExtract);

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
          <div className="space-y-2 ml-3">
            {filtersExtract.map((category) => (
              <Filter
                key={"filter-" + category.title}
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
