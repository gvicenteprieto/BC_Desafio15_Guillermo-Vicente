import CartButton from "../Cart/CartButton";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Navbar = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <nav className="Navbar">
      <h2>Desafío 15</h2>
      <h3>Aplicación de Productos</h3>
      <div className="cart-counter">
        <CartButton />
        <div className="cart-counter-number">
          <p>{
          totalItems()
          }</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;