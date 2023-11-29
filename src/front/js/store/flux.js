const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      user_login: ['']

    },
    actions: {

      //Registro de usuario
      register: (body) => {

        fetch(process.env.BACKEND_URL + "/register", {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Se produjo un error en la red');
            }
          })
          .then(data => console.log(data))
          .catch(error => console.log('error', error));

      },
      //Inicio de sesion
      login: async (body) => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/token", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });

          if (!resp.ok) {
            throw Error("Hubo un problema en la solicitud de inicio de sesión.");
          }
          if (resp.status === 401) {
            throw new Error("Credenciales no válidas");
          } else if (resp.status === 400) {
            throw new Error("Correo electrónico o contraseña no válido");
          }
          if (!resp.ok) {
            throw Error("Hubo un problema en la solicitud de inicio de sesión.");
          }
          const data = await resp.json();
          console.log('data fetch', data)
          
          sessionStorage.setItem("token", data.access_token); // Guarda el token en el almacenamiento 
          
          setStore({ user_login: sessionStorage.getItem('token') });
          return data;
        } catch (error) {
          console.error("Error al iniciar sesión:");
        }
      },

//Cierre de sesion
logout: () => {
  sessionStorage.removeItem("token")
  console.log("Login out");
  setStore({ token: null })
},
    }
  };
};

export default getState;
