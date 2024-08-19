import {
  Bootstrap,
  Css,
  Django,
  Figma,
  Git,
  Github,
  Html,
  Javascript,
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
} from "../TecIconos";
import { Github as GithubRBI, Link } from "react-bootstrap-icons";

const Proyecto = ({ datos }) => {
  const { titulo, img, url, descripcion, tecnologias } = datos;

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

      default:
        break;
    }
  };

  return (
    <div href={url} className="proyectoCard">
      <img src={`img/proyectos/${imagen}`} alt={titulo} />
      <div className="proyectoCardInfo">
        <h4>{titulo}</h4>
        <hr />
        <p>{descripcion}</p>
        <h5>Tecnologias usadas</h5>
        <hr />
        <div className="tecsUsadas">
          {
            tecnologias && tecnologias.map((el) => iconoTec(el))
          }
        </div>
        <h5>Repositorio</h5>
        <hr />
        <a href={"#"} className="proyectoLink">
          <GithubRBI />
        </a>
        <h5>Visitar</h5>
        <hr />
        <a href={"#"} className="proyectoLink">
          <Link />
        </a>
      </div>
    </div>
  );
};

export default Proyecto;
