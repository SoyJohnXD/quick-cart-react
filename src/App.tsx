import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products";
import { Footer } from "./components/Footer/Footer";
import Product from "./pages/_Product";
import { useAppSelector } from "./hook/store";

function App() {
  const Auth = useAppSelector((state) => state.auth);
  return (
    <>
      <Navbar auth={Auth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:product" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
