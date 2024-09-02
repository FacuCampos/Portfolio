import { useTranslation } from "react-i18next";

const Certificado = ({ data }) => {
  const { i18n } = useTranslation("global");

  return (
    <div className="certificado">
      <div className="certificado-contenido">
        <div className="cert-nombre">
          <p>{i18n.language === "en" ? data.nombre.en : data.nombre.es}</p>
          <hr className="separador2" />
        </div>
        <a href={`/img/certificaciones/${data.img}`} target="_blank">
          <img src={`/img/certificaciones/${data.img}`} alt={i18n.language === "en" ? data.alt.en : data.alt.es} />
        </a>
      </div>
    </div>
  );
};

export default Certificado;
