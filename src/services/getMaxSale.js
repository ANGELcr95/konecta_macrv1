import Config from '../Config';

const getMaxSale = async() => {
    const promiseGetProducts = await fetch(
        `${Config.ROUTE_API}/obtener_maxsale.php`
      );
      return promiseGetProducts;
};

export default getMaxSale;
