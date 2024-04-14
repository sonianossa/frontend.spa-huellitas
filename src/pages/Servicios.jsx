import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardBody from "react-bootstrap/esm/CardBody";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
function Servicios() {
  {
    /*Lo que permite use Location es definir la localizacion de la pagina o el link donde nos encontramos */
  }
  const location = useLocation();
  {
    /* Se buscaran los parametros en location.search encontrados en la url, tambien si la reserva esta definida*/
  }
  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get("reserva");

  {
    /*Lo que realizara es que se devolveran  los datos como la id y el nombre para poder realizar un link donde se puedan leer cada uno de los servicios completamente*/
  }
  {
    /* Para el despliegue de la página en render se cambia el localhost:3000 por el web service del servidor en este caso https://backend-spa-huellitas.onrender.com dejando las rutas correspondientes en la página */
  }
  const [servicios, setServicios] = useState([]);
  useEffect(() => {
    axios.get("https://backend-spa-huellitas.onrender.com/servicios").then((results) => {
      setServicios(results.data);
    });
  }, []);

  return (
    <>
      {/*status es distinto que null respuesta de reserva realizada corractamente sino es asi realice la reserva si el estado es failure se comprueba que la reserva es
        de ese estado, por lo que esa reserva ya se realizo y no se puede repetir ese pack de servicios a reservar */}
      <div className="texto__servicios">
        <Card
          className="w-100"
          style={{
            border: "none",
            background: "rgb(221,221,229)",
            borderRadius: "0",
          }}
        >
          <Card.Body
            style={{
              fontStyle: "italic",
              fontSize: "1.5rem",
              padding: "12rem 1rem 1rem",
              gap: "2rem",
              textAlign: "center",
              textShadow: "2px 2px 18px rgb(125, 137, 141)",
              fontWeight: "600",
            }}
            className="d-flex flex-wrap justify-content-center "
          >
            Realiza la reserva del pack que mas se ajuste a tu peludo
            <i
              className="fa-solid fa-calendar-week"
              style={{ color: "#000000", fontSize: "xx-large" }}
            ></i>
          </Card.Body>
          <h3
            className="text-muted"
            style={{
              fontStyle: "italic",
              padding: "1rem 1.5rem 1.8rem",
              fontSize: "1.2rem",
              textAlign: "center",
              lineHeight: "1.8rem",
              gap: "2rem",
              textShadow: "2px 2px 18px grey",
              fontWeight: "600",
            }}
          >
            "Por favor, ten en cuenta que solo puedes reservar el servicio una{" "}
            <br />
            vez; no está permitido hacer dos reservas del mismo servicio."
          </h3>
        </Card>
      </div>
      {/*al realizar el map de todos los servicios alojados en la base de datos se cotejan los nombres para traerlos a la ventana 
        del cliente es por esto que recorre cada servicio con su respectivo nombre*/}
      <ul className="lista__servicios">
        {servicios.map((servicio) => {
          return (
            <li key={servicio.id_servicios}>
              <CardGroup>
                <Card
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    boxShadow: "2px 2px 18px rgb(127, 132, 134)",
                  }}
                >
                  <CardBody>
                    <Card.Title className="lh-base">
                      {servicio.nombre}
                    </Card.Title>
                    <Link
                      type="button"
                      className="btn btn-dark"
                      to={"/servicios/" + servicio.id_servicios}
                    >
                      Ver más{" "}
                      <i className="fa-solid fa-circle-chevron-right"></i>
                    </Link>
                  </CardBody>
                </Card>
              </CardGroup>
            </li>
          );
        })}
      </ul>
      <Footer />
    </>
  );
}

export default Servicios;
