import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/register.css";

export const Register = () => {
  const { store, actions } = useContext(Context)
  const [register, setRegister] = useState({ full_name: '', email: '', password: '' })
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Hacer la solicitud de registro
      await actions.register(register);

      // Después de un registro exitoso, redirigir a inicio de sesion
      navigate("/");
    } catch (error) {
      console.error("Error al registrar:", error);
    }
  }

  return (
    <div className="container formulario">
      <h1 className="registro">Registrate</h1>
      <div className="container">
        <form className="form-register" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-info"
            name="full_name"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Nombre completo"
            value={register.full_name}
            onChange={(e) => setRegister({ ...register, full_name: e.target.value })}
          />
          <input
            type="email"
            className="form-info"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Correo electrónico"
            value={register.email}
            onChange={(e) => setRegister({ ...register, email: e.target.value })}
          />
          <input
            type="password"
            className="form-info"
            name="password"
            id="exampleInputPassword1"
            placeholder="Contraseña"
            value={register.password}
            onChange={(e) => setRegister({ ...register, password: e.target.value })}
          />
          <div className="cont-registro">
            <button className="registrate">Registrarse</button>
          </div>
        </form>
      </div>

    </div>
  );
};