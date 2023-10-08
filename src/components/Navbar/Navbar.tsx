import { useState } from "react";
import { SearchInput } from "../Input/Input";
import LoginModal from "../LoginModal/LoginModal";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { bellIcon, cartIcon, personIcon } from "../../assets";
import RegisterModal from "../RegisterModal/RegisterModal";
import CartModal from "../CartModal/CartModal";

export function Navbar() {
  const navlinks = [
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
  ];

  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false);
  const [showCartModal, setShowCartModal] = useState<boolean>(false);
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
            />
          }
          <div className="nav-icons">
            {navlinks.map((link) => (
              <a key={link.id} onClick={link.onClick}>
                <img
                  src={link.icon}
                  className="w-6 h-6 invert"
                  alt={link.title}
                />
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
