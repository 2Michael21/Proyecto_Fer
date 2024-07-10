import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/reservaciones.css';
import 'daterangepicker/daterangepicker.css';
import $ from 'jquery';
import moment from 'moment';
import 'daterangepicker';

const Reservaciones = () => {
  const [formValues, setFormValues] = useState({
    fecha: '',
    adultos: '1',
    ninos: '0',
    habitacion: '1',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateForm = () => {
    // Aquí puedes agregar la lógica de validación de formulario si es necesario
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Aquí puedes agregar la lógica para manejar el envío del formulario
      console.log('Formulario enviado:', formValues);
    }
  };

  // Configuración de daterangepicker
  $(function() {
    $('input[name="fecha"]').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
      setFormValues({
        ...formValues,
        fecha: start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD')
      });
      console.log("El nuevo formato de fecha: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });

  return (
    <div>
      <div className="header">
        <h1>Hotel ULEAM</h1>
        <div className="navegador">
          <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/habitaciones">Habitaciones</NavLink></li>
            <li><NavLink to="/reservaciones">Reservar</NavLink></li>
            <li><NavLink to="/login">Iniciar Sesión</NavLink></li>
            <li><NavLink to="/registro">Registrarse</NavLink></li>
          </ul>
        </div>
      </div>

      <form classNamename="form" onSubmit={handleSubmit} method="get">
        <h2 className='hh'>Reservar Habitación</h2>
        <div className="contenedor">

          <div className="item">
            <label className="fechas" htmlFor="fecha"><strong>Fecha de llegada-Salida:</strong></label><br />
            <input
              type="text"
              name="fecha"
              value={formValues.fecha}
              onChange={handleChange}
              required
            />
          </div>

          <div className="item">
            <label className="adultos" htmlFor="adultos"><strong>Adultos</strong></label><br />
            <select
              id="adultos"
              name="adultos"
              value={formValues.adultos}
              onChange={handleChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select><br />
          </div>

          <div className="item">
            <label className="ninos" htmlFor="ninos"><strong>Niños</strong></label><br />
            <select
              id="ninos"
              name="ninos"
              value={formValues.ninos}
              onChange={handleChange}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select><br />
          </div>

          <div className="room">
            <label htmlFor="habitacion"><strong>Habitaciones:</strong></label><br />
            <input
              type="number"
              id="habitacion"
              name="habitacion"
              min="1"
              max="5"
              value={formValues.habitacion}
              onChange={handleChange}
            /><br />
          </div>

          <NavLink to='/habitaciones'><input type="submit" value="Verificar Disponibilidad" /></NavLink>

          <p><a href="#">Necesita ayuda? </a></p>

        </div>
      </form>

      {/* Pie de pagina */}
      <div className="footer">
        <div className="break">
          <div className="direccion">
            <h4>Dirección:</h4>
            <p>Av. Circunvalacion, Manta</p>
          </div>
          <div className="contacto">
            <h4>Contactos:</h4>
            <p>Tel: +593 992283525</p>
            <p>Email: info@paraisotropical.ec</p>
          </div>
          <div className="sobre">
            <h4>Sobre nosotros:</h4>
            <p>Somos un hotel de calidad. Contamos con habitaciones para cualquier familia y a su comodidad.</p>
          </div>
        </div>
        <div className="derechos">
          <h4>Hotel Paraiso Tropical | Todos los derechos reservados ©</h4>
        </div>
      </div>
    </div>
  );
};

export default Reservaciones;
