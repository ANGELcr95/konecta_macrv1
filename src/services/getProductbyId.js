import Config from "../Config";

const getProductbyId = async (id) => {
  try {
    const promiseGetProductsbyId = await fetch(
      `${Config.ROUTE_API}/obtener_producto.php?id=${id}`
    );
    return promiseGetProductsbyId;
  } catch (err) {
    console.log(err);
  }
};

export default getProductbyId;
