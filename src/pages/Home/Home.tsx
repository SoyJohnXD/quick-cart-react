import { useState, useEffect } from "react";
import { banners, products as allProducts } from "../../constants";
import { Banner } from "../../components/Banner/Banner";
import { SectionCategory } from "./components/SectionCategory";
import { Anchor } from "../../components/Anchor/Anchor";
import { ListProduct } from "../../components/ListProducts/ListProduct";
import { product } from "../../types";

export function Home() {
  const [products, setProducts] = useState<product[]>([]);
  useEffect(() => {
    setProducts(
      allProducts.filter((producto) =>
        producto.variants.some((variante) => variante.is_outstanding)
      )
    );
  }, []);

  return (
    <main className="mt-9">
      <Banner
        imgUrl={banners.find((banner) => banner.page === "Home")?.imgUrl || ""}
      />
      <SectionCategory />

      <section className="m-7">
        <div className="flex flex-row justify-between">
          <h4 className="text-lg font-normal text-black left-0">Destacados</h4>
          <Anchor
            title="Ver todos"
            isLink
            to="/products"
            classAnchor="text-md"
          />
        </div>
        <ListProduct products={products} />
      </section>
    </main>
  );
}
