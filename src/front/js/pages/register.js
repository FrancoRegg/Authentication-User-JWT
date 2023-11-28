import React, { useState } from "react";

export const Register = () => {
  const [register, setRegister] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [mensaje, setMensaje] = useState('');


  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegister({ ...register, [name]: value, });
    console.log("Aqui event", event);
  };
  
  //La función handleSubmit se encarga de tomar los datos del formulario de registro y los envia al servidor en formato JSON.
  const handleSubmit = (event) => {
    event.preventDefault(); //Previene el comportamiento por defecto del navegador

  //Verifica que los campos "email" y "password" esten completos 
    if (register.email.trim() === '' || register.password.trim() === '') {      //##### Debo ver como mostras el mensaje al campo vacio 
      setError('All fields are mandatory!');
      return;
    }
  //Envio los datos del formulario a una tabla a traves de un fetch con metodo "post"  
    fetch(process.env.BACKEND_URL + "/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(register),
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);

        //Limpia los campos una vez creado el usuario exitosamente, da paso a poder seguir creando registros
        setRegister({
          email: '', password: ""
        });
      });
    setMensaje('The account was created correctly')      //Aviso de que el usuario fue creado con exito 
  };

  return (
    <div className="container-fluid text-center mt-5">
      <div>
        <h1>Registrate</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email *</label>
          <input type="email" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" value={register.email} onChange={handleChange} />

          {error && <div className="alert alert-danger p-1" role="alert" >{error}</div>}

          <label for="exampleInputPassword1" class="form-label">Password * </label>
          <input type="password" class="form-control" name="password" id="exampleInputPassword1" value={register.password} onChange={handleChange} />

          {error && <div className="alert alert-danger p-1" role="alert">{error}</div>}
        </div>
        <button type="submit" class="registrate">Submit</button>
      </form>
      {mensaje && <div class="alert alert-success p-1" role="alert">
        {mensaje}
      </div>}
    </div>
  );
};