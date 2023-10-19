/* eslint-disable react/prop-types */
import ProductsCard  from "./ProductsCard";
// import ProductsTable from "./ProductsTable";


const ProductsList = ({ products, deleteProduct, setUpdateProduct }) => {


  return (
    <div className="products-list">
      {products.length === 0 ? (
        <h3>No hay productos registrados</h3>
      ) : (
        <>
        <h3>Productos</h3>
        <div className="Products">
          {products.map((product) => (
            <ProductsCard
              key={product.name}
              product={product}
              deleteProduct={deleteProduct}
              setUpdateProduct={setUpdateProduct}
            />
          ))}
        </div>
        {/* <div className="ProductsTable">
 <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductsTable
                key={product.name}
                product={product}
                deleteProduct={deleteProduct}
                setUpdateProduct={setUpdateProduct}
              />
            ))}
          </tbody>


        </table> 
        </div> */}
        <div>
          <h3>Total de productos: {products.length}</h3>
        </div>
        </>
      )}
    </div>
  );
};

export default ProductsList;
