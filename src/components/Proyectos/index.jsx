import { proyectos } from "../../data";
import { Proyecto, Seccion } from "../../components";
import { useTranslation } from "react-i18next";

const Proyectos = () => {
  const { t } = useTranslation("global");

  return (
    <Seccion titulo={t("navbar.projects")} seccion="1" id="proyectos">
      <div className="proyectos-contenedor">
        {proyectos &&
          proyectos.map((el, index) => (
            <Proyecto key={`proyecto${index}`} datos={el} />
          ))}
      </div>
    </Seccion>
  );
};

export default Proyectos;
