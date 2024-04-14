import React from "react";
import "../css/style.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ImagenCachorros from "../assets/image/cachorrosbeagle.jpg";
import ImagenCard1 from "../assets/image/ejercicio.jpg";
import ImagenCard2 from "../assets/image/entornoseguro.jpg";
import ImagenCard3 from "../assets/image/cepilladoregular.jpg";
import ImagenCard4 from "../assets/image/alimentacion.jpg";
import ImagenCard5 from "../assets/image/atencion.jpg";
import ImagenCard6 from "../assets/image/contacto.jpg";
import Footer from "../components/Footer";
function Inicio() {
  return (
    <>
      {/*Para la ejecución de la pantalla de inicio se implemento un orden semantico con su main y footer dejando el header y footer como componentes de la pagina 
    asimismo se importaron las imagenes propuestas en las cards realizadas como react-bootstrap de manera estatica y realizando un diseño diferente para los consejos 
    propuestos el hero image realizado de realizo con css de manera manual todo lo anterior implementado de manera responsive en la pagina */}
      <main>
        {/*-------------------------------------------------------------------HeroImage--------------------------------------------------------------------------- */}
        <div className="contenido__heroImage">
          <div className="contenido__heroImage__textoHero">
            <h3 className="titulo__hero">Bienvenido</h3>
            <span className="texto__hero">
              Bienestar en cada paso, amor en cada huella.
            </span>
          </div>
        </div>
        {/*-------------------------------------------------------------------Sección Sobre Nosotros--------------------------------------------------------------------------- */}
        <section className="contenedor__inicio">
          <div className="contenedor__sobreNosotros">
            <div className="texto__sobreNosotros">
              <h3 className="titulo__sobreNosotros">Sobre Nosotros</h3>
              <p className="parrafo__sobreNosotros ">
                En Spa Huellitas, nos dedicamos a brindar un oasis de relajación
                y cuidado para tus queridas mascotas. Somos un equipo apasionado
                de amantes de los animales, comprometidos con el bienestar y la
                felicidad de tus fieles compañeros de cuatro patas.
                <br /> <br /> Nuestra misión es ofrecer una experiencia de spa
                única y rejuvenecedora para perros, donde cada visita sea una
                experiencia memorable y reconfortante tanto para ellos como para
                ti. En Spa Huellitas, creemos que cada perro merece ser tratado
                con amor, cuidado y atención especial.
                <br /> <br /> ¡Ven y únete a nosotros en Spa Huellitas, donde el
                amor y la atención hacia tus mascotas son nuestra prioridad
                número uno! ¡Tu perro se lo merece!
              </p>
            </div>
            <div className="imagen__sobreNosotros">
              <img
                src={ImagenCachorros}
                alt="Cachorros durmiendo"
                className="imagen__cachorros"
                loading="lazy"
              />
            </div>
          </div>
          {/*-------------------------------------------------------------------Consejos--------------------------------------------------------------------------- */}
          <h3 className="titulo__consejos">CONSEJOS PARA TÍ CON TÚ PELUDO</h3>
          <CardGroup
            bg="dark"
            data-bs-theme="dark"
            style={{ gap: "0.5rem", margin: "1rem" }}
          >
            <Card>
              <Card.Img
                variant="top"
                src={ImagenCard1}
                loading="lazy"
                alt="Imagen perro jugando"
              />
              <Card.Body>
                <Card.Title>Ejercicio regular</Card.Title>
                <Card.Text>
                  Asegúrate de que tu perro obtenga suficiente ejercicio todos
                  los días. El ejercicio es vital para su salud física y mental,
                  y también puede ayudar a prevenir problemas de comportamiento.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Última actualización hace 2 hrs
                </small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src={ImagenCard2}
                loading="lazy"
                alt="Imagen perro con familia"
              />
              <Card.Body>
                <Card.Title>Proporciona un entorno seguro </Card.Title>
                <Card.Text>
                  Mantén tu hogar y jardín seguros para tu perro, eliminando
                  objetos pequeños que puedan ser ingeridos, asegurando cercas y
                  puertas, y manteniendo productos químicos y plantas tóxicas
                  fuera de su alcance.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Última actualización hace 5 mins
                </small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src={ImagenCard3}
                loading="lazy"
                alt="Imagen dueña cepillando perro"
              />
              <Card.Body>
                <Card.Title>Cepillado regular y cuidado dental</Card.Title>
                <Card.Text>
                  Cepilla el pelaje de tu perro regularmente para prevenir
                  enredos y eliminar el pelo suelto. También es importante
                  cepillar sus dientes regularmente y proporcionarle juguetes
                  masticables para ayudar a mantener su salud dental.
                </Card.Text>
              </Card.Body>
              <Card.Footer bg="dark">
                <small className="text-muted">
                  Última actualización hace 8 hrs
                </small>
              </Card.Footer>
            </Card>
          </CardGroup>
          <br />
          <h4 className="texto__consejos">
            Siguiendo estos consejos, puedes ayudar a garantizar que tu perro
            tenga una vida feliz, saludable y satisfactoria junto a ti.
          </h4>
          <br />
          <CardGroup
            bg="dark"
            data-bs-theme="dark"
            style={{ gap: "0.5rem", margin: "1rem" }}
          >
            <Card>
              <Card.Img
                variant="top"
                src={ImagenCard4}
                loading="lazy"
                alt="Imagen perro comiendo"
              />
              <Card.Body>
                <Card.Title>Alimentación adecuada</Card.Title>
                <Card.Text>
                  Proporciona a tu perro una dieta equilibrada y adecuada para
                  su edad, tamaño y nivel de actividad. Consulta con tu
                  veterinario para determinar las necesidades nutricionales
                  específicas de tu perro y evita sobrealimentarlo.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Última actualización hace 7 hrs
                </small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src={ImagenCard5}
                loading="lazy"
                alt="Imagen perro con su dueña"
              />
              <Card.Body>
                <Card.Title>Proporciona amor y atención </Card.Title>
                <Card.Text>
                  Los perros son animales sociales que necesitan amor y
                  atención. Dedica tiempo a jugar, acariciar y relacionarte con
                  tu perro todos los días para fortalecer vuestro vínculo y
                  promover su bienestar emocional.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Última actualización hace 1 mins
                </small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src={ImagenCard6}
                loading="lazy"
                alt="Imagen placa perro"
              />
              <Card.Body>
                <Card.Title>Identificación y microchip</Card.Title>
                <Card.Text>
                  Asegúrate de que tu perro lleve una identificación actualizada
                  con tu información de contacto en todo momento. Considera
                  también la posibilidad de implantarle un microchip para
                  aumentar las posibilidades de encontrarlo en caso de que se
                  pierda.
                </Card.Text>
              </Card.Body>
              <Card.Footer bg="dark">
                <small className="text-muted">
                  Última actualización hace 30 mins
                </small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default Inicio;
