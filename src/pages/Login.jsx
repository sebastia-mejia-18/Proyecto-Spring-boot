import { useState } from "react";
import Headers from "../components/Headers";

const Login = () => {
  const [getCorreo, setCorreo] = useState("");
  const [getContraseña, setContraseña] = useState("");
  const [getUsusarios, setUsuarios] = useState([]);

  function inisiarSesion() {
    fetch("http://localhost:7714/usuarios")
      .then((response) => response.json())
      .then((data) => setUsuarios(data));
  }
  
    return (
    <form className="container">
      <div>
        <Headers/>
      </div>
      <div>
        <h1>LOGIN</h1>
      </div>


      <div className="seccion-img">
        <img src="#" alt="" />
      </div>
      

      <div className="correo" >
        <label htmlFor="">Correo</label>
        <input onChange={(e)=> setCorreo(e.target.value)}type="text" />
      </div>

      <div className="contraseña">
        <label htmlFor="">Contraseña</label>
        <input onChange={(e) => setContraseña(e.target.value)} type="text" />
      </div>
      <div>
        <button onClick={inisiarSesion} type="button">
          iniciar sesion
        </button>
      </div>
    </form>
  );
};

export default Login;
