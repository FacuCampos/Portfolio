import {
  EnvelopeFill,
  GeoAltFill,
  Github,
  Linkedin,
} from "react-bootstrap-icons";
import { FormContacto, Seccion } from "../../components";

const Contacto = () => {
  return (
    <Seccion titulo="Contacto" seccion="2" id="contacto">
      <div className="contactBox">
        <div className="infoContacto">
          <h3>Información:</h3>
          <div className="campoInfo">
            <div className="campoInfoIcon">
              <GeoAltFill />
            </div>
            <p> Ciudad Autónoma de Buenos Aires, Argentina</p>
          </div>
          <a
            href="mailto:facujcampos@gmail.com"
            className="campoInfo campoInfoPressable campoMail"
          >
            <div className="campoInfoIcon">
              <EnvelopeFill />
            </div>
            <p>facujcampos@gmail.com</p>
          </a>
          <a
            href="https://www.linkedin.com/in/facundo-jose-campos/"
            target="_blank"
            className="campoInfo campoInfoPressable"
          >
            <div className="campoInfoIcon">
              <Linkedin />
            </div>
            <p>Ver perfil</p>
          </a>
          <a
            href="https://github.com/FacuCampos"
            target="_blank"
            className="campoInfo campoInfoPressable"
          >
            <div className="campoInfoIcon">
              <Github />
            </div>
            <p>Github</p>
          </a>
        </div>
        <FormContacto />
      </div>
    </Seccion>
  );
};

export default Contacto;