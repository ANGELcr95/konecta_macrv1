import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import SellProduct from "./components/SellProduct";
import SalesTotal from "./components/SalesTotal";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/agregarproducto" element={<AddProduct/>} />
            <Route path="/producto/editar/:id" element={<EditProduct/>} />
            <Route path="/venta/:id" element={<SellProduct/>} />
            <Route path="/ventas" element={<SalesTotal/>} />
            <Route path="/" element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
