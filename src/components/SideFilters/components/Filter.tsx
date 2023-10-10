import { Filter } from "../../../types";
import { stringToKebabCase } from "../../../utils";

export default function Filter({ filter, setFilters, filters }: Filter) {
  const handdleFilter = (title: string) => {
    setFilters((prevFilters) =>
      prevFilters.map((filterGroup) =>
        filterGroup.map((filter: { title: string; isCheck: boolean }) => ({
          ...filter,
          ...(filter.title === title && { isCheck: !filter.isCheck }),
        }))
      )
    );
  };
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        className="form-checkbox mr-2"
        name={stringToKebabCase(filter.title)}
        checked={
          filters.flat().find((filterList) => filterList.title === filter.title)
            .isCheck
        }
        onChange={() => handdleFilter(filter.title)}
      />
      {filter.title}
    </label>
  );
}
