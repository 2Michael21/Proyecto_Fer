import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/register.css';

function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombres: '',
        apellidos: '',
        pais: '',
        telefono: '',
        correo: '',
        contraseña: '',
        confirmarContraseña: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let warnings = '';
        let entrar = false;

        // Validar que los nombres no contengan números
        if (/\d/.test(formData.nombres)) {
            warnings += 'Los nombres no deben contener números\n';
            entrar = true;
        }

        // Validar que los apellidos no contengan números
        if (/\d/.test(formData.apellidos)) {
            warnings += 'Los apellidos no deben contener números\n';
            entrar = true;
        }

        // Validar el correo electrónico
        if (!/\S+@\S+\.\S+/.test(formData.correo)) {
            warnings += 'El correo no es válido\n';
            entrar = true;
        }

        // Validar que el teléfono tenga 10 dígitos
        if (!/^\d{10}$/.test(formData.telefono)) {
            warnings += 'El número de teléfono debe tener 10 dígitos\n';
            entrar = true;
        }

        // Validar que las contraseñas coincidan
        if (formData.contraseña !== formData.confirmarContraseña) {
            warnings += 'Las contraseñas no coinciden\n';
            entrar = true;
        }

        if (entrar) {
            alert(warnings);
            return;
        }

        const userData = {
            nombres: formData.nombres,
            apellidos: formData.apellidos,
            pais: formData.pais,
            telefono: formData.telefono,
            correo: formData.correo,
            contraseña: formData.contraseña,
        };

        localStorage.setItem('userData', JSON.stringify(userData));
        console.log('Datos almacenados en localStorage:', userData);
        alert("Registro exitoso. Redirigiendo al inicio de sesión.");
        navigate('/login');

        // Opcional: Redirigir o mostrar un mensaje de éxito
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
                        <li><NavLink to="/register">Registrarse</NavLink></li>
                    </ul>
                </div>
            </div>
            <form className="form-register" onSubmit={handleSubmit}>
                <h4><center>Registrarse</center></h4>
                <input className="controls"
                    type="text"
                    name="nombres"
                    placeholder="Ingrese sus nombres"
                    value={formData.nombres}
                    onChange={handleChange}
                />
                <input className="controls"
                    type="text"
                    name="apellidos"
                    placeholder="Ingrese un Apellido"
                    value={formData.apellidos}
                    onChange={handleChange}
                />
                <input className="controls"
                    type="text"
                    name="pais"
                    placeholder="Ingrese su país"
                    value={formData.pais}
                    onChange={handleChange}
                />
                <input className="controls"
                    type="text"
                    name="telefono"
                    placeholder="Ingrese su teléfono personal"
                    maxLength="10"
                    value={formData.telefono}
                    onChange={handleChange}
                />
                <input className="controls"
                    type="email"
                    name="correo"
                    placeholder="Ingrese su correo"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                />
                <input className="controls"
                    type="password"
                    name="contraseña"
                    placeholder="Ingrese su contraseña"
                    value={formData.contraseña}
                    onChange={handleChange}
                />
                <input className="controls"
                    type="password"
                    name="confirmarContraseña"
                    placeholder="Vuelva a ingresar la contraseña"
                    value={formData.confirmarContraseña}
                    onChange={handleChange}
                />
                <input type="submit" value="Enviar" />
            </form>
            
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
                    <h4>Hotel Paraiso Tropical | Todo los derechos reservados ©</h4>
                </div>
            </div>
        </div>
    );
}

export default Register;
