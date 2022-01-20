import Config from "../Config";

const addProduct = async (productSendAdd) => {
    console.log(productSendAdd)
    const usefulLoad = JSON.stringify(productSendAdd);

    const promiseProductAdd = await fetch(
      `${Config.ROUTE_API}/agregar_producto.php`,
      {
        method: "POST",
        body: usefulLoad,
      }
    );
    console.log(promiseProductAdd)

    return promiseProductAdd;

};
export default addProduct;
