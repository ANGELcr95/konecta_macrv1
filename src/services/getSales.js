import Config from "../Config";

const getSales = async () => {
  const promiseGetSaless = await fetch(
    `${Config.ROUTE_API}/obtener_ventas.php`
  );
  return promiseGetSaless;
};

export default getSales;
