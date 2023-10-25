import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // preparar campo stock en products en productsContext
    item.stock = cart.find((i) => i.id === item.id)
      ? item.stock
      : item.stock - 1;
    item.quantity = cart.find((i) => i.id === item.id) ? item.quantity + 1 : 1;
    const newCart = cart.filter((i) => i.id !== item.id);
    setCart([...newCart, item]);
    toast.success("Producto agregado al carrito.");
  };

  const removeItem = (id) => {
    if (cart.find((item) => item.id === id).quantity > 1) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          item.quantity = item.quantity - 1;
          item.stock = item.stock + 1;
        }
        return item;
      });
      setCart(newCart);
      toast.warning("Producto eliminado del carrito.");
    } else if (cart.find((item) => item.id === id).quantity === 1) {
      const newCart = cart.filter((item) => item.id !== id);
      setCart(newCart);
      toast.warning("Producto eliminado del carrito.");
    }
  };

  const clearCart = () => {
    setCart([]);
    toast.info("Carrito vaciado.");
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
        totalItems,
        totalCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
