import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import { useForm } from "react-hook-form";
import editProduct from "../services/editProduct";
import Swal from "sweetalert2";
import NavigationBar from "./NavigationBar";

const EditProduct = () => {
  const { handleSubmit } = useForm();

  const [id, setId] = useState();
  const [nombre, setNombre] = useState();
  const [referencia, setReferencia] = useState();
  const [precio, setPrecio] = useState();
  const [peso, setPeso] = useState();
  const [categoria, setCategoria] = useState();
  const [stock, setStock] = useState();
  const [fecha, setFecha] = useState();

  const changeValueName = (e) => {
    setNombre(e.target.value);
  };

  const changeValueReferencia = (e) => {
    setReferencia(e.target.value);
  };

  const changeValuePrecio = (e) => {
    setPrecio(e.target.value);
  };

  const changeValuePeso = (e) => {
    setPeso(e.target.value);
  };

  const changeValueCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const changeValueStock = (e) => {
    setStock(e.target.value);
  };

  const changeValueFecha = (e) => {
    setFecha(e.target.value);
  };

  useEffect(() => {
    const getProduct = JSON.parse(localStorage.getItem("product"));
    setId(getProduct.id);
    setNombre(getProduct.nombre);
    setReferencia(getProduct.referencia);
    setPrecio(getProduct.precio);
    setPeso(getProduct.peso);
    setCategoria(getProduct.categoria);
    setStock(getProduct.stock);
    setFecha(getProduct.fecha);
  }, []);

  const navigate = useNavigate();

  const onSubmit = async () => {
    const productSendEdited = {
      "id": id,
      "nombre": nombre,
      "referencia": referencia,
      "precio": precio,
      "peso": peso,
      "categoria": categoria,
      "stock": stock,
      "fecha": fecha,
    };

    const promiseEditProduct = await editProduct(productSendEdited);

    if (promiseEditProduct.status === 200) {
      Swal.fire({
        title: "Producto Editado",
        icon: "success",
        confirmButtonText: "Aceptar",
      }).then(() => {
        navigate(`/`);
      });
    } else {
      Swal.fire({
        title: "Error, intentalo de nuevo",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <div className="container">
      <NavigationBar />
      <div className="card">
        <div className="card-body">
          <h1>Editar Producto</h1>
          <form
            className="col-md-6 offset-md-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label htmlFor="nombre">Nombre:</label>
              <input
                className="form-control"
                placeholder="Nombre"
                type="text"
                id="nombre"
                value={nombre}
                onChange={changeValueName}
              />
            </div>
            <div>
              <label htmlFor="referencia">Referencia:</label>
              <input
                className="form-control"
                placeholder="Referencia"
                type="text"
                id="referencia"
                value={referencia}
                onChange={changeValueReferencia}
              />
            </div>
            <div>
              <label htmlFor="precio">Precio:</label>
              <input
                className="form-control"
                placeholder="Precio"
                type="number"
                id="precio"
                value={precio}
                onChange={changeValuePrecio}
              />
            </div>
            <div>
              <label htmlFor="peso">Peso:</label>
              <input
                className="form-control"
                placeholder="Peso"
                type="number"
                id="peso"
                value={peso}
                onChange={changeValuePeso}
              />
            </div>
            <div>
              <label htmlFor="categoria">Categoria:</label>
              <input
                className="form-control"
                placeholder="Categoria"
                type="text"
                id="categoria"
                value={categoria}
                onChange={changeValueCategoria}
              />
            </div>
            <div>
              <label htmlFor="stock">Stock:</label>
              <input
                className="form-control"
                placeholder="Stock"
                type="number"
                id="stock"
                value={stock}
                onChange={changeValueStock}
              />
            </div>
            <div>
              <label htmlFor="fecha">Fecha:</label>
              <input
                className="form-control"
                placeholder="Fecha"
                type="date"
                id="Fecha"
                value={fecha}
                onChange={changeValueFecha}
              />
            </div>
            <div>
              <button className="btn btn-success mt-2" type="submit">
                Guardar
              </button>
              &nbsp;
              <Link to="/" className="btn btn-primary mt-2">
                Volver
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
