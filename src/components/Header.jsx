import React from "react";
import ImagenLogo from "../assets/image/logohuellitas.png";
import "../css/style.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
{
  /* El Header se realizo por medio de los componentes de react-boostrap lo cual refleja ya estilos predeterminados en la pagina con importaciones de imagenes */
}
{
  /*La ruta de todos los links con localStorage se habilita cuando el usuario este logueado sino es asi el usuario no puede ver el apartado de los links y su estado seria nulo */
}

function Header() {
  {
    /* en el header se realizo el evento onclick con la accion de activado dado en css usando el useState para que cuando el boton cambie de estado y no se active su estado sea false si esta activado con estado activado */
  }
  const [isActivado, setIsActivado] = useState(false);
  return (
    <>
      <header className="top__header">
        <nav className="top__nav">
          <Link className="logo" to={"/"} style={{ fontSize: "1rem" }}>
            <img
              src={ImagenLogo}
              alt="Logo huellitas"
              width="130"
              height="auto"
              loading="lazy"
            />
          </Link>
          <ul
            className={`menu ${isActivado && "activado"}`}
            onClick={() => setIsActivado(!isActivado)}
          >
            {/* Se utilizo NavLink para generar la vistad e las rutas y se renderice el componente ademas de tener asociado la clase
            active lo que genera que el estilo que se le aplique en css a esa clase, en este caso una linea despues de los nav-link 
             que se quede ubicada en la ruta correspondiente*/}
            <li className="nav-item items__nav">
              <NavLink
                className="nav-link fw-bold"
                aria-current="page"
                to={"/"}
                style={{ fontSize: "1.1rem" }}
              >
                INICIO
              </NavLink>
            </li>
            <li className="nav-item items__nav">
              <NavLink
                className="nav-link fw-bold"
                to={"/instalaciones"}
                style={{ fontSize: "1.1rem" }}
              >
                INSTALACIONES
              </NavLink>
            </li>
            <li className="nav-item items__nav">
              {localStorage.getItem("usuario") === null ? (
                <span className="nav-link " style={{ fontSize: "1.1rem" }}>
                  SERVICIOS
                </span>
              ) : (
                <NavLink
                  className="nav-link fw-bold"
                  to={"/servicios"}
                  style={{ fontSize: "1.1rem" }}
                >
                  SERVICIOS
                </NavLink>
              )}
            </li>
            <li className="nav-item items__nav">
              {localStorage.getItem("usuario") === null ? (
                <span className="nav-link " style={{ fontSize: "1.1rem" }}>
                  RESERVAS
                </span>
              ) : (
                <NavLink
                  className="nav-link fw-bold"
                  to={"/packReservado"}
                  style={{ fontSize: "1.1rem" }}
                >
                  RESERVAS
                </NavLink>
              )}
            </li>
            <li className="nav-item d-flex items__nav">
              {localStorage.getItem("usuario") === null ? (
                <NavLink
                  to={"/login"}
                  className="nav-link fw-bold"
                  style={{ fontSize: "1.1rem" }}
                >
                  LOGIN/REGISTRO
                </NavLink>
              ) : (
                <>
                  <span
                    className="nav-item text-uppercase fw-bolder d-flex justify-content-center "
                    style={{
                      color: "black",
                      padding: "0px",
                      fontSize: "1.1rem",
                    }}
                  >
                    <i
                      className="fa-solid fa-paw"
                      style={{
                        color: "black",
                        paddingTop: "2.5rem",
                        fontSize: "1.5rem",
                        paddingRight: "0.2rem",
                      }}
                    ></i>
                    Hola,
                    <span
                      style={{
                        color: "black",
                        padding: "0px",
                        fontSize: "1.1rem",
                      }}
                    >
                      {JSON.parse(localStorage.getItem("usuario")).nombre}
                    </span>
                  </span>
                  <NavLink
                    to={"/logout"}
                    className="nav-link link-nav btn__cerrarsesion fw-bold"
                    style={{ padding: ".1rem 1.7rem", fontSize: "1.1rem" }}
                  >
                    CERRAR SESION
                  </NavLink>
                </>
              )}
            </li>
          </ul>
          <button
            type="button"
            className={`boton__hamburguerIcon ${isActivado && "activado"}`}
            onClick={() => setIsActivado(!isActivado)}
          >
            <span
              className={`barra1 ${isActivado && "activado"}`}
              onClick={() => setIsActivado(!isActivado)}
            ></span>
            <span
              className={`barra2 ${isActivado && "activado"}`}
              onClick={() => setIsActivado(!isActivado)}
            ></span>
            <span
              className={`barra3 ${isActivado && "activado"}`}
              onClick={() => setIsActivado(!isActivado)}
            ></span>
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;
