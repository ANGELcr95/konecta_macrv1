import Config from "../Config";

const deleteProducts = async (id) => {
  const promiseDelete = await fetch(
    `${Config.ROUTE_API}/eliminar_producto.php?id=${id}`,
    {
      method: "DELETE",
    }
  );
  return promiseDelete;
};

export default deleteProducts;
