import React from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="">
      <NavLink className="btn btn-success mt-2 mb-2" to="/">
        Listar Productos
      </NavLink>
      <NavLink
        className="btn btn btn-primary mt-2 mb-2 ml-4"
        to="/agregarproducto"
      >
        Agregar Producto(s)
      </NavLink>
      <NavLink className="btn btn btn-info mt-2 mb-2 ml-4" to="/ventas">
        Ventas
      </NavLink>
    </div>
  );
};

export default NavigationBar;
