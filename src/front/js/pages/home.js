import React, { useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const [register, setRegister] = useState({
    email: '', password: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegister({ ...register, [name]: value, });
    console.log("Aqui event", event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
      });
  };

  return (
    <div className="container-fluid text-center mt-5">
      <form className="form" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" value={register.email} onChange={handleChange}/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" name="password" id="exampleInputPassword1" value={register.password} onChange={handleChange}/>
        </div>
        <button type="submit" class="btn-sub btn">Submit</button>
      </form>
    </div>
  );
};
