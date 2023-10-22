import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()


  console.log("this is your token", store.token);
  const handleClick = () => {
    actions.login(email, password)

    if (store.token && store.token != "" && store.token != undefined) {
      navigate("/register")
    }
  }

  return (
    <div className="text-center mt-5">
      {store.token && store.token != "" && store.token != undefined ? ("Haz iniciado sesion con el token" + store.token) :
        (
         <> 
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={email} onChange={(e) => setEmail(e.target.value)} />

          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button  class="btn btn-primary" onClick={handleClick}>Login</button>
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