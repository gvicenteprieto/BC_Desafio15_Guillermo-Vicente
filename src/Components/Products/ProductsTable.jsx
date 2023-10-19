/* eslint-disable react/prop-types */
const ProductsTable = ({ product, deleteProduct, setUpdateProduct }) => {
  return (
   <div className="ProductTable" key={product.name}>

            <tr>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
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
            </td>
            </tr>


    </div>
  )
}

export default ProductsTable