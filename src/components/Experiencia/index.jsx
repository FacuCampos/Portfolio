import { experiencia } from "../../data";
import { Seccion } from "../../components";
import { useTranslation } from "react-i18next";

const Experiencia = () => {
  const { t, i18n } = useTranslation("global");

  return (
    <Seccion
      titulo={t("navbar.experience")}
      className="sectionClass"
      seccion="2"
      id="experiencia"
    >
      <ul className="listaExperiencia">
        {experiencia &&
          experiencia.map((el, index) => {
            return (
              <li key={`experiencia${index}`}>
                <p className="exp-nombre">
                  {(i18n.language === "en" ? el.trabajo.en : el.trabajo.es) +
                    (el.empresa
                      ? `${el.empresa !== "freelance" ? (i18n.language === "en" ? " at" : " en") : " -"} ${
                          el.empresa
                        }.`
                      : ".")}
                </p>
                <p className="exp-tiempo">
                  <strong>{`${el.inicio} - ${
                    el.finalizacion ? el.finalizacion : (i18n.language === "en" ? "Present" : "Actualidad")
                  }`}</strong>
                </p>
              </li>
            );
          })}
      </ul>
    </Seccion>
  );
};

export default Experiencia;
