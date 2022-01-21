import Config from '../Config';

const getMaxStock = async() => {
    const promiseGetProducts = await fetch(
        `${Config.ROUTE_API}/obtener_maxstock.php`
      );
      return promiseGetProducts;
};

export default getMaxStock;

