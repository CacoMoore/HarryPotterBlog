const getState = ({ setStore, getActions, getStore }) => {
    return {
      store: {
        favorite: [],

        user: {
          username: "",
          password: "",
        },

        token: "",
        user_id: 0,
        loginUser: [],
        
      },
      actions: {
        addFavorite: (name) => {
          const { favorite } = getStore();
          if (!favorite.includes(name)) {
            const newFavorites = [...favorite, name];
            setStore({ favorite: newFavorites });
            console.log(newFavorites);
          }
        },
        removeFavorite: name => {
          const store = getStore();
          const newFavorites = store.favorite.filter(item => item !== name);
          setStore({favorite: newFavorites});
        },


        handleChange: (e) => {
          let { user } = getStore();
          const {
            target: {value, name},
          } = e;
          setStore({
            user: {
              ...user,
              [name]: value,
            },
          });
        },

        /* eslint-disable no-restricted-globals */

        handleUserRegister: (e, navigate) => {
          e.preventDefault();
          const { user } = getStore();
          fetch("http://localhost:8080/users", {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((data) => {
              setStore({
                user: {
                  username: "",
                  password: "",
                },
              });
              //console.log(data);
              alert(JSON.stringify(data));
              navigate("/login");
            })
            .catch((error) => {
              alert(error.message);
              console.log(error);
            });
        },
        
        handleUserLogin: (e, navigate) => {
          e.preventDefault();
          const { user } = getStore();
          fetch("http://localhost:8080/login", {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(user),
          })
            .then((res) => {
              if (res.status === 200) {
                return res.json();
              } else if (res.status === 400) {
                throw new Error("Usuario o contraseña incorrectos");
              }
            })
            .then((data) => {
              console.log(data);
              setStore({
                loginUser: data,
                token: data.token,
                user_id: data.user_id,
                user: {
                  username: "",
                  password: "",
                },
              });
              //console.log(data);
              //getActions().fetchUserData(data.user_id, data.token);
              navigate("/");
            })
            .catch((error) => {
              alert(error.message);
              navigate("/register");            
              console.log(error);
            });
        },

        fetchUserData: (user_id, token) => {
          fetch(`http://localhost:8080/users/${user_id}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            method: "GET",
          })
            .then((res) => res.json())
            .then((data) => {
              setStore({
                loginUser: data,
                user: {
                  username: "",
                  password: "",
                },
              });
            })
            .catch((error) => console.log(error));
        },
      },
  
    };
  };
  export default getState;