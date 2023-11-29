import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context)
  

  const handleClick = () => {
    
  }
  return (
    <div className="text-center mt-5">
        <h2>Accede a tu cuenta</h2>
        <div class="container-fluid form mb-3">
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          
          <input type="password" class="form-control" id="exampleInputPassword1"/>
          <button class="btn btn">Acceder</button>
        </div>
        <div className="registro-cuenta mb-3" >
          <p>¿No tienes cuenta aún?</p>
          <Link to="/register">
          <button className="registrate">Registrate aquí</button>
          </Link>
        </div>
        
    </div>
  )
}
