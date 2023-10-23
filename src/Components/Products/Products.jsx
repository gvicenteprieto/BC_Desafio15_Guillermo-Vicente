import { useState, useEffect } from "react";
import ProductsForm from "./ProductsForm";
import ProductsList from "./ProductsList";
import { db } from "../../firebaseConexion";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [updateProduct, setUpdateProduct] = useState(null);
  const [errorLoad, setErrorLoad] = useState(false);
  const [loading, setLoading] = useState(false);

  const productsCollection = collection(db, "products");

  const getProducts = async () => {
    setLoading(false);
    const productsDataFirebase = await getDocs(productsCollection);
    if (productsDataFirebase) {
      productsDataFirebase.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .sort((a, b) => a.name.localeCompare(b.name));

      setProducts(
        productsDataFirebase.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .sort((a, b) => a.name.localeCompare(b.name))
      );
      setLoading(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getProducts();
    }, 1000);
  }, []);

  const addProduct = (product) => {
    const existProduct = products.find((p) => p.name === product.name);
    if (existProduct) {
      setErrorLoad(true);
      toast.error('El producto que intenta cargar ya existe!')
      return;
    }

    if (product.name.trim() === "" || product.description.trim() === "" || product.price.trim() === "") {
      toast.error('Todos los campos son obligatorios!')
      return;
    }
    addDoc(productsCollection, product);
    toast.success('Producto agregado con éxito!')
    getProducts();
  };

  const deleteProduct = async (name) => {
    setErrorLoad(false);
    const productsDataFirebase = await getDocs(productsCollection);
    const productDelete = productsDataFirebase.docs
      .map((doc) => ({ name: doc.data().name }))
      .filter((doc) => doc.name === name);

    const querySnapshot = await getDocs(productsCollection);
    querySnapshot.forEach((doc) => {
      if (doc.data().name === productDelete[0].name) {
        deleteDoc(doc.ref);
      }
    });
    toast.success('Producto eliminado con éxito!')
    getProducts();
  };

  const editProduct = async (name, product) => {
    const productsDataFirebase = await getDocs(productsCollection);
    const updatedProductFirebase = productsDataFirebase.docs
      .map((doc) => ({ name: doc.data().name }))
      .filter((doc) => doc.name === name);

    const querySnapshot = await getDocs(productsCollection);
    querySnapshot.forEach((doc) => {
      if (doc.data().name === updatedProductFirebase[0].name) {
        updateDoc(doc.ref, product);
      }
    });
    toast.success('Producto actualizado con éxito!')
    getProducts();
  };

  return (
    <main className="Main">
      <header className="header">
        <h3>Formulario de Carga</h3>
      </header>
      <ProductsForm
        addProduct={addProduct}
        editProduct={editProduct}
        updateProduct={updateProduct}
        errorLoad={errorLoad}
        setErrorLoad={setErrorLoad}
        setUpdateProduct={setUpdateProduct}
      />
      <ProductsList
        products={products}
        deleteProduct={deleteProduct}
        editProduct={editProduct}
        setUpdateProduct={setUpdateProduct}
        loading={loading}
        setLoading={setLoading}
      />
        <ToastContainer />
    </main>
  );
};

export default Products;
