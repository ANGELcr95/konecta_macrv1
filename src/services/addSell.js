import Config from "../Config";

const addSell = async (productSendAdd) => {
    console.log(productSendAdd)
    const usefulLoad = JSON.stringify(productSendAdd);

    const promiseProductAdd = await fetch(
      `${Config.ROUTE_API}/agregar_venta.php`,
      {
        method: "POST",
        body: usefulLoad,
      }
    );
    console.log(promiseProductAdd)

    return promiseProductAdd;

};
export default addSell;
