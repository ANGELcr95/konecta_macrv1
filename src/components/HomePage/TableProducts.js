import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import deleteProducts from "../../services/deleteProducts";

const TableProducts = ({ products, setFlag }) => {
  const navigate = useNavigate();

  const deleteProduct = async () => {
    const response = await Swal.fire({
      title: "Confirmación",
      text: `¿Eliminar "${products.nombre}"?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3298dc",
      cancelButtonColor: "#f14668",
      cancelButtonText: "No",
      confirmButtonText: "Sí, eliminar",
    });
    if (!response.value) {
      return;
    }
    const promiseDeleteProducts = await deleteProducts(products.id);
    if (promiseDeleteProducts.status === 200) {
      setFlag(true);
      Swal.fire({
        title: "Producto Eliminado",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    } else {
      Swal.fire({
        title: "Producto Eliminado",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  const editProduct = (products) => {
    const product = {
      id: products.id,
      nombre: products.nombre,
      referencia: products.referencia,
      precio: products.precio,
      peso: products.peso,
      categoria: products.categoria,
      stock: products.stock,
      fecha: products.fecha,
    };

    localStorage.setItem("product", JSON.stringify(product));
    navigate(`/producto/editar/${products.id}`);
  };

  const sellProduct = () => {
    if (products.stock > 0) {
      const sellproducts = {
        id: products.id,
      };
      localStorage.setItem("sellproducts", JSON.stringify(sellproducts));

      navigate(`/venta/${products.id}`);
    } else {
      Swal.fire({
        title: "No hay suficiente Stock",
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <tr>
      <>
        <td>{products.nombre}</td>
        <td>{products.referencia}</td>
        <td>{products.precio}</td>
        <td>{products.peso}</td>
        <td>{products.categoria}</td>
        <td>{products.stock}</td>
        <td>{products.fecha}</td>
        <td>
          <button
            onClick={() => editProduct(products)}
            className="btn btn-info mt-2"
          >
            Editar
          </button>
        </td>
        <td>
          <button onClick={deleteProduct} className="btn btn-danger mt-2">
            Eliminar
          </button>
        </td>
        <td>
          <button onClick={sellProduct} className="btn btn-success mt-2">
            Vender
          </button>
        </td>
      </>
    </tr>
  );
};

export default TableProducts;
