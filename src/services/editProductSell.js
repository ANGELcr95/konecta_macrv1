import Config from '../Config';

const editProductSell = async (productStock) => {
    const usefulLoad = JSON.stringify(productStock);
    const promiseStock = await fetch(
      `${Config.ROUTE_API}/actualizar_stock.php`,
      {
        method: "PUT",
        body: usefulLoad,
      }
    );
    console.log(promiseStock);
    return promiseStock;
};

export default editProductSell;