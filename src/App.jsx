import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";
// import { CartContext } from "./Context/CartContext";
import { ProductProvider } from "./Context/ProductContext";
function App() {
  return (
    <>
      <div className="App">
        <ProductProvider>
          <Navbar />
          <Products />
          <Footer />
        </ProductProvider>
      </div>
    </>
  );
}

export default App;
