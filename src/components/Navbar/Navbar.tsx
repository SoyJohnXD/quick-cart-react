import { useState } from "react";
import { SearchInput } from "../Input/Input";
import LoginModal from "../LoginModal/LoginModal";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import {
  bellIcon,
  cartIcon,
  clipsIcon,
  logedIcon,
  personIcon,
} from "../../assets";
import RegisterModal from "../RegisterModal/RegisterModal";
import CartModal from "../CartModal/CartModal";
import { Navbar } from "../../types";
import { useAuthActions } from "../../hook/useAuthActions";

export function Navbar({ auth }: Navbar) {
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false);
  const [showCartModal, setShowCartModal] = useState<boolean>(false);
  const [showUserTool, setShowUserTool] = useState<boolean>(false);
  const history = useNavigate();
  const navlinks =
    auth.role === "admin"
      ? [
          {
            id: "users",
            title: "Gestionar usuarios",
            icon: personIcon,
            onClick: () => history("/"),
          },
          {
            id: "products",
            title: "Gestionar Productos",
            icon: clipsIcon,
            onClick: () => history("/manage-products"),
          },

          {
            id: "user",
            title: auth.name,
            icon: logedIcon,
            onClick: () => setShowUserTool(!showUserTool),
          },
        ]
      : [
          {
            id: "notify",
            title: "Notificaiones",
            icon: bellIcon,
          },
          {
            id: "cart",
            title: "Carrito de compra",
            icon: cartIcon,
            onClick: () => setShowCartModal(true),
          },
          {
            id: "login",
            title: "Inicia sesion",
            icon: personIcon,
            onClick: () => setShowLoginModal(true),
          },
          {
            id: "user",
            title: auth.name,
            icon: logedIcon,
            onClick: () => setShowUserTool(!showUserTool),
          },
        ];
  const { logoutUser } = useAuthActions();

  return (
    <>
      <header className="fixed z-50">
        <nav className="nav">
          <div className="logo">
            <div className="md:flex felx-row items-center hidden">
              <Link to="/">
                <h1 className="text-white text-[20px] font-bold">
                  Quick<span className="text-fresh-green">Cart</span>
                </h1>
              </Link>
            </div>
          </div>

          {
            <SearchInput
              name="search-nav"
              placeholder="Encuentra todo lo que buscas..."
              type="text"
              onChage={(): void => {}}
              whitIcon
              value=""
            />
          }
          <div className="nav-icons">
            {navlinks.map((link) => (
              <a
                className={link.id === "User" ? "relative" : ""}
                key={link.id}
                onClick={link.onClick}
                title={link.title}
              >
                <img
                  src={link.icon}
                  className={`w-6 h-6 invert ${
                    link.id === "login" && auth.email !== "" ? "hidden" : ""
                  } ${link.id === "user" && auth.email === "" ? "hidden" : ""}`}
                  alt={link.title}
                />
                {link.id === "user" && (
                  <ul
                    className={`absolute z-[1000] right-0 m-0 flex-col ${
                      showUserTool ? "flex" : "hidden"
                    } min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg  [&[data-te-dropdown-show]]:block`}
                  >
                    <li>
                      <a className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700  active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400  ">
                        {auth.name}
                      </a>
                    </li>
                    <li>
                      <a
                        className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400  "
                        onClick={() => {
                          logoutUser();
                          history("/");
                        }}
                      >
                        Cerrar sesion
                      </a>
                    </li>
                  </ul>
                )}
              </a>
            ))}
          </div>
        </nav>
      </header>
      <LoginModal
        show={showLoginModal}
        setShow={setShowLoginModal}
        setRegisterModalshow={setShowRegisterModal}
      />
      <RegisterModal show={showRegisterModal} setShow={setShowRegisterModal} />
      <CartModal show={showCartModal} setShow={setShowCartModal} />
    </>
  );
}
