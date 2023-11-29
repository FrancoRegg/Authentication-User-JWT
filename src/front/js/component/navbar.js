import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1"></span>
        </Link>
        <div className="ml-auto">
          {!store.token ?
            <Link to="/">
              <button className="boton-login">inicio sesion</button>
            </Link>
            :
            <Link to="/">
              <button className="boton-login" onClick={() => actions.logout()}>cierre sesion</button>
            </Link>
          }
        </div>
      </div>
    </nav>
  );
};
