import { useEffect, useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";

const ProductsForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(false);

  const { addProduct,
    editProduct,
    updateProduct,
    setUpdateProduct,
    setErrorLoad } = useContext(ProductContext);

  useEffect(() => {
    if (updateProduct) {
      setName(updateProduct.name);
      setDescription(updateProduct.description);
      setPrice(updateProduct.price);
    } else {
      setName("");
      setDescription("");
      setPrice("");
    }
  }, [updateProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = { name, description, price };

    if (updateProduct) {
      editProduct(updateProduct.name, product);
    } else {
      addProduct(product);
    }
    setTimeout(() => {
      handleReset(e);
    }, 1000);
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "description") {
      setDescription(e.target.value);
    } else if (e.target.name === "price") {
      setPrice(e.target.value);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setName("");
    setDescription("");
    setPrice("");
    setError(false);
    setErrorLoad(false);
    setUpdateProduct(null);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Nombre del producto"
      />
      <label htmlFor="description">Descripción</label>
      <input
        type="text"
        id="description"
        name="description"
        value={description}
        onChange={handleChange}
        placeholder="Descripción del producto"
      />
      <label htmlFor="price">Precio</label>
      <input
        type="number"
        id="price"
        name="price"
        value={price}
        onChange={handleChange}
        placeholder="Precio del producto"
      />
      {updateProduct ? (
        <div className="form-buttons buttons-container">
          <button type="submit" className="edit-button">
            Actualizar Producto
          </button>
          <button type="reset" className="reset-button" onClick={handleReset}>
            Limpiar Formulario
          </button>
        </div>
      ) : (
        <>
        <button type="submit" className="add-button">
          Agregar Producto
        </button>
       </>
      )}
    </form>
  );
};

export default ProductsForm;