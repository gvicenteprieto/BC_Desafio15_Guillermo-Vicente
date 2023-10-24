import ProductsForm from "./ProductsForm";
import ProductsList from "./ProductsList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = () => {
  
  return (
    <main className="Main">
      <header className="header">
        <h3>Formulario de Carga</h3>
      </header>
      <ProductsForm />
      <ProductsList />
      <ToastContainer />
    </main>
  );
};

export default Products;
