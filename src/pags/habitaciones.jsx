import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import habitacion1 from '../img/habitaciones/habitacion1.jpg';
import habitacion2 from '../img/habitaciones/habitacion2.jpg';
import habitacion3 from '../img/habitaciones/habitacion3.jpeg';
import habitacion4 from '../img/habitaciones/habitacion4.jpg';
import '../styles/habitaciones.css';

const habitacionesData = [
    {
        id: 1,
        nombre: "Kings Of Business",
        descripcion: "La habitación Kings Of Business 'Las Palmeras' dispone de un mobiliario confortable frente al mar, cuentan con todo lo necesario para garantizar una experiencia única e inolvidable con una vista inigualable.",
        capacidad: "2 personas",
        exclusividad: "Cena gratis",
        disposicion: "Piscina, Área Recreativas, Cine, etc.",
        precio: "120$",
        beneficios: ["Parqueo gratis", "Traslado del aeropuerto al hotel", "Tarifa Garantizada", "Bebida gratis"],
        imagen: habitacion1
    },
    {
        id: 2,
        nombre: "Olympus Room",
        descripcion: "La habitación Olympus Room 'Las Palmeras' dispone de un mobiliario confortable frente al mar, cuentan con todo lo necesario para garantizar una experiencia única e inolvidable con una vista al mar.",
        capacidad: "5 personas",
        exclusividad: "No incluye cena gratis",
        disposicion: "Piscina, Área Recreativas, Cine, Teatro, etc.",
        precio: "150$",
        beneficios: ["Parqueo gratis", "Traslado del aeropuerto al hotel", "Tarifa Garantizada", "Bebida gratis"],
        imagen: habitacion2
    },
    {
        id: 3,
        nombre: "Enchanted Paradise",
        descripcion: "La habitación Enchanted Paradise 'Las Palmeras' dispone de un mobiliario confortable frente al mar, cuentan con todo lo necesario para garantizar una experiencia única e inolvidable con una vista única, exclusivamente para ocasiones especiales como 'Lunas de Miel'.",
        capacidad: "3 personas",
        exclusividad: "Cena gratis",
        disposicion: "Piscina, Área Recreativas, Cine, etc.",
        precio: "200$",
        beneficios: ["Parqueo gratis", "Traslado del aeropuerto al hotel", "Tarifa Garantizada", "Bebida gratis"],
        imagen: habitacion3
    },
    {
        id: 4,
        nombre: "Super Weekend",
        descripcion: "La habitación Super Weekend 'Las Palmeras' dispone de un mobiliario confortable frente al mar, cuentan con todo lo necesario para garantizar una experiencia única e inolvidable con una vista preciosa.",
        capacidad: "2 personas",
        exclusividad: "Cena gratis",
        disposicion: "Piscina, Área Recreativas, Cine, etc.",
        precio: "200$",
        beneficios: ["Parqueo gratis", "Traslado del aeropuerto al hotel", "Tarifa Garantizada", "Bebida gratis"],
        imagen: habitacion4
    }
];

function Habitaciones() {
    const [visibleDetalle, setVisibleDetalle] = useState(null);

    const toggleDetalle = (id) => {
        setVisibleDetalle(visibleDetalle === id ? null : id);
    };

    return (
        <section>
            <div className='header'>
                <h1>Hotel ULEAM</h1>
                <div className='navegador'>
                <ul>
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/habitaciones">Habitaciones</NavLink></li>
                    <li><NavLink to="/reservaciones">Reservar</NavLink></li>
                    <li><NavLink to="/login">Iniciar Sesión</NavLink></li>
                    <li><NavLink to="/registro">Registrarse</NavLink></li>
                </ul>
                </div>
            </div>

            <div className='contenedor'>
                <div>
                    <h2 className='titulo'>|| Habitaciones ||</h2>
                    <div className='catalogo'>
                        {habitacionesData.map(habitacion => (
                            <div className='det_catalogo' key={habitacion.id}>
                                <div>
                                    <p className='t_categoria'><b>{habitacion.nombre}</b></p>
                                    <div className="detalle">
                                        <div className="parrafos">
                                            <p>{habitacion.descripcion}</p>
                                            <p><b>Capacidad Máxima:</b> {habitacion.capacidad}</p>
                                            <p><b>Exclusividad de la casa:</b> {habitacion.exclusividad}</p>
                                            <p><b>A su Disposición:</b> {habitacion.disposicion}</p>
                                            <p><b>Precio:</b> {habitacion.precio}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img src={habitacion.imagen} alt={habitacion.nombre} className='cat_img' />
                                </div>
                                <div className="mdetalle">
                                    <button className="dt" type="button" onClick={() => toggleDetalle(habitacion.id)}><b>Más Detalles</b></button>
                                    {visibleDetalle === habitacion.id && (
                                        <div className="detalleVisible">
                                            <p><b>Beneficios</b></p>
                                            {habitacion.beneficios.map((beneficio, index) => (
                                                <p key={index}>{beneficio}</p>
                                            ))}
                                            <button className="dtc" onClick={() => toggleDetalle(habitacion.id)}><b>Cerrar</b></button>
                                            
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <p className='explorar_cat'><NavLink to='/pago'>Reservar</NavLink></p>
                                </div>
                            </div>
                        ))}
                    </div>
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
        </section>
    );
}

export default Habitaciones;
