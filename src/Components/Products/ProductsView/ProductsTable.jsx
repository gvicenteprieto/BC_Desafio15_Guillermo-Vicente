import ProductsTableBody from "./ProductsTableBody";
const ProductsTable = ({ products, deleteProduct, setUpdateProduct }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <ProductsTableBody
          products={products}
          deleteProduct={deleteProduct}
          setUpdateProduct={setUpdateProduct}
        />
      </tbody>
    </table>
  );
};

export default ProductsTable;