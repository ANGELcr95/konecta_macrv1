import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import getProducts from "../services/getProducts";
import NavigationBar from "./NavigationBar";
import TableProducts from "./HomePage/TableProducts";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getFunc = async () => {
      const promiseGetProducts = await getProducts();
      const productsPromise = await promiseGetProducts.json()

      console.log(productsPromise)
      setProducts(productsPromise)
    };
    getFunc();
  }, []);

  const renderTableProducts = products.map((products) => (
    <TableProducts products={products} />
  ));

  return (
    <div className="container">
      <NavigationBar />

      <div className="TableProducts">
        <table className="table table-bordered table-hover ">
          <thead>
            <tr>
              <th>Nombre Producto</th>
              <th>Referencia</th>
              <th>Precio Unit ($)</th>
              <th>Peso(kg)</th>
              <th>Categoria</th>
              <th>Stock(Und)</th>
              <th>Fecha Creacion</th>
            </tr>
          </thead>
          <tbody>{renderTableProducts}</tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
