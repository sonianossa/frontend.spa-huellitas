import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
function Reserva() {
  {
    /*con el use params podemos acceder a los parametros de la ruta en este caso a la id */
  }
  const { id } = useParams();
  {
    /* se trae el dato del usuario y servicio para poder realizar la petición axios ya que si no se trae no se puede enviar ninguna respuesta a la ruta de reserva la id es del servicio a reservar al igual que el cliente que realizo el login sino se realiza esto la petición axios da error */
  }
  const usuario = {
    servicio: id,
    usuario: JSON.parse(localStorage.getItem("usuario")).nombre,
  };
  {
    /*la navegacion se redirecciona al enlace servicios navegando al realizar el onclick*/
  }
  const navigate = useNavigate();
  console.log(usuario);
  const handleRedirecciona = () => {
    navigate("/servicios");
  };
  {
    /* Para el despliegue de la página en render se cambia el localhost:3000 por el web service del servidor en este caso https://backend-spa-huellitas.onrender.com dejando las rutas correspondientes en la página */
  }
  {
    /* se envia la petición a la ruta de reservas ejecutando el objeto usuario para una redireccion exitosa a la ruta de inicio */
  }
  function handleReserva(e) {
    e.preventDefault();
    axios
      .post("https://backend-spa-huellitas.onrender.com/reserva", usuario)
      .then((results) => {
        if (results.data.status === "successful") {
          window.location.href = "/";
        }
      });
  }

  return (
    <>
      <section className="formularios__reserva">
        <div className="contenedor__reserva">
          {/* se envia el formulario a la direccion inicial de localhost por metodo post donde en el servidor redireccionada dicha ruta a la peticion que se le indique */}
          <form action="#" method="post" onSubmit={handleReserva}>
            <p className="titulo__reserva">
              ¿Estas seguro que quieres reservar <br /> este pack de servicios
              para tu peludo?
            </p>
            {/*el input hidden se realiza con el fin de traer los datos de la base de datos sin que se muestren en la pagina a la vista del cliente ya que el usuario sera unico se muestra su nombre  */}
            <input
              type="hidden"
              name="usuario"
              value={JSON.parse(localStorage.getItem("usuario")).nombre}
            />
            <input type="hidden" name="servicio" value={id} />
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
              <button
                type="submit"
                className="btn btn-success"
              >
                Si
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleRedirecciona}
              >
                {" "}
                {/*redirije a la pagina de servicios  */}
                No
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Reserva;
