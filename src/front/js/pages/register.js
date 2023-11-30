import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/register.css";

export const Register = () => {
  const { actions } = useContext(Context)
  const [register, setRegister] = useState({ full_name: '', email: '', password: '' })
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (register.password !== confirmPassword) { //Verifica que las contraseñas no sean distintas
      setError("Las contraseñas no coinciden. Intentelo de nuevo")
      return;
    }
    try {
      
      await actions.register(register); // Hacer la solicitud de registro


      setSuccessMessage(true) //Si las contraseñas coinciden muestra un mensaje y ejecuta el siguiente codigo
      setTimeout(() => {
        setSuccessMessage(false)
        navigate("/"); // Después de un registro exitoso, redirigir a inicio de sesion pasado X tiempo
      }, 1000);

      setRegister("")

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
            id="exampleInputName1"
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
          <input
            type="password"
            className="form-info"
            name="Confirm_password"
            id="exampleInputPassword2"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="cont-registro">
            <button className="registrate">Registrarse</button>
            {error && <p className="errores">{error}</p>}
            {successMessage && <p className="exitoso">Tu registro fue exitoso!</p>}
          </div>
        </form>
      </div>

    </div>
  );
};