import Config from "../Config";

const getProductbyId = async (id) => {
  const promiseGetProductsbyId = await fetch(
    `${Config.ROUTE_API}/obtener_producto.php?id=${id}`
  );
  return promiseGetProductsbyId;
};

export default getProductbyId;
