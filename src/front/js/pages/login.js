import React, { useContext, useState } from "react";
import "../../styles/login.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context)
  const [user, setUser] = useState({ email: "", password: "" })
  const [error, setError] = useState("")
  const navigate = useNavigate();


  
  const handleSubmit = async (e) => {
    e.preventDefault()
    //Condiciona a que se rellenen los campos
    if(user.email.trim() === "" || user.password.trim() === ""){
      setError('Correo electronico y contraseña son obligatorios')
      return;
    }
    
    try { 
      await actions.login(user);

      if(!store.token){
        setError('Correo o contraseña incorrectos')
        setUser({ email: "", password: "" })
      }else{
        navigate("/private")
      }
    }
    catch (error){ 
      setError("Correo o contraseña incorrectos", error);
    }
  }

  return (
    <div className="text-center mt-5">
      <h2>Accede a tu cuenta</h2>
      <div class="container-fluid">
        <form className="form-login" onSubmit={handleSubmit}>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Correo electrónico"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Contraseña"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button class="btn btn">Acceder</button>
          {error && <p>{error}</p>}
        </form>
      </div>
      <div className="registro-cuenta" >
        <p>¿No tienes cuenta aún?</p>
        <Link to="/register">
          <button className="registrate">Registrate aquí</button>
        </Link>
      </div>

    </div>
  )
}
