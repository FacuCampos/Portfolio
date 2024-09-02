import { useTranslation } from "react-i18next";

const Introduccion = () => {
  const { t } = useTranslation("global");

  return (
    <section id="inicio" className="seccionInicio">
      <div className="capaTransparente">
        <h1 className="tituloInicio">{t("header.title")}</h1>
        <p className="textoInicio text-center">
          <strong>{t("header.shortMessage")}</strong>
        </p>
        <p className="textoInicio text-center">{t("header.text")}</p>
      </div>
    </section>
  );
};

export default Introduccion;
