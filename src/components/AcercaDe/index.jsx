import { useTranslation } from "react-i18next";
import { Certificaciones, Seccion, Tecnologias } from "../../components";
import HTMLReactParser from "html-react-parser/lib/index";

const AcercaDe = () => {
  const { t } = useTranslation("global");

  return (
    <Seccion titulo={t("aboutMe.title")} seccion="1" id="acerca">
      <div className="acercaInfo">
        <div className="retrato">
          <img src="/img/retrato.jpg" alt="Mi foto" />
        </div>
        <ul>
          {t("aboutMe.text", { returnObjects: true }).map((el, index) => (
            <li key={`aboutme-${index}`}><p>{HTMLReactParser(el)}</p></li>
          ))}
        </ul>
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
