import { useTranslation } from "react-i18next";
import {
  Bootstrap,
  Css,
  Django,
  Figma,
  Git,
  Github,
  Html,
  Javascript,
  Jekyll,
  Laravel,
  Mysql,
  Nodejs,
  Php,
  Python,
  React,
  Sass,
  Sqlite,
  Tailwind,
  VisualStudio,
  Vite,
} from "../TecIconos";
import { Github as GithubRBI, Link } from "react-bootstrap-icons";

const Proyecto = ({ datos }) => {
  const { t, i18n } = useTranslation("global");

  const { titulo, img, url, repositorio, descripcion, tecnologias } = datos;

  const imagen = img !== "" ? img : "default.png";

  const iconoTec = (tec) => {
    switch (tec) {
      case "bootstrap":
        return <Bootstrap />;

      case "css":
        return <Css />;

      case "django":
        return <Django />;

      case "figma":
        return <Figma />;

      case "git":
        return <Git />;

      case "github":
        return <Github />;

      case "html":
        return <Html />;

      case "javascript":
        return <Javascript />;

      case "laravel":
        return <Laravel />;

      case "mysql":
        return <Mysql />;

      case "nodejs":
        return <Nodejs />;

      case "php":
        return <Php />;

      case "python":
        return <Python />;

      case "react":
        return <React />;

      case "sass":
        return <Sass />;

      case "sqlite":
        return <Sqlite />;

      case "tailwind":
        return <Tailwind />;

      case "vsc":
        return <VisualStudio />;

      case "jekyll":
        return <Jekyll />;

      case "vite":
        return <Vite />;

      default:
        break;
    }
  };

  return (
    <div className="proyectoCard">
      <div className="proyectoImg">
        <img src={`img/proyectos/${imagen}`} alt={titulo} />
      </div>
      <div className="proyectoCardInfo">
        <h3>{titulo}</h3>
        <hr />
        <p className="proyectoDescripcion">{i18n.language === "en" ? descripcion.en : descripcion.es}</p>
        <h5>{t("project.subtitle")}</h5>
        <hr />
        <div className="tecsUsadas">
          {tecnologias &&
            tecnologias.map((el, idx) => {
              return (
                <div
                  title={el.slice(0, 1).toUpperCase() + el.slice(1)}
                  key={`tec-${idx}`}
                >
                  {iconoTec(el.toLowerCase())}
                </div>
              );
            })}
        </div>
        <div className="proyectoEnlaces">
          {repositorio && (
            <a
              href={repositorio}
              target="_blank"
              title="Repositorio"
              className="proyectoLink positionLeft"
            >
              <GithubRBI />
              <p>{t("project.codeLink")}</p>
            </a>
          )}
          {url && (
            <a
              href={url}
              target="_blank"
              title="Ir al sitio"
              className="proyectoLink positionRight"
            >
              <Link />
              <p>{t("project.siteLink")}</p>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Proyecto;
