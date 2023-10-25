import { FaTrash, FaCartShopping } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { useContext } from "react";
import { ProductContext } from "../../../Context/ProductContext";
import { CartContext } from "../../../Context/CartContext";

const ProductsCard = ({ product }) => {
  
  const { deleteProduct, setUpdateProduct } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="Product">
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p>$ {product.price}</p>
      <div className="buttons-container">
        <button
          className="delete-button"
          onClick={() => deleteProduct(product.name)}
        >
          <FaTrash />
        </button>

        <button>
          <FaCartShopping onClick={() => addToCart(product)} />
        </button>

        <button
          className="edit-button"
          onClick={() => setUpdateProduct(product)}
        >
          <FaEdit />
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
