import { ListProduct } from "../../types";
import { CardProduct } from "../CardProdcut/CardProduct";
import "./ListProduct.css";

export function ListProduct({ products }: ListProduct) {
  return (
    <div className="category-products">
      {products.map((product, index) => (
        <CardProduct key={`product-${index}`} {...product} />
      ))}
    </div>
  );
}
