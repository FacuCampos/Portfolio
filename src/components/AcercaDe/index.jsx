import { useTranslation } from "react-i18next";
import { Certificaciones, Seccion, Tecnologias } from "../../components";
import {
  DocumentTextIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/16/solid";
import HTMLReactParser from "html-react-parser/lib/index";

const AcercaDe = () => {
  const { t } = useTranslation("global");

  const handleCV = () => {
    const link = document.createElement("a");
    link.href = "./CV_Campos.pdf";
    link.download = "cv_campos.pdf";
    link.click();
  };

  return (
    <Seccion titulo={t("aboutMe.title")} seccion="1" id="acerca">
      <div className="acercaInfo">
        <div className="retrato">
          <img src="/img/retrato.jpg" alt="Mi foto" />
        </div>
        <div className="infoDiv">
          <ul>
            {t("aboutMe.text", { returnObjects: true }).map((el, index) => (
              <li key={`aboutme-${index}`}>
                <p>{HTMLReactParser(el)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="curriculum">
        <a
          className="curriculumBoton"
          href={"./CV_Campos.pdf"}
          target="_blank"
        >
          <DocumentTextIcon />
          <p>Ver CV</p>
        </a>
        <button
          className="curriculumBoton"
          onClick={handleCV}
        >
          <DocumentArrowDownIcon />
          <p>Descargar CV</p>
        </button>
      </div>

      <Tecnologias />

      <div className="certificaciones" id="certificaciones">
        <h3>{t("aboutMe.certificates.title")}</h3>
        <hr className="separador" />
        <Certificaciones />
      </div>
    </Seccion>
  );
};

export default AcercaDe;
