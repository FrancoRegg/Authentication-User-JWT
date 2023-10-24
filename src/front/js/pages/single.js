import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Single = props => {
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


