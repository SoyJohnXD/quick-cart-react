import { productsImg, usersImg } from "../../assets";
import { Link } from "react-router-dom";

export function AdminPanel() {
  const CARDS = [
    {
      urlImg: productsImg,
      title: "Gestion de Productos",
      description:
        "Administra inventarios, precios y detalles de productos para una experiencia de compra eficiente.",
      to: "/manage-products",
    },
    {
      urlImg: usersImg,
      title: "Gestion de Usuarios",
      description:
        "Controla cuentas, permisos y datos de usuarios para una interacción segura y personalizada.",
      to: "/",
    },
  ];
  return (
    <div className="bg-slate-100 px-2 py-10 my-9 h-full">
      <div id="features" className="mx-auto max-w-6xl">
        <p className="text-center text-base font-light leading-7 text-primary-500">
          Gestiona
        </p>
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Panel de Administracion de la Tienda
        </h2>
        <ul className="mt-16 grid grid-cols-1 justify-center items-center gap-6 text-center text-slate-700 md:grid-cols-3">
          {CARDS.map((card) => (
            <Card {...card} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Card({ urlImg, title, description, to }: any) {
  return (
    <Link to={to}>
      <li className="rounded-xl bg-white px-6 py-8 shadow-sm h-60 hover:shadow-md cursor-pointer">
        <img src={urlImg} alt="" className="mx-auto h-10 w-10" />
        <h3 className="my-3 font-display font-medium">{title}</h3>
        <p className="mt-1.5 text-sm leading-6 text-secondary-500">
          {description}
        </p>
      </li>
    </Link>
  );
}
