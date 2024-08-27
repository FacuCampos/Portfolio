import { Certificaciones, Seccion, TecCard, Tecnologias } from "../../components";

const AcercaDe = () => {
  return (
    <Seccion titulo="Acerca de mí" seccion="1" id="acerca">
      <div className="acercaInfo">
        <div className="retrato">
          <img src="/img/retrato.jpg" alt="Mi foto" />
        </div>
        <ul>
          <li>
            <p>
              Me llamo <strong>Facundo José Campos</strong>, tengo 25 años y
              vivo en la Ciudad Autónoma de Buenos Aires, Argentina.
            </p>
          </li>
          <li>
            <p>
              Soy un <strong>programador front-end especializado en React JS</strong>.
              Me gusta aprender a utilizar nuevas tecnologias, por lo que sigo
              desarrollome constantemente.
            </p>
          </li>
          <li>
            <p>
              Empecé la carrera de ingenieria industrial al salir del
              secundario, pero al cabo de unos años me di cuenta que no era lo
              que me interesaba. Allí tuve un cuatrimestre con introducción a la
              programación, materia que me encantó y me di cuenta que era lo que
              realmente me apasionaba. Por eso en 2022 decidí cambiar de rumbo
              definitivamente.
            </p>
          </li>
          <li>
            <p>
              Estoy <strong>abierto a oportunidades laborales</strong> donde
              pueda contribuir, aprender y crecer profesionalmente.
            </p>
          </li>
        </ul>
      </div>

      <Tecnologias/>

      <div className="certificaciones" id="certificaciones">
        <h3>Certificaciones</h3>
        <hr className="separador" />
        <Certificaciones />
      </div>
    </Seccion>
  );
};

export default AcercaDe;
