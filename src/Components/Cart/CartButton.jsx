import { FaCartShopping } from "react-icons/fa6";
import { CgCloseO } from "react-icons/cg";
import { FaTrash } from "react-icons/fa6";
import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartButton = () => {
  const { cart, setCart, clearCart, removeItem, totalItems, totalCart } =
    useContext(CartContext);

  const [isOpen, setIsOpen] = useState(false);

  const toogleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="cart-button-container">
      <FaCartShopping className="cartButton" onClick={toogleCart} />
      {isOpen && (
        <div className="cart">
          <CgCloseO className="close-button-cart" onClick={toogleCart} />
          <p className="cart-title">Carrito</p>
          {cart.length > 0 ? (
            <>
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <h4>{item.name}</h4>
                  <p>Precio: $ {item.price}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <button
                    className="remove-button"
                    onClick={() => removeItem(item.id)}
                  >
                    <FaTrash /> Quitar producto
                  </button>
                </div>
              ))}
              <p className="cart-title">Total Productos: {totalItems()}</p>
              <p className="cart-title">Total: $ {totalCart()}</p>
              <button className="clear-button" onClick={() => clearCart()}>
                <FaRegTrashCan className="clear-button" />
                Limpiar carrito
              </button>
            </>
          ) : (
            <p>No hay productos en el carrito</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CartButton;
