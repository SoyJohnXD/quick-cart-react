import { Link } from "react-router-dom";
import { Anchor } from "../../types";

export function Anchor({ title, classAnchor, onClick, isLink, to }: Anchor) {
  return (
    <>
      {isLink ? (
        <Link
          to={to || ""}
          className={`${classAnchor}  text-orange-600 hover:underline cursor-pointer`}
          onClick={onClick}
        >
          {title}
        </Link>
      ) : (
        <a
          className={`text-xs text-orange-600 hover:underline cursor-pointer ${classAnchor}`}
          onClick={onClick}
        >
          {title}
        </a>
      )}
    </>
  );
}
