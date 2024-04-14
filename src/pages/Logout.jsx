import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
function Logout() {
  const navegar = useNavigate();
  function cerrar() {
    {
      /* Se realiza el useNavigate para que al realizar la navegacion en la pagina se realiza mas rapidamente y se redireccione cuando se marca el boton si activando la funcion cerrar y se redirija al inicio*/
    }
    localStorage.removeItem("usuario");
    window.location.href = "/";
  }
  function continuar() {
    navegar("/");
    {
      /* la funcion continuar redirecciona al inicio pero sin cerrar la sesion aplicando la funcion cuando se realiza el onclick en el boton no*/
    }
  }
  return (
    <>
      <section className="formularios__logout">
        <div className="contenedor__logout">
          <h1 className="titulo__logout">¿Seguro que quieres cerrar sesion?</h1>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            {/* se aplica el evento onclick para que se redirija a las funciones asignadas para redireccionar a la ruta correspondiente dada en la función */}
            <button
              type="button"
              onClick={cerrar}
              className="btn btn-success"
              data-bs-toggle="button"
            >
              Si
            </button>{" "}
            {/* se apica el evento onclick para que se redirija a las funciones asignadas para redireccionar a la ruta correspondiente dada en la función */}
            <button
              type="button"
              onClick={continuar}
              className="btn btn-danger"
              data-bs-toggle="button"
            >
              No
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Logout;
