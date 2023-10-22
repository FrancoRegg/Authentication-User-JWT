const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      /*message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white"
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white"
        }
      ]*/
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        const store = getStore()
        const opts = {
          headers: {
            "Authoritation": "Bearer" + store.token
          }
        }
        fetch(process.env.BACKEND_URL + "api/hello", opts)
          .then(resp => resp.json())
          .then(data => setStore({'msg': data.msg}))
          .catch(err => console.log("Error", err))
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },

      syncTokenFromSessionStorage: () => {
        const token = sessionStorage.getItem("token")
        console.log("Aplication just loaded, synching the session storage token");
        if(token && token != "" && token != undefined) setStore({token: token})
      },

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
        catch(error){
          console.error("There has been an error login in")
        }
      },

      logout: () => {
        sessionStorage.removeItem("token")
        console.log("Login out");
        setStore({token: null})
      },

      /*fetchRegister:() => {
        fetch(BACKEND_URL + "/register", 
        {method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "", password: "" })
        })
        .then(resp => resp.json())
        .then(data => data)
        .catch(error => error)
      }*/
    }
  };
};

export default getState;
