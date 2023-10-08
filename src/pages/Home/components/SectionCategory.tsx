import { Category } from "../../../components/Category/Category";
import { categories } from "../../../constants";

export const SectionCategory = () => {
  return (
    <section className="m-7">
      <h4 className="text-lg font-normal text-black left-0">
        Categorias que te pueden interesar
      </h4>
      <div className="flex flex-row flex-wrap items-center justify-center gap-2">
        {categories.map((category) => (
          <Category
            key={category.id}
            title={category.title}
            imgUrl={category.img}
            to={category.to}
          />
        ))}
      </div>
    </section>
  );
};
