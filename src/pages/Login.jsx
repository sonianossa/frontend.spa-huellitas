import React from "react";
import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

function Login() {
  {
    /*Lo que permite use Location es definir la localizacion de la pagina o el link donde nos encontramos */
  }
  const location = useLocation();
  {
    /* Se buscaran los parametros en location.search encontrados en la url*/
  }
  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get("status");
  console.log(status);
  {
    /*El cómo se va a llevar el inicio de sesión y los campos del mismo*/
  }
  const [login, setLogin] = useState({ nombre: "", contrasena: "", error: "" });
  {
    /* Se establecen los datos del registro  para agregar el estado register y se ingresen los datos correctamente asimismo por eso se utiliza useState para que tambien se pueda actualizar la varible */
  }
  const [register, setRegister] = useState({
    nombre: "",
    apellidos: "",
    dni: "",
    email: "",
    telefono: 0,
    nombremascota: "",
    edadmascota: 0,
    raza: "",
    contrasena: "",
  });

  function handleChangeLogin(e) {
    let nombre = e.target.name;
    let valor = e.target.value;
    setLogin({ ...login, [nombre]: valor });
  }
  {
    /*se envia por axios el localhost 3000 la ruta de login*/
  }
  {
    /* Para el despliegue de la página en render se cambia el localhost:3000 por el web service del servidor en este caso https://backend-spa-huellitas.onrender.com dejando las rutas correspondientes en la página */
  }
  function handleLogin(e) {
    e.preventDefault();
    axios
      .post("https://backend-spa-huellitas.onrender.com/login", login)
      .then((results) => {
        {
          /*significa que la persona se logueo correctamente y se guarda dicha información en formato string en localstorage del navegador; 
        por otra parte cuando ya el usuario se loguea verdaderamente se localiza en la ventana del navegador redirigiendolo a la ruta de inicio*/
        }
        if (results.data.status === "success") {
          localStorage.setItem("usuario", JSON.stringify(login));
          window.location.href = "/";
        } else {
          setLogin({
            ...login,
            error: "Usuario no encontrado, intentelo de nuevo",
          });
        }
      });
  }

  function handleChangeRegister(e) {
    let nombre = e.target.name;
    let valor = e.target.value;
    setRegister({ ...register, [nombre]: valor });
  }
  {
    /* Para el despliegue de la página en render se cambia el localhost:3000 por el web service del servidor en este caso https://backend-spa-huellitas.onrender.com dejando las rutas correspondientes en la página */
  }
  function handleRegister(e) {
    e.preventDefault();
    axios
      .post("https://backend-spa-huellitas.onrender.com/register", register)
      .then((results) => {
        if (results.data.status === "success") {
          window.location.href = "/login";
        }
      });
  }

  return (
    <>
      <section className="d-flex justify-content-evenly flex-wrap formularios">
        <Form
          action="#"
          method="post"
          style={{ padding: "3.5rem" }}
          onSubmit={handleLogin}
          className="mb-3"
          data-bs-theme="dark"
          bg="dark"
        >
          <h2 className="titulo__iniciarSesion">Inicia Sesion</h2>
          <Form.Text className="text-muted">
            {" "}
            {/*si el usuario no es encontrado en la base de datos saltara el mensaje de aviso de error en el login usuario no existente colocando la otra probabilidad en el else*/}
            {login.error}
          </Form.Text>{" "}
          <br />
          <Form.Label style={{ color: "white" }}>Usuario</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            placeholder="Usuario"
            onChange={handleChangeLogin}
            value={login.nombre}
          />
          <Form.Label style={{ color: "white" }}>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="contrasena"
            placeholder="Password"
            onChange={handleChangeLogin}
            value={login.contrasena}
          />
          <br />
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button variant="dark" type="submit">
                Iniciar Sesion
              </Button>
            </Col>
          </Form.Group>
        </Form>
        {/*el formulario de registro llevara los datos al servidor por medio de action y la ruta de register en el localhost   */}
        <Form
          action="#"
          method="post"
          className="mb-3"
          style={{ padding: "3.5rem" }}
          onSubmit={handleRegister}
          data-bs-theme="dark"
          bg="dark"
        >
          <h2 className="titulo__iniciarSesion">Registrate</h2>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label style={{ color: "white" }}>
                Nombre (usuario){" "}
              </Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                onChange={handleChangeRegister}
                value={register.nombre}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastname">
              <Form.Label style={{ color: "white" }}>Apellidos</Form.Label>
              <Form.Control
                type="text"
                name="apellidos"
                onChange={handleChangeRegister}
                value={register.apellidos}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDni">
              <Form.Label style={{ color: "white" }}>DNI</Form.Label>
              <Form.Control
                type="text"
                name="dni"
                onChange={handleChangeRegister}
                value={register.dni}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={{ color: "white" }}>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleChangeRegister}
                value={register.email}
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridPhone">
              <Form.Label style={{ color: "white" }}>Teléfono</Form.Label>
              <Form.Control
                type="number"
                name="telefono"
                onChange={handleChangeRegister}
                value={register.telefono}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridNamePet">
              <Form.Label style={{ color: "white" }}>
                Nombre de tu Peludo
              </Form.Label>
              <Form.Control
                type="text"
                name="nombremascota"
                onChange={handleChangeRegister}
                value={register.nombremascota}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAgePet">
              <Form.Label style={{ color: "white" }}>
                Edad Mascota(Años)
              </Form.Label>
              <Form.Control
                type="number"
                name="edadmascota"
                onChange={handleChangeRegister}
                value={register.edadmascota}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridRace">
              <Form.Label style={{ color: "white" }}>
                Raza de tu peludo
              </Form.Label>
              <Form.Select
                defaultValue="Selecciona la Raza..."
                name="raza"
                onChange={handleChangeRegister}
                value={register.raza}
              >
                <option>Selecciona la Raza...</option>
                <option>Labrador Retriever</option>
                <option>Pastor Alemán</option>
                <option>Golden Retriever</option>
                <option>Bulldog Francés</option>
                <option>Bulldog Inglés</option>
                <option>Beagle</option>
                <option>Poodle (Caniche)</option>
                <option>Boxer</option>
                <option>Dachshund (Teckel)</option>
                <option>Yorkshire Terrier</option>
                <option>Siberian Husky</option>
                <option>Otro</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label style={{ color: "white" }}>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="contrasena"
                onChange={handleChangeRegister}
                value={register.contrasena}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="Acepto los términos y condiciones"
              style={{ color: "white" }}
            />
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button variant="dark" type="submit">
                Registrar
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </section>
      <Footer />
    </>
  );
}

export default Login;
