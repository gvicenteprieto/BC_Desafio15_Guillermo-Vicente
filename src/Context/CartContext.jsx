import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

const CartProvider= ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    toast.success("Producto agregado al carrito.");
  };

  const removeItem = (id) => {
    // cart.filter(item => item.id !== id)
    // setCart([...cart, item]);
    //const item = cart.find((item) => item.id === id);
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    toast.warning("Producto eliminado del carrito.");

  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.find((item) => item.id === id);
  };

  const totalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const totalCart = () => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart,
        isInCart,
        totalItems,
        totalCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
