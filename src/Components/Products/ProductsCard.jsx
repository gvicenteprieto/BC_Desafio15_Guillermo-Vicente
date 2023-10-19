/* eslint-disable react/prop-types */
const ProductsCard = ({ product, deleteProduct, setUpdateProduct }) => {
  return (
    <div className="Product" key={product.name}>
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p>$ {product.price}</p>
      <div className="buttons-container">
        <button
          className="delete-button"
          onClick={() => deleteProduct(product.name)}
        >
          Eliminar
        </button>

        <button
          className="edit-button"
          onClick={() => setUpdateProduct(product)}
        >
          Actualizar
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
