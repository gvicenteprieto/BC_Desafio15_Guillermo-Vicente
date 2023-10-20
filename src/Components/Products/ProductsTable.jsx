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

//css:

// .ProductsTable {
//   border-collapse: collapse;
//   width: 100%;
// }

// .ProductsTable td,
// .ProductsTable th {
//   border: 1px solid #ddd;
//   padding: 8px;
// }

// .ProductsTable tr:nth-child(even) {
//   background-color: #f2f2f2;
// }
