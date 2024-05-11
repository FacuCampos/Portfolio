import { TecCard } from "../../components";
import { tecnologias, certificados } from "../../data"

const AcercaDe = () => {

  const front = tecnologias.filter((el) => el.tipo == "frontend");
  const back = tecnologias.filter((el) => el.tipo == "backend");
  const software = tecnologias.filter((el) => el.tipo == "software");

  return (
    <section className="sectionClass" id="acerca">
      <h2>Acerca de mí</h2>
      <div className="retrato">
        <img src="/img/retrato.jpg" alt="Mi foto" />
      </div>
      <ul>
        <li>
          <p>
            Me llamo <strong>Facundo José Campos</strong>, tengo 25 años y vivo en la Ciudad
            Autónoma de Buenos Aires, Argentina.
          </p>
        </li>
        <li>
          <p>
            Soy un strong <strong>programador front-end especializado en React JS</strong>. Me gusta
            aprender a utilizar nuevas tecnologias, por lo que sigo desarrollome
            constantemente.
          </p>
        </li>
        <li>
          <p>
            Empecé la carrera de ingenieria industrial al salir del secundario,
            pero al cabo de unos años me di cuenta que no era lo que me
            interesaba. Allí tuve un cuatrimestre con introducción a la
            programación, materia que me encantó y me di cuenta que era lo que
            realmente me apasionaba. Por eso en 2022 decidí cambiar de rumbo
            definitivamente.
          </p>
        </li>
        <li>
          <p>
            Estoy <strong>abierto a oportunidades laborales</strong> donde pueda contribuir,
            aprender y crecer profesionalmente.
          </p>
        </li>
      </ul>

      <div className="tecnologias">
        <h3>Tecnologías</h3>
        <hr className="separador" />
        <div className="tecs-contenedor">
          <div className="tecs-front">
            <div className="cat-titulo">
              <hr className="separadorTituloL" />
              <h4>Front-end</h4>
              <hr className="separadorTituloR" />
            </div>
            <div className="tec-list">
              {front &&
                front.map((el) => (
                  <TecCard key={"tec" + el.nombre} info={el} />
                ))}
            </div>
          </div>
          <div className="tecs-back">
            <div className="cat-titulo">
              <hr className="separadorTituloL" />
              <h4>Back-end</h4>
              <hr className="separadorTituloR" />
            </div>
            <div className="tec-list">
              {back &&
                back.map((el) => <TecCard key={"tec" + el.nombre} info={el} />)}
            </div>
          </div>
          <div className="tecs-software">
            <div className="cat-titulo">
              <hr className="separadorTituloL" />
              <h4>Software</h4>
              <hr className="separadorTituloR" />
            </div>
            <div className="tec-list">
              {software &&
                software.map((el) => (
                  <TecCard key={"tec" + el.nombre} info={el} />
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="certificaciones">
        <h3>Certificaciones</h3>
        <hr className="separador" />
        <div className="cert-contenedor">
          {certificados &&
            certificados.map((el, index) => (
              <div className="certificado" key={`certificado${index}`}>
                <div className="certificado-contenido">
                  <div className="cert-nombre">
                    <p>{el.nombre}</p>
                    <hr className="separador2" />
                  </div>
                  <a href={`/img/certificaciones/${el.img}`} target="_blank">
                    <img src={`/img/certificaciones/${el.img}`} alt={el.alt} />
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AcercaDe;
