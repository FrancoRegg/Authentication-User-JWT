import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Private = props => {
  const { store, actions } = useContext(Context);
  console.log("INFO DE USUARIO",store.datauser);

  useEffect(() => {
    actions.dataUser()
  }, [])

  return (
    <div className="info-usuario">
      <h1>Hola {store.datauser.full_name}</h1>
    </div>
  );
};


