import React from "react";
import "../css/style.css";
{
  /*Se realiza una estructura semantica como se diseñaria en html con su respectivo className importando el css para establecer estilos */
}
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__contactenos">
          <h3>Contáctanos</h3>
          <p>
            Dirección: Chaletsur de Armenia Quindio, <br />
            Sector El Caimo.{" "}
          </p>
          <p>Teléfono:+1-555-777-1234</p>
          <p>Correo electrónico:spahuellitas@gmail.com</p>
        </div>
        <div className="footer__horario">
          <h3>Horario de atención</h3>
          <p>Lunes a viernes: 9:00 a.m. - 6:00 p.m.</p>
          <p>Sábado: 10:00 a.m. - 4:00 p.m.</p>
          <p>Domingo: Cerrado</p>
        </div>
        <div className="footer__rrss">
          <h4>Síguenos en redes sociales</h4>
          <ul className="footer__texto__lista">
            <li className="footer__texto__rrss">
              <i className="fa-brands fa-instagram" />
            </li>
            <li className="footer__texto__rrss">
              <i className="fa-brands fa-tiktok"></i>
            </li>
            <li className="footer__texto__rrss">
              <i className="fa-brands fa-facebook" />
            </li>
            <li className="footer__texto__rrss">
              <i className="fa-brands fa-whatsapp" />
            </li>
          </ul>
        </div>
      </footer>
      <footer className="footer__copy">
        <span>&copy;2024 Spa Huellitas- Todos los derechos reservados.</span>
        <p>Política de privacidad | Términos y condiciones</p>
      </footer>
    </>
  );
}

export default Footer;
