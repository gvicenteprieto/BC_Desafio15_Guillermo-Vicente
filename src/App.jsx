import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";
import { CartProvider } from "./Context/CartContext";
import { ProductProvider } from "./Context/ProductContext";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <ProductProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Products />} />
            </Routes>
            <Footer />
          </CartProvider>
        </ProductProvider>
        <Routes>
          <Route path="*" element={<h1>Este enlace no pertenece a la aplicación</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;