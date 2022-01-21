import getProducts from "../services/getProducts";
import NavigationBar from "./NavigationBar";
import TableProducts from "./HomePage/TableProducts";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import getMaxSale from "../services/getMaxSale";
import { useEffect, useState } from "react/cjs/react.development";
import getMaxStock from "../services/getMaxStock";
import "../styles/HomePage.css";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [flag, setFlag] = useState();
  const [nombre, setNombre] = useState();
  const [udsVendidas, setUdsVendidas] = useState();
  const [precio, setPrecio] = useState();
  const [ingresos, setIngresos] = useState();

  const [nombreStock, setNombreStock] = useState(null);
  const [referenciaStock, setReferenciaStock] = useState(null);
  const [precioStock, setPrecioStock] = useState(null);
  const [pesoStock, setPesoStock] = useState(null);
  const [categoriaStock, setCategoriaStock] = useState(null);
  const [maxStock, setMaxStock] = useState(null);
  const [fechaStock, setFechaStock] = useState(null);

  useEffect(() => {
    const getFunc = async () => {
      const promiseGetProducts = await getProducts();
      const promiseGetMaxSale = await getMaxSale();
      const promiseGetMaxStock = await getMaxStock();
      const productsPromise = await promiseGetProducts.json();
      const productMaxSale = await promiseGetMaxSale.json();
      const productMaxStock = await promiseGetMaxStock.json();

      setFlag(false);
      if (productsPromise.length !== 0) {
        setProducts(productsPromise);
      } else {
        setProducts([]);
      }

      if (productMaxSale.length !== 0) {
        setNombre(productMaxSale[0].nombre);
        setUdsVendidas(productMaxSale[0].uds_vendidas);
        setPrecio(productMaxSale[0].precio);
        setIngresos(productMaxSale[0].ingresos);
      }

      if (productMaxStock.length !== 0) {
        setNombreStock(productMaxStock[0].nombre);
        setReferenciaStock(productMaxStock[0].referencia);
        setPrecioStock(productMaxStock[0].precio);
        setPesoStock(productMaxStock[0].peso);
        setCategoriaStock(productMaxStock[0].categoria);
        setMaxStock(productMaxStock[0].stock);
        setFechaStock(productMaxStock[0].fecha);
      } else {
        setNombreStock(null);
        setReferenciaStock(null);
        setPrecioStock(null);
        setPesoStock(null);
        setCategoriaStock(null);
        setMaxStock(null);
        setFechaStock(null);
      }
    };
    getFunc();
  }, [flag]);

  const renderTableProducts = products.map((products) => (
    <TableProducts key={products.id} products={products} setFlag={setFlag} />
  ));

  return (
    <div className="container">
      <div className="mb-5 mt-3">
        <h2>Producto mas Vendido</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre Producto</TableCell>
                <TableCell align="right">Uds Vendidas</TableCell>
                <TableCell align="right">Precio de Venta</TableCell>
                <TableCell align="right">Ingresos</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                key={nombre}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {nombre}
                </TableCell>
                <TableCell align="right">{udsVendidas}</TableCell>
                <TableCell align="right">{precio}</TableCell>
                <TableCell align="right">{ingresos}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className="mb-5">
        <h2>Producto con mayor Stock</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre Producto</TableCell>
                <TableCell align="right">Referencia</TableCell>
                <TableCell align="right">Precio Unit&nbsp;($)</TableCell>
                <TableCell align="right">Peso&nbsp;(kg)</TableCell>
                <TableCell align="right">Categoria</TableCell>
                <TableCell align="right">Stock&nbsp;(Uds)</TableCell>
                <TableCell align="right">Fecha</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                key={nombreStock}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {nombreStock}
                </TableCell>
                <TableCell align="right">{referenciaStock}</TableCell>
                <TableCell align="right">{precioStock}</TableCell>
                <TableCell align="right">{pesoStock}</TableCell>
                <TableCell align="right">{categoriaStock}</TableCell>
                <TableCell align="right">{maxStock}</TableCell>
                <TableCell align="right">{fechaStock}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>

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
      <footer>
        <p>
          @ Realizado por Ing. Miguel Angel Camacho para la empresa Konecta.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
