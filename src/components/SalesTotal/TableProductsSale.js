const TableProductsSale = ({ sale }) => {
  return (
    <tr>
      <>
        <td>{sale.nombre}</td>
        <td>{sale.uds_vendidas}</td>
        <td>{sale.precio}</td>
        <td>{sale.ingresos}</td>
      </>
    </tr>
  );
};

export default TableProductsSale;
