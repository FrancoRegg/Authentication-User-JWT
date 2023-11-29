const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,

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
      login: async (email, password) => {
        const opts = {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            password: password
          }),
        }

        try {

          const resp = await fetch(process.env.BACKEND_URL + "/token", opts)
          if (resp.status !== 200) {
            alert("There has been some error!!")
            return false;
          }

          const data = await resp.json()
          console.log("This came from the backend", data)
          sessionStorage.setItem("Token", data.access_token)
          setStore({ token: data.access_token })
          return true;
        }
        catch (error) {
          console.error("There has been an error login in")
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
