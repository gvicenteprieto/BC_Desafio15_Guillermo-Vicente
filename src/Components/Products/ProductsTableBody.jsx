const ProductsTableRows = ({ products, deleteProduct, setUpdateProduct }) => {
  return (
    <>
      {products.map((product) => (
        <tr key={product.name}>
          <td>{product.name}</td>
          <td>{product.description}</td>
          <td>$ {product.price}</td>
          <td>
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
          </td>
        </tr>
      ))}
    </>
  );
};

export default ProductsTableRows;
