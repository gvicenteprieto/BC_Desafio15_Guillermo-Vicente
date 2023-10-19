/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const ProductsForm = ({
  addProduct,
  editProduct,
  updateProduct,
  setUpdateProduct,
  errorLoad,
  setErrorLoad,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(false);

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

    if (!name.trim() || !description.trim() || !price.trim()) {
      setError(true);
      return;
    }

    const product = { name, description, price };

    if (updateProduct) {
      editProduct(updateProduct.name, product);
      setError(false);
      setErrorLoad(false);
      console.log("producto editado" + product);
    } else {
      addProduct(product);
      setError(false);
      setErrorLoad(false);
      console.log("producto agregado" + product);
    }
    // setErrorLoad(false);
    // setError(false);
    localStorage.setItem("products", JSON.stringify(product));
    handleReset(e);
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
        type="text"
        id="price"
        name="price"
        value={price}
        onChange={handleChange}
        placeholder="Precio del producto"
      />

      {updateProduct ? (
        <div className="form">
          <button type="submit" className="edit-button">
            Editar
          </button>
          <button type="reset" className="reset-button" onClick={handleReset}>
            Limpiar
          </button>
        </div>
      ) : (
        <button type="submit" className="add-button">
          Agregar
        </button>
      )}
      {error && <p className="error">Todos los campos son obligatorios</p>}
      {errorLoad && <p className="error">El Producto ya está registrado</p>}
    </form>
  );
};

export default ProductsForm;
