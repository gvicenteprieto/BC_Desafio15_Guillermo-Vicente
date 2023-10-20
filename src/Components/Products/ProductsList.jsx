import ProductsCard from "./ProductsCard";
import ProductsTable from "./ProductsTable";

import { useState } from "react";

const ProductsList = ({
  products,
  deleteProduct,
  setUpdateProduct,
  loading,
}) => {
  const [listType, setListType] = useState("table");

  const handleListType = (e) => {
    setListType(e);
  };

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

                <div className="listType-buttons">
                  <button value="table" onClick={() => handleListType("table")}>
                    Vista Tabla
                  </button>
                  <button value="card" onClick={() => handleListType("card")}>
                    Vista Tarjetas
                  </button>
                </div>

                {listType === "table" ? (
                  <div className="ProductsTable">
                    <ProductsTable
                      products={products}
                      deleteProduct={deleteProduct}
                      setUpdateProduct={setUpdateProduct}
                    />
                  </div>
                ) : (
                  <div className="ProductsCard">
                    {products.map((product) => (
                      <ProductsCard
                        key={product.name}
                        product={product}
                        deleteProduct={deleteProduct}
                        setUpdateProduct={setUpdateProduct}
                      />
                    ))}
                  </div>
                )}

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
