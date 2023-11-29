import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Private = props => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if(store.token && store.token != "" && store.token != undefined) actions.getMessage()
	}, [store.token])

  return (
    <div className="test">
      <div className="alert alert-info">{store.message}</div>
    </div>
  );
};


