import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";
import { CartProvider} from "./Context/CartContext";
import { ProductProvider } from "./Context/ProductContext";
function App() {
  return (
    <>
      <div className="App">
        <ProductProvider>
          <CartProvider>
            <Navbar />
            <Products />
            <Footer />
          </CartProvider>
        </ProductProvider>
      </div>
    </>
  );
}

export default App;
