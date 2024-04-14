import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Footer from "../components/Footer";
function EditarReserva() {
  {
    /*se tiene que pasar por parametro ya que es una peticion get se tiene que pasar en el server por query por eso tambien se requiere
    que la url se pase con ById?id= ademas se localizara para cada reserva editada la id del servicio correspondiente */
  }
  {
    /*se realiza un estado para guardar la edicion de reservas */
  }

  let { id } = useParams();
  const [unServicioReservado, setUnServicioReservado] = useState({});
  const [status, setStatus] = useState({});
  useEffect(() => {
    axios
      .get("https://backend-spa-huellitas.onrender.com/editarReservasById?id=" + id)
      .then((results) => setUnServicioReservado(results.data));
  }, []);
  {
    /* Para el despliegue de la página en render se cambia el localhost:3000 por el web service del servidor en este caso https://backend-spa-huellitas.onrender.com dejando las rutas correspondientes en la página */
  }
  {
    /* para la funcion handlechange se tienen encuenta las dos variables del formulario en los dos campos a editar esto con el fin de que se pueda cambiar el valor en este
caso la fecha y hora */
  }
  function handleChange(e) {
    let nombre = e.target.name;
    let valor = e.target.value;
    setUnServicioReservado({ ...unServicioReservado, [nombre]: valor });
  }
  {
    /* en el handle submit se enviaran todos los datos actualizados del formulario a localhost de editar reservas y se alojara l aactualizacion en la base de datos con esto 
tambien se establece una variable de cambio con const de status para que cuando se ejecute el cambio se muestre el status de actualizar reserva en caso de que no se haya
actualuzado se mostrara un campo vacio*/
  }
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put("https://backend-spa-huellitas.onrender.com/editarReservas", unServicioReservado)
      .then((results) => {
        setStatus(results.data);
      });
  }
  {
    /* Para el despliegue de la página en render se cambia el localhost:3000 por el web service del servidor en este caso https://backend-spa-huellitas.onrender.com dejando las rutas correspondientes en la página */
  }
  return (
    <>
      <section className="edicion__reserva">
        {/*  al generar el estado de status si el estado es success se lanzara el mensaje que la reserva se actualizo correctamente sino es asi se genera un objeto vacio
    del estado de status.status */}
        {status.status == "success" ? (
          <h4
            className="text-muted text-center"
            style={{ fontStyle: "italic", paddingTop: "13.2rem" }}
          >
            Reserva actualizada correctamente{" "}
          </h4>
        ) : status == {} ? (
          <></>
        ) : (
          <h4
            className="text-muted text-center"
            style={{
              fontStyle: "italic",
              paddingTop: "8.2rem",
              lineHeight: "2.5rem",
            }}
          >
            {status.status}
          </h4>
        )}
        <h3 className="text-center" style={{ padding: "4rem 0 1.5rem" }}>
          {unServicioReservado.nombre}
        </h3>
        <section className="edicionReserva">
          <div className="contenedor__ediReserva">
            <i
              className="fa-solid fa-bone"
              style={{
                color: "#ffffff",
                fontSize: "xx-large",
                padding: "0.2rem",
              }}
            ></i>
            <form action="#" method="post" onSubmit={handleSubmit}>
              <label
                htmlFor="date"
                className="fs-5 text-center text-light"
                style={{ padding: "0.5rem", fontWeight: "500" }}
              >
                Fecha reservada
              </label>
              <br />
              <input
                type="date"
                id="date"
                name="fecha"
                className="fs-5 text-center"
                style={{ borderRadius: "0.5rem" }}
                value={unServicioReservado.fecha}
                onChange={handleChange}
              />
              <br />
              <label
                htmlFor="time"
                className="fs-5 text-center text-light"
                style={{ padding: "0.5rem", fontWeight: "500" }}
              >
                Hora reservada
              </label>
              <br />
              <input
                type="time"
                name="hora"
                id="time"
                className="fs-5 text-center"
                style={{ borderRadius: "0.5rem", marginBottom: "1rem" }}
                value={unServicioReservado.hora}
                onChange={handleChange}
              />
              <br />
              <br />
              <Button
                variant="light"
                type="submit"
                style={{ marginBottom: "2rem", fontWeight: "500" }}
              >
                Actualizar Reserva
              </Button>
            </form>
          </div>
        </section>
      </section>
      <Footer></Footer>
    </>
  );
}
export default EditarReserva;
