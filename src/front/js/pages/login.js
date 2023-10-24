import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [error, setError] = useState('');

  const handleClick = () => {
    setError(" ")
    
    if(!email){
      setError("is required")
      return
    }
    if(!password){
      setError("is required")
      return
    }
    actions.login(email, password);
    if (store.token && store.token !== "" && store.token !== undefined) {
      // Redirige a la página de tu elección (por ejemplo, "/dashboard")
      navigate("/");
    } else {
      setError('Credenciales inválidas');
    }
  }
  return (
    <div className="text-center mt-5">
      {store.token && store.token != "" && store.token != undefined ? ("Haz iniciado sesion con el token" + store.token) :
        (
         <> 
         <h2>Accede a tu cuenta</h2>
        <div class="container-fluid form mb-3">
          <label for="exampleInputEmail1" class="form-label">Email *</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={email} onChange={(e) => setEmail(e.target.value)} />
          {error && <div className="alert alert-danger p-1" role="alert" >{"Email"+" "+error}</div>}
          
          <label for="exampleInputPassword1" class="form-label">Password *</label>
          <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}/>
          {error && <div className="alert alert-danger p-1" role="alert" >{"Password"+" "+error}</div>}
          

          <button class="btn btn" onClick={handleClick}>Acceder</button>
        </div>
        <div className="registro-cuenta mb-3" >
          <p>¿No tienes cuenta aún?</p>
          <Link to="/register">
          <button className="registrate">Registrate aquí</button>
          </Link>
        </div>
        </>
        )}
    </div>
  )
}

/*div className="campos">
            <label for="exampleInputEmail1" class="form-label">Email *</label>
            <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label for="exampleInputEmail1" class="form-label">Contraseña *</label>
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleClick}>LogIn</button>
          </div> */



/*
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)}/>
        
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleClick}>Login</button>
      </form>
*/