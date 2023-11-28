import React, { useState } from "react";

export const Register = () => {
  const [register, setRegister] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [mensaje, setMensaje] = useState('');



  return (
    <div className="container-fluid text-center mt-5">
      <div>
        <h1>Registrate</h1>
      </div>
      <form className="form">
        <div class="mb-3">
          <input type="email" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" />

          <input type="password" class="form-control" name="password" id="exampleInputPassword1" />
        </div>
        <button type="submit" class="registrate">Submit</button>
      </form>
    </div>
  );
};