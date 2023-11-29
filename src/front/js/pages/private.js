import React, { useState, useEffect, useContext } from "react";
import "../../styles/private.css"
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Private = props => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.dataUser()
  }, [])

  return (
    <div className="info-usuario">
      <h1 className="saludo-privado">Hola {store.datauser.full_name},</h1>
      <p className="bienvenida-privada">Bienvenido a tu pagina privada... En un futuro se añadiremos muchas mas funciones, no te lo pierdas.</p>
      <br/>
      <p className="despedida-privada">Que tengas un excelente día!!!</p>
    </div>
  );
};


