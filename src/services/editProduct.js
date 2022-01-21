import Config from "../Config";

const editProduct = async (productSendEdited) => {
  const usefulLoad = JSON.stringify(productSendEdited);
  const promiseProductEdited = await fetch(
    `${Config.ROUTE_API}/actualizar_producto.php`,
    {
      method: "PUT",
      body: usefulLoad,
    }
  );
  console.log(promiseProductEdited);
  return promiseProductEdited;
};

export default editProduct;
