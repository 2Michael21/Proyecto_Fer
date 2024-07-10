import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pags/home";
import Habitaciones from "./pags/habitaciones";
import Registro from "./pags/registro";
import Login from "./pags/login";
import Reservaciones from "./pags/reservaciones";
import Pago from "./pags/pago";
import Pag1 from "./pags/pag1";
import Reservaini from "./pags/reservaini";
import Habitacionesini from "./pags/habitacionesini";
import Pagoini from "./pags/pagoini";
import Perfil from './pags/perfil';

function App() {
return(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/habitaciones" element={<Habitaciones />} />
        <Route path="/registro" element={<Registro/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reservaciones" element={<Reservaciones/>}/>
        <Route path="/pago" element={<Pago/>}/>
        <Route path="/pag1" element={<Pag1/>}/>
        <Route path="/reservaini" element={<Reservaini/>}/>
        <Route path="/habitacionesini" element={<Habitacionesini/>}/>
        <Route path="/pagoini" element={<Pagoini/>}/>
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  </div>
)

}

export default App
