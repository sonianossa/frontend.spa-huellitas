import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Inicio from "./pages/Inicio";
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Servicios from "./pages/Servicios";
import PackServiciosReservados from "./pages/PackServiciosReservados";
import DetallesServicios from "./pages/DetallesServicios";
import Reserva from "./pages/Reserva";
import EditarReserva from "./pages/EditarReserva";
import Instalaciones from "./pages/Instalaciones";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route
            path="/login"
            element={
              localStorage.getItem("usuario") === null ? <Login /> : <Inicio />
            }
          />
          {/*Si se esta en nulo el logout se redirige a login sino se redirije a logout es decir sino me e logueado me lleva al login si ya me e logueado me lleva al logout*/}
          <Route
            path="/logout"
            element={
              localStorage.getItem("usuario") === null ? <Login /> : <Logout />
            }
          />
          {/*Si el usuario no esta logueado lo llevara a login si por el contrario ya es usuario lo llevara a la ruta de servicios */}
          <Route
            path="/servicios"
            element={
              localStorage.getItem("usuario") === null ? (
                <Login />
              ) : (
                <Servicios />
              )
            }
          />
          {/*Si el usuario no esta logueado lo llevara a login si por el contrario ya es usuario lo llevara a la ruta de servicios y despues
          al dar click en ver mas saltara la ruta de detallesservicios*/}
          <Route
            path="/servicios/:id"
            element={
              localStorage.getItem("usuario") === null ? (
                <Login />
              ) : (
                <DetallesServicios />
              )
            }
          />
          <Route
            path="/reservar/:id"
            element={
              localStorage.getItem("usuario") === null ? <Login /> : <Reserva />
            }
          />
          {/*Ruta para observar los pack de servicios reservados por el usurio; que no esta registrado se lleva al login que no esta registrado
          se lleva al componente de reservas */}
          <Route
            path="/packReservado"
            element={
              localStorage.getItem("usuario") === null ? (
                <Login />
              ) : (
                <PackServiciosReservados />
              )
            }
          />
          <Route
            path="/editarReservas/:id"
            element={
              localStorage.getItem("usuario") === null ? (
                <Login />
              ) : (
                <EditarReserva />
              )
            }
          />
          <Route path="/instalaciones" element={<Instalaciones />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
