import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function DetallesServicios() {
  let { id } = useParams();
  {
    /*se tiene que pasar por parametro ya que es una peticion get se tiene que pasar en el server por query por eso tambien se requiere
    que la url se pase con ById?id= */
  }
  {
    /*se realiza un estado para guardar los servicios */
  }

  const [unServicio, setUnServicio] = useState({});
  useEffect(() => {
    axios
      .get("https://backend-spa-huellitas.onrender.com/serviciosById?id=" + id)
      .then((results) => setUnServicio(results.data));
  }, []);
  {
    /* Para el despliegue de la página en render se cambia el localhost:3000 por el web service del servidor en este caso https://backend-spa-huellitas.onrender.com dejando las rutas correspondientes en la página */
  }
  return (
    <>
      <section className="Detalles__servicios">
        <h2 className="titulo__cards">{unServicio.nombre}</h2>
        <Card
          bg="dark"
          data-bs-theme="dark"
          style={{ marginTop: "3rem", marginBottom: "2rem" }}
          className="cards__detalles mx-auto p-2 text-center "
        >
          {/*Se agrega la ruta de las imagenes de las carpetas de donde se alojan las imagenes de los servicios 
        en public con el nombre o numero que sea igual a la id para que se relacione cada imagen con el servicio que le corresponde por id */}
          <img
            variant="top"
            src={`../assets/servicios/${id}.jpg`}
            alt="servicios de spa"
            loading="lazy"
          />
          <Card.Body className="text-align-center">
            <Card.Title>{unServicio.nombre}</Card.Title>
            <Card.Text>{unServicio.descripcion}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <h5>Caracteristicas</h5>
              {unServicio.caracteristicas}
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Fecha</h5>
              {unServicio.fecha}
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Hora</h5>
              {unServicio.hora}
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Precio (COP)</h5>
              {unServicio.precio}
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            {/*Se pasa la id al enlace del boton para poder reservar correctamente el pack que la persona desea ademas 
          de que esto sera consecutivo al enlace de reservas que tenga el usuario ademas sera un componente que se utlizara donde
          se tomara el usuario de localstorage y el link estos unidos conformaran la reserva*/}
            <Link
              type="button"
              className="btn btn-light fw-bold shadow-lg p-3 "
              to={"/reservar/" + unServicio.id_servicios}
            >
              RESERVAR
            </Link>
          </Card.Body>
        </Card>
      </section>
      <Footer />
    </>
  );
}

export default DetallesServicios;
