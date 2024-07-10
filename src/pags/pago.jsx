import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import iconoseguro from '../img/pago/iconoseguro.jpg';
import tarjetas from '../img/pago/tarjetas.jpg';
import vistobueno from '../img/pago/vistobueno.jpg';
import vistobueno2 from '../img/pago/vistobueno2.jpg';
import '../styles/pago.css';

const Pago = () => {
  const [formValues, setFormValues] = useState({
    nombre: '',
    apellido: '',
    ntarjeta: '',
    fecha: 'MM',
    fecha2: 'AA',
    codigo: '***',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validar = () => {
    const { nombre, apellido, ntarjeta, fecha, fecha2, codigo } = formValues;
    const expresionfecha = /^\d{2}$/;
    const expresioncodigo = /^\d{3}$/;
    const expresionnombreusuario = /^[a-zA-Z]+$/;
    const expresiontarjeta = /^\d{16}$/;

    if (!expresionnombreusuario.test(nombre)) {
      alert('Nombre no válido');
      return false;
    }
    if (!expresionnombreusuario.test(apellido)) {
      alert('Apellido no válido');
      return false;
    }
    if (!expresiontarjeta.test(ntarjeta)) {
      alert('La tarjeta debe contener 16 dígitos');
      return false;
    }
    if (!expresionfecha.test(fecha)) {
      alert('La fecha tiene que ser numérica');
      return false;
    }
    if (!expresionfecha.test(fecha2)) {
      alert('La fecha tiene que ser numérica');
      return false;
    }
    if (!expresioncodigo.test(codigo)) {
      alert('El código debe contener 3 dígitos');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      console.log('Formulario enviado:', formValues);
    }
  };

  return (
    <div>
      <div className="pago-menu">
        <h1>Hotel ULEAM</h1>
        <div className="pago-navegador">
          <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/habitaciones">Habitaciones</NavLink></li>
            <li><NavLink to="/reservaciones">Reservar</NavLink></li>
            <li><NavLink to="/login">Iniciar Sesión</NavLink></li>
            <li><NavLink to="/registro">Registrarse</NavLink></li>
          </ul>
        </div>
      </div>

      <div className="pago-cont">
        <div className="pago-header">
          <h2><img src={iconoseguro} alt='iconoseguro' width="30" height="30" /> Detalles de Pago</h2>
          <p> Tu Reservación se hace a través de un método seguro</p>
        </div>

        <section className="pago-cuerpo">
          <div className="pago-centro">
            <p>¡Rápido! Esa es la habitación más barata que ofrecemos en Hotel ULEAM Reserva ahora.</p>
          </div>
          <p><img src={vistobueno} alt="Vista Bueno" width="15" height="15" /><strong> No</strong> cobramos cargos adicionales por pagos con tarjeta de crédito</p>
        </section>

        <div className="pago-cont">
          <div className="pago-campo">
            <p className="pago-asterisco" style={{ color: 'red' }}>*</p>
          </div>
          <p className="pago-asterisco">Campos Obligatorios</p>
        </div>

        <form className="pago-reserva" id="reserva" onSubmit={handleSubmit}>
          <section className="pago-grid1">
            <div className="pago-input">
              <strong>Nombre:</strong><br />
              <input
                type="text"
                name="nombre"
                id="nombre"
                value={formValues.nombre}
                onChange={handleChange}
              /><br /><br />
              <strong>Apellido:</strong><br />
              <input
                type="text"
                name="apellido"
                id="apellido"
                value={formValues.apellido}
                onChange={handleChange}
              /><br /><br />
              <strong>Número de Tarjeta:</strong><br />
              <input
                type="text"
                name="ntarjeta"
                id="ntarjeta"
                value={formValues.ntarjeta}
                onChange={handleChange}
              /><br /><br />
              <strong>Fecha de Vencimiento:</strong><br />
              <input
                type="text"
                style={{ width: '30px' }}
                id="fecha"
                value={formValues.fecha}
                onFocus={(e) => e.target.value === 'MM' && (e.target.value = '')}
                onBlur={(e) => e.target.value === '' && (e.target.value = 'MM')}
                onChange={handleChange}
              /><strong>/</strong>
              <input
                type="text"
                style={{ width: '30px' }}
                id="fecha2"
                value={formValues.fecha2}
                onFocus={(e) => e.target.value === 'AA' && (e.target.value = '')}
                onBlur={(e) => e.target.value === '' && (e.target.value = 'AA')}
                onChange={handleChange}
              /><br /><br />
              <strong>Codigo de Seguridad:</strong><br />
              <input
                type="text"
                style={{ width: '30px' }}
                name="codigo"
                id="codigo"
                value={formValues.codigo}
                onFocus={(e) => e.target.value === '***' && (e.target.value = '')}
                onBlur={(e) => e.target.value === '' && (e.target.value = '***')}
                onChange={handleChange}
              /><br /><br />
              <input type="submit" value="Reservar" />
            </div>

            <div className="pago-aparte">
              <p><strong>Aceptamos todas las siguientes formas de pago</strong></p>
              <img src={tarjetas} alt="Tarjetas Aceptadas" width="200" height="50" />
              <div className="pago-recomendacion">
                <p><img src={vistobueno2} alt="Vista Bueno" width="10" height="10" />Usamos transmisiones seguras</p>
                <p><img src={vistobueno2} alt="Vista Bueno" width="10" height="10" />Protegemos tu Información personal</p>
              </div>
            </div>
          </section>
        </form>
      </div>

      {/* Pie de pagina */}
      <div className="pago-footer">
        <div className="pago-break">
          <div className="pago-direccion">
            <h4>Dirección:</h4>
            <p>Av. Circunvalación, Manta</p>
          </div>
          <div className="pago-contacto">
            <h4>Contactos:</h4>
            <p>Tel: +593 992283525</p>
            <p>Email: info@paraisotropical.ec</p>
          </div>
          <div className="pago-sobre">
            <h4>Sobre nosotros:</h4>
            <p>Somos un hotel de calidad. Contamos con habitaciones para cualquier familia y a su comodidad.</p>
          </div>
        </div>
        <div className="pago-derechos">
          <h4>Hotel Paraiso Tropical | Todos los derechos reservados ©</h4>
        </div>
      </div>
    </div>
  );
};

export default Pago;
