import '../styles/home.css';
import foto1 from '../img/home/foto1.jpg';
import foto2 from '../img/home/foto2.jpg';
import foto3 from '../img/home/foto3.jpg';
import foto4 from '../img/home/foto4.jpg';
import foto5 from '../img/home/foto5.jpg';
import foto6 from '../img/home/foto6.jpg';

import { NavLink } from 'react-router-dom';
import React, {useState}from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

function Home (){
    const [formData, setFormData] = useState({
      nombre: '',
      correo: '',
      asunto: '',
      mensaje: ''
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  

    const handleSubmit = (event) => {
      event.preventDefault();

      console.log(formData);

      setFormData({
        nombre: '',
        correo: '',
        asunto: '',
        mensaje: ''
      });
    };
    const validateForm = (event) => {

    return true;
  };
    return(
        <section>
        <div className='menu'>
            <div className='header'>
                <h1>Hotel ULEAM</h1>
                <div className='navegador'>   
                    <nav>
                    <ul>
                        <li><NavLink to="/">Inicio</NavLink></li>
                        <li><NavLink to="/habitaciones">Habitaciones</NavLink></li>
                        <li><NavLink to="/reservaciones">Reservar</NavLink></li>
                        <li><NavLink to="/login">Iniciar Sesión</NavLink></li>
                        <li><NavLink to="/registro">Registrarse</NavLink></li>
                    </ul>
                    </nav>
                </div>
            </div>
            <h2>El hotel de tus sueños</h2>
                <div className='content'>
                    <form 
                    name="formulario" 
                    action="../habitaciones/Index.html" 
                    onSubmit={validateForm} 
                    method="get"
                    >
                        <div className="conte">
                            <div className="item">
                            <label htmlFor="fecha"><strong>Fecha de llegada-Salida:</strong></label><br />
                            <input type="text" name="fecha" autoFocus required />
                            </div>

                            <div className="item">
                            <label htmlFor="adultos"><strong>Adultos</strong></label><br />
                            <select id="adultos" name="adultos">
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
                            <label htmlFor="ninos"><strong>Niños</strong></label><br />
                            <select id="ninos" name="ninos">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select><br />
                            </div>

                            <div className="item">
                            <label htmlFor="submit"><strong></strong></label><br />
                            <NavLink to='/habitaciones'><input type="submit" value="Verificar Disponibilidad" /></NavLink>
                            </div>
                        </div>
                    </form>
                </div>
        </div>
        <div className='servicios'>
            <h2>Sevicios</h2>
            <div className='menu-servicios'>
                <div className='bloques-servicios'>
                    <i className='fas fa-wifi'></i>
                    <h4>WIFI GRATIS</h4>
                    <hr></hr>
                    <p>Conectate en todo momento</p>
                </div>
                <div className="bloques-servicios">
                    <i className="fas fa-concierge-bell"></i>
                    <h4>SERVICIO AL CUARTO</h4>
                    <hr/>
                    <p>No necesitas salir de tu cuarto</p>
                </div>

                <div className="bloques-servicios">
                    <i className="fas fa-swimming-pool"></i>
                    <h4>PISCINA</h4>
                    <hr/>
                    <p>Disfruta nadando bajo el sol</p>
                </div>

                <div className="bloques-servicios">
                    <i className="fas fa-parking"></i>
                    <h4>ESTACIONAMIENTO</h4>
                    <hr/>
                    <p>Amplio para todo tipo de vehiculos</p>
                </div>

                <div className="bloques-servicios">
                    <i className="fas fa-utensils"></i>
                    <h4>RESTAURANTE</h4>
                    <hr/>
                    <p>Platos tipicos del País</p>
                </div>
            </div>
            <div className="galeria"> 
                <h2>Galería</h2>
                <div className="imagenes">
                <img src={foto1} alt="Foto1" className='img-uniforme' />
                <img src={foto2} alt="Foto2" className='img-uniforme' />
                <img src={foto3} alt="Foto3" className='img-uniforme' />
                <img src={foto4} alt="Foto4" className='img-uniforme' />
                <img src={foto5} alt="Foto5" className='img-uniforme' />
                <img src={foto6} alt="Foto6" className='img-uniforme' />
                </div>
            </div>
        </div>
        <div className='escribenos'>
            <form className="contactos" onSubmit={handleSubmit}>
            <h2>Escríbenos</h2>
            <label>
                Tu nombre:
                <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                autoFocus
                required
                />
            </label><br/>
            <label>
                Tu correo:
                <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleInputChange}
                required
                />
            </label><br/>
            <label>
                Asunto:
                <input
                type="text"
                name="asunto"
                value={formData.asunto}
                onChange={handleInputChange}
                required
                />
            </label><br/>
            <label>
                Mensaje:<br/>
                <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                required
                ></textarea>
            </label><br/>
            <input type="submit" value="Enviar" /><br/>
            </form>
        </div>
        <div className='footer'>
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
                <h4> Hotel Paraiso Tropical | Todo los derechos reservados ©</h4>
            </div>
        </div>
        </section>

    )
}
export default Home;