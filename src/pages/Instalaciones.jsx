import React from "react";
import Footer from "../components/Footer";
import ImgInstal1 from "../assets/image/areageneral.jpg";
import ImgInstal2 from "../assets/image/espaciolibre.jpg";
import ImgInstal3 from "../assets/image/zonadescanso.jpg";
import ImgInstal5 from "../assets/image/areasocializacion.jpg";
import ImgTime from "../assets/image/huellas.jpg";
function Instalaciones() {
  return (
    <>
      {/*Se realiza una lista de imagenes con texto dentro de ellas para generar con animación un efecto slider con las mismas,dichas imagenes estan importadas
    asimismo se implemento un estructura semantica y correspondientes tambien en el contenedor padre las classname y lo correspondiente a una buena estructura */}
      <div className="slider__box">
        <ul className="lista__slider">
          <li>
            <img src={ImgInstal1} alt="Area General Spa" loading="lazy" />
            <div className="texto__img">
              <h2>Área General</h2>
              <p>
                "En Spa Huellitas, cada rincón está diseñado con amor y
                dedicación para proporcionar a tu mascota un refugio de
                bienestar donde cada huella se convierte en un momento
                especial."
              </p>
            </div>
          </li>
          <li>
            <img src={ImgInstal2} alt="Espacio Libre" loading="lazy" />
            <div className="texto__img">
              <h2>Espacio Libre</h2>
              <p>
                "En nuestras áreas de ejercicio al aire libre, tu mascota podrá
                correr, jugar y explorar en un entorno seguro y natural, bajo el
                sol y el cielo abierto."
              </p>
            </div>
          </li>
          <li>
            <img src={ImgInstal3} alt="Zona descanso" loading="lazy" />
            <div className="texto__img">
              <h2>Zona Descanso</h2>
              <p>
                "Nuestras áreas de descanso y confort ofrecen un refugio de
                serenidad y calma, donde tu mascota podrá relajarse y recargar
                energías después de un día lleno de diversión."
              </p>
            </div>
          </li>
          <li>
            <img src={ImgInstal5} alt="Area socializacion" loading="lazy" />
            <div className="texto__img">
              <h2>Área Socialización</h2>
              <p>
                "Nuestras zonas de entrenamiento y socialización son el lugar
                perfecto para que tu mascota aprenda, crezca y se divierta en
                compañía de otros amigos peludos."
              </p>
            </div>
          </li>
        </ul>
      </div>
      <section className="instalaciones">
        {/* Inicio de texto y explicación por medio de una linea temporal estatica con que cuenta las instalciones del spa;asimismo se generaron estructuralmente cards 
      con una imagen en común para asi poder generar la linea y dar diseño a la misma  */}
        <h3 className="titulo__instalaciones">INSTALACIONES</h3>
        <p className="parrafo__instalaciones">
          Las instalaciones de Spa Huellitas están diseñadas para proporcionar
          un ambiente seguro, cómodo y relajante tanto para las mascotas como
          para sus dueños.
        </p>
        <div className="timeline">
          <div className="container__time container__izquierdo">
            <img src={ImgTime} alt="Huellas canino" loading="lazy" />
            <div className="text__box">
              <h2>Recepción y área de espera</h2>
              <p>
                Nuestra recepción es el primer punto de contacto para los
                clientes.
                <br /> Aquí, serás recibido por nuestro amable personal y podrás
                esperar cómodamente antes de tu cita.
              </p>
              <span className="arrow__left" />
            </div>
          </div>

          <div className="container__time container__derecho">
            <img src={ImgTime} alt="Huellas canino" loading="lazy" />
            <div className="text__box">
              <h2>Áreas de Masajes y Relajación</h2>
              <p>
                Contamos con áreas designadas para masajes y relajación, donde
                tu perro puede disfrutar de tratamientos terapéuticos relajantes
                diseñados para aliviar el estrés y promover el bienestar físico
                y emocional.
              </p>
              <span className="arrow__right" />
            </div>
          </div>

          <div className="container__time container__izquierdo">
            <img src={ImgTime} alt="Huellas canino" loading="lazy" />
            <div className="text__box">
              <h2>Salas de Baño y Aseo</h2>
              <p>
                Contamos con salas de baño y aseo completamente equipadas con
                bañeras especiales, productos de alta calidad y herramientas
                profesionales para garantizar un baño relajante y efectivo para
                tu mascota.
              </p>
              <span className="arrow__left" />
            </div>
          </div>

          <div className="container__time container__derecho">
            <img src={ImgTime} alt="Huellas canino" loading="lazy" />
            <div className="text__box">
              <h2>Zonas de Entrenamiento y Socialización</h2>
              <p>
                Si ofrecemos servicios de entrenamiento o socialización,
                contamos con áreas designadas donde los perros pueden participar
                en actividades educativas y sociales bajo la supervisión de
                entrenadores profesionales.
              </p>
              <span className="arrow__right" />
            </div>
          </div>

          <div className="container__time container__izquierdo">
            <img src={ImgTime} alt="Huellas canino" loading="lazy" />
            <div className="text__box">
              <h2>Áreas de Corte y Estilismo</h2>
              <p>
                Nuestras áreas de corte y estilismo están equipadas con todas
                las herramientas necesarias para proporcionar servicios de
                peluquería de alta calidad.
              </p>
              <span className="arrow__left" />
            </div>
          </div>

          <div className="container__time container__derecho">
            <img src={ImgTime} alt="Huellas canino" loading="lazy" />
            <div className="text__box">
              <h2>Áreas de Ejercicio al Aire Libre</h2>
              <p>
                Para promover el ejercicio y la recreación al aire libre,
                disponemos de áreas exteriores seguras y valladas donde los
                perros pueden correr, jugar y explorar bajo la supervisión de
                nuestro personal.
              </p>
              <span className="arrow__right" />
            </div>
          </div>

          <div className="container__time container__izquierdo">
            <img src={ImgTime} alt="Huellas canino" loading="lazy" />
            <div className="text__box">
              <h2>Áreas de Higiene y Seguridad</h2>
              <p>
                Mantenemos altos estándares de higiene y seguridad en todas
                nuestras instalaciones, asegurándonos de que cada área esté
                limpia, desinfectada y segura para las mascotas y el personal en
                todo momento.
              </p>
              <span className="arrow__left" />
            </div>
          </div>

          <div className="container__time container__derecho">
            <img src={ImgTime} alt="Huellas canino" loading="lazy" />
            <div className="text__box">
              <h2>Áreas de Descanso y Confort</h2>
              <p>
                Además de las áreas de ejercicio y actividades, también
                proporcionamos espacios tranquilos y cómodos donde los perros
                pueden descansar y relajarse entre tratamientos y actividades.
              </p>
              <span className="arrow__right" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Instalaciones;
