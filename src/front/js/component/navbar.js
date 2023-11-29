import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Navbar = () => {
  const { store, actions } = useContext(Context);
console.log("NAV",store);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">vuelve atras</span>
        </Link>
        <div className="ml-auto">
          {!store.token ?
            <Link to="/">
              <button className="btn btn-primary">Log in</button>
            </Link>
            :
            <Link to="/">
              <button onClick={() => actions.logout()}>Log out</button>
            </Link>
          }
				</div>
      </div>
    </nav>
  );
};
