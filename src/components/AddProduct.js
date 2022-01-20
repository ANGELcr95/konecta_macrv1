import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import addProduct from "../services/addProduct";


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (productSendAdd) => {

        // const putFunc = async () => {
        const promiseAddProduct = await addProduct(productSendAdd);
        // };
        // putFunc();
        if (promiseAddProduct.status === 200) {
            reset()

          Swal.fire({
            title: "Producto Agregado",
            icon: "success",
            text: "Puedes seguir agragegando productos",
            confirmButtonText: "Aceptar",
          })
        } else {
          Swal.fire({
            title: "Error, intentalo de nuevo",
            icon: "warning",
            confirmButtonText: "Aceptar",
          });
        }
      };

  return (
    <div>
      <NavigationBar />
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h1>Agregar Producto</h1>
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
                  {...register("nombre", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="referencia">Referencia:</label>
                <input
                  className="form-control"
                  placeholder="Referencia"
                  type="text"
                  id="referencia"

                  {...register("referencia", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="precio">Precio:</label>
                <input
                  className="form-control"
                  placeholder="Precio"
                  type="number"
                  id="precio"

                  {...register("precio", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="peso">Peso:</label>
                <input
                  className="form-control"
                  placeholder="Peso"
                  type="number"
                  id="peso"

                  {...register("peso", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="categoria">Categoria:</label>
                <input
                  className="form-control"
                  placeholder="Categoria"
                  type="text"
                  id="categoria"

                  {...register("categoria", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="stock">Stock:</label>
                <input
                  className="form-control"
                  placeholder="Stock"
                  type="number"
                  id="stock"

                  {...register("stock", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="fecha">Fecha:</label>
                <input
                  className="form-control"
                  placeholder="Fecha"
                  type="date"
                  id="fecha"
                  {...register("fecha", { required: true })}
                />
              </div>
              <div>
                <button className="btn btn-success mt-2" type="submit">
                  Agregar
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
    </div>
  );
};

export default AddProduct;
