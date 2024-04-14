import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CardGroup from "react-bootstrap/esm/CardGroup";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
function PackServiciosReservados() {
  const [reservas, setReservas] = useState([]);
  {
    /*utilizamos el estado para que se pueda cambiar el valor cuando se realice la reserva  */
  }
  {
    /*se pasa el nombre del usuario en donde se está*/
  }
  {
    /* Para el despliegue de la página en render se cambia el localhost:3000 por el web service del servidor en este caso https://backend-spa-huellitas.onrender.com dejando las rutas correspondientes en la página */
  }
  useEffect(() => {
    axios
      .get(
        "https://backend-spa-huellitas.onrender.com/reservas?usuario=" +
          JSON.parse(localStorage.getItem("usuario")).nombre
      )
      .then((results) => {
        setReservas(results.data.servicios);
      });
  }, [reservas]);
  {
    /*guardaremos el valor del id servicios y la id de usuario para que elimine por usuario y servicio por lo que tambien
    se elimina por id de reserva, tambien pasamos a la ruta que se eliminara por axios y por parametro la id con el valor 
    dado en este caso el servicio y usuario */
  }
  {
    /* Para el despliegue de la página en render se cambia el localhost:3000 por el web service del servidor en este caso https://backend-spa-huellitas.onrender.com dejando las rutas correspondientes en la página */
  }
  function handleDelete(e) {
    let valor = e.target.value;
    axios
      .delete("https://backend-spa-huellitas.onrender.com/reservas", {
        params: {
          id: valor,
          nombre_us: JSON.parse(localStorage.getItem("usuario")).nombre,
        },
      })
      .then((results) => {
        if (results.data.status === "success") {
          setReservas([]);
        }
      });
  }

  return (
    <>
      <section className="pack__reservado">
        {/* Con esto mostrariamos de manera grafica para el cliente el array de los alojamientos reservados realizando un map a cada reserva para pintar 
    la correcta, alojada en la base de datos por nombre de alojamiento  */}
        <h4
          className="text-muted text-center"
          style={{ fontStyle: "italic", paddingTop: "13rem", lineHeight:"2rem" }}
        > Reservas realizadas <br/>
          Ten en cuenta que las reservas se eliminaran automaticamente{" "}
        </h4>
        <ul className="lista__reservas">
          {reservas.map((reserva) => {
            return (
              <li key={reserva.id_servicios}>
                <CardGroup bg="dark" data-bs-theme="dark">
                  {" "}
                  <Card className="mx-auto p-2 text-center">
                    <Card.Body>
                      <i
                        className="fa-solid fa-paw"
                        style={{
                          color: "#ffffff",
                          fontSize: "xx-large",
                          padding: "1rem",
                        }}
                      ></i>
                      <Card.Title>{reserva.nombre}</Card.Title>
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                          <h5>Fecha</h5>
                          {reserva.fecha}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h5>Hora</h5>
                          {reserva.hora}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h5>Precio(COP)</h5>
                          {reserva.precio}
                        </ListGroup.Item>
                      </ListGroup>
                      <div
                        className="flex-wrap d-flex justify-content-center"
                        style={{ padding: "1rem", gap: "2rem" }}
                      >
                        <Button
                          variant="light"
                          className="fw-bold shadow-lg p-3"
                          onClick={handleDelete}
                          value={reserva.id_servicios}
                        >
                          Eliminar reserva
                        </Button>
                        {/* Se redirije a la ruta de editarReserva y a esto se le suma que corresponda solo con el servicio que desea editar y no arroje todos los servicios en la ruta */}
                        <Link
                          type="button"
                          className="btn btn-light fw-bold shadow-lg p-3 "
                          to={"/editarReservas/" + reserva.id_servicios}
                        >
                          Actualizar reserva
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </li>
            );
          })}
        </ul>
      </section>
      <Footer />
    </>
  );
}
export default PackServiciosReservados;
