import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
  const [correo, setEmail] = useState('');
  const [contraseña, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('userData')) || [];
    if (storedUsers && storedUsers.correo === correo && storedUsers.contraseña === contraseña) {
      alert('Inicio de sesión exitoso')
      navigate('/pag1'); // Redirige a la página que desees
    } else {
      // Credenciales incorrectas
      alert('Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.');
    }
  };

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
      <div className="main">
        <div className="login-head">
          <h1>Hotel Paraiso Tropical</h1>
        </div>
        <div className="wrap">
          <div className="Regisration">
            <div className="Regisration-head">
              <h2>Iniciar Sesión</h2>
            </div>
            <form className="form-codigo" id="form-codigo" onSubmit={handleSubmit}>
              <div className="input-group Correo">
                <input
                  type="email"
                  id="Correo"
                  placeholder="Correo Electrónico"
                  value={correo}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-group Contraseña">
                <input
                  type="password"
                  id="Contraseña"
                  placeholder="Contraseña"
                  value={contraseña}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="error">{error}</p>}
              <div className="submit">
                <input type="submit" value="Iniciar Sesión" />
              </div>
            </form>
          </div>
        </div>
        <div>
          <p>Hotel Paraiso Tropical</p>
        </div>
      </div>
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

export default Login;
