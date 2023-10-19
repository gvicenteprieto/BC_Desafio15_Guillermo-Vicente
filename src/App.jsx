import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Products />
        <Footer />
      </div>
    </>
  );
}

export default App;
