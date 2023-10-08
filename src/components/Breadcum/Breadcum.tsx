import { Link, useLocation } from "react-router-dom";
import { routes } from "../../constants";

export default function Breadcum() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="bg-gray-100 rounded-lg p-3 flex items-center flex-wrap text-sm pt-4 px-5 opacity-70">
      <ul className="flex items-center">
        <li className="inline-flex items-center">
          <Link to="/" className="text-gray-600 hover:text-orange-500">
            Inicio
          </Link>
          <span className="mx-2 h-auto text-gray-400 font-medium">/</span>
        </li>

        {pathnames.map((path: string, index: number) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const routeName = routes[routeTo];
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <li key={path} className="inline-flex items-center">
              <span className="mx-2 h-auto text-gray-600">{routeName}</span>
            </li>
          ) : (
            <li key={path} className="inline-flex items-center">
              <Link
                to={routeTo}
                className="text-gray-600 hover:text-orange-500"
              >
                {routeName}
              </Link>
              <span className="mx-2 h-auto text-gray-400 font-medium">/</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
