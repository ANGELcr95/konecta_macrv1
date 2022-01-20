import { Link } from "react-router-dom";
import { useEffect } from "react";
import getSales from "../services/getSales";
import { useState } from "react/cjs/react.development";
import NavigationBar from "./NavigationBar";
import TableProductsSale from "./SalesTotal/TableProductsSale";

const SalesTotal = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getFuncSales = async () => {
      const promiseGetSales = await getSales();
      const salesPromise = await promiseGetSales.json();
      console.log(salesPromise);
      setSales(salesPromise);
    };
    getFuncSales();
  }, []);

  const renderTableProducts = sales.map((sale) => (
    <TableProductsSale sale={sale} />
  ));

  return (
    <div>
      <div className="container">
        <NavigationBar />
        <div className="card">
          <div className="card-body">
            <h1 style={{ color: "green" }}>Productos Vendidos</h1>
            <div className="TableProducts">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Nombre Producto</th>
                    <th>Und(s) Vendidas</th>
                    <th>Precio</th>
                    <th>Ingreso por venta</th>
                  </tr>
                </thead>
                <tbody>{renderTableProducts}</tbody>
              </table>
            </div>
            <div>
              <Link to="/" className="btn btn-primary mt-2">
                Volver
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesTotal;
