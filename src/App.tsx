import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products";
import { Footer } from "./components/Footer/Footer";
import Product from "./pages/_Product";
import { useAppSelector } from "./hook/store";
import { AdminPanel } from "./pages/AdminPanel/AdminPanel";
import ManageProducts from "./pages/ManageProducts";

function App() {
  const Auth = useAppSelector((state) => state.auth);
  return (
    <>
      <Navbar auth={Auth} />
      <Routes>
        {Auth.role === "client" ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<AdminPanel />} />
        )}
        <Route path="/products" element={<Products />} />
        <Route path="/product/:product" element={<Product />} />
        {Auth.role === "admin" && (
          <Route path="/manage-products" element={<ManageProducts />} />
        )}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
