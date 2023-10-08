import { Link } from "react-router-dom";
import { Category } from "../../types";
import "./Category.css";

export function Category({ title, imgUrl, to }: Category) {
  return (
    <Link to={to}>
      <div className="category">
        <img className="w-auto h-auto" src={imgUrl} alt={title} />
        <p>{title}</p>
      </div>
    </Link>
  );
}
