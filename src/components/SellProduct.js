import NavigationBar from "./NavigationBar";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2";
import editProductSell from "../services/editProductSell";
import getProductbyId from "../services/getProductbyId";
import addSell from "../services/addSell";

const SellProduct = () => {
  const [id, setId] = useState();
  const [nombre, setNombre] = useState();
  const [referencia, setReferencia] = useState();
  const [precio, setPrecio] = useState();
  const [peso, setPeso] = useState();
  const [categoria, setCategoria] = useState();
  const [stock, setStock] = useState();
  const [fecha, setFecha] = useState();
  const { register, handleSubmit, reset } = useForm();

  function createData(
    nombre,
    referencia,
    precio,
    peso,
    categoria,
    stock,
    fecha
  ) {
    return { nombre, referencia, precio, peso, categoria, stock, fecha };
  }

  useEffect(() => {
    const getProductSell = JSON.parse(localStorage.getItem("sellproducts"));
    const idLocal = getProductSell.id;

    const getFuncId = async () => {
      const promiseGetProductId = await getProductbyId(idLocal);
      const productsIdPromise = await promiseGetProductId.json();

      console.log(productsIdPromise);
      setId(productsIdPromise.id);
      setNombre(productsIdPromise.nombre);
      setReferencia(productsIdPromise.referencia);
      setPrecio(productsIdPromise.precio);
      setPeso(productsIdPromise.peso);
      setCategoria(productsIdPromise.categoria);
      setStock(productsIdPromise.stock);
      setFecha(productsIdPromise.fecha);

      createData(
        productsIdPromise.nombre,
        productsIdPromise.referencia,
        productsIdPromise.precio,
        productsIdPromise.peso,
        productsIdPromise.categoria,
        productsIdPromise.stock,
        productsIdPromise.fecha
      );
    };
    getFuncId();
  }, []);

  const rows = [
    createData(nombre, referencia, precio, peso, categoria, stock, fecha),
  ];

  const onSubmit = async (cantidad) => {
    const amountTotal = stock - cantidad.cantidad;
    if (amountTotal >= 0) {
      const productEditStock = {
        id: id,
        stock: amountTotal,
      };

      const ingresos = precio * cantidad.cantidad;

      const productSellAdd = {
        nombre: nombre,
        uds_vendidas: cantidad.cantidad,
        precio: precio,
        ingresos: ingresos,
      };
      const promiseEditStock = await editProductSell(productEditStock);
      const promiseAddSell = await addSell(productSellAdd);
      if (promiseEditStock.status === 200 && promiseAddSell.status === 200) {
        Swal.fire({
          title: `Venta Realizada`,
          text: `Haz vendido ${cantidad.cantidad} Uds del producto ${nombre}`,
          icon: "success",
          confirmButtonText: "Aceptar",
        });
        setStock(amountTotal);
        reset();
      }
    } else {
      Swal.fire({
        title: `No hay suficiente Stock`,
        text: `Tu stock es ${stock}`,
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
      reset();
    }
  };

  return (
    <div>
      <div className="container">
        <NavigationBar />
        <div className="card">
          <div className="card-body">
            <h1 style={{ color: "green" }}>Venta {nombre}</h1>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre Producto</TableCell>
                    <TableCell align="right">Referencia</TableCell>
                    <TableCell align="right">Precio Unit&nbsp;($)</TableCell>
                    <TableCell align="right">Peso&nbsp;(kg)</TableCell>
                    <TableCell align="right">Categoria</TableCell>
                    <TableCell style={{ color: "green" }} align="right">
                      Stock&nbsp;(Uds)
                    </TableCell>
                    <TableCell align="right">Fecha</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.nombre}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.nombre}
                      </TableCell>
                      <TableCell align="right">{row.referencia}</TableCell>
                      <TableCell align="right">{row.precio}</TableCell>
                      <TableCell align="right">{row.peso}</TableCell>
                      <TableCell align="right">{row.categoria}</TableCell>
                      <TableCell style={{ color: "green" }} align="right">
                        {row.stock}
                      </TableCell>
                      <TableCell align="right">{row.fecha}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <form
              className="col-md-6 offset-md-3 mt-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label htmlFor="undsell">Uds Vender:</label>
                <input
                  className="form-control"
                  placeholder="Uds Vender:"
                  type="number"
                  id="undsell"
                  {...register("cantidad", {
                    required: true,
                    pattern: /^\+?[1-9]\d*$/,
                  })}
                />
              </div>
              <div>
                <button className="btn btn-success mt-2" type="submit">
                  Vender
                </button>
                &nbsp;
                <Link to="/" className="btn btn-primary mt-2">
                  Inicio
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellProduct;
