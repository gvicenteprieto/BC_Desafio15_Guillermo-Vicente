// import ProductsCard from "./ProductsCard";
import ProductsTable from "./ProductsTable";

const ProductsList = ({
  products,
  deleteProduct,
  setUpdateProduct,
  loading,
}) => {
  return (
    <>
      <div>
        {loading === false ? (
          <h3>Cargando datos...</h3>
        ) : (
          <div className="products-list">
            {loading === true && products.length === 0 ? (
              <h3>No hay productos registrados</h3>
            ) : (
              <>
                <h3>Lista de Productos</h3>
                {/* <div className="Products">
                  {products.map((product) => (
                    <ProductsCard
                      key={product.name}
                      product={product}
                      deleteProduct={deleteProduct}
                      setUpdateProduct={setUpdateProduct}
                    />
                  ))}
                </div> */}

                <div className="ProductsTable">
                  <ProductsTable
                    products={products}
                    deleteProduct={deleteProduct}
                    setUpdateProduct={setUpdateProduct}
                  />
                </div>

                <div>
                  <h3>Total de productos: {products.length}</h3>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsList;
