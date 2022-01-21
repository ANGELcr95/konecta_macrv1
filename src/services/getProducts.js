import Config from "../Config";

const getProducts = async () => {
  const promiseGetProducts = await fetch(
    `${Config.ROUTE_API}/obtener_productos.php`
  );
  return promiseGetProducts;
};

export default getProducts;
