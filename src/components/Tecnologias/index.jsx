import { tecnologias } from "../../data";
import { TecCard } from "../../components";
import { useTranslation } from "react-i18next";

const Tecnologias = () => {
  const { t } = useTranslation("global");

  const front = tecnologias.filter((el) => el.tipo == "frontend");
  const back = tecnologias.filter((el) => el.tipo == "backend");
  const software = tecnologias.filter((el) => el.tipo == "software");
  const mobile = tecnologias.filter((el) => el.tipo == "mobile");
  const design = tecnologias.filter((el) => el.tipo == "design");

  return (
    <div className="tecnologias">
      <h3>{t("aboutMe.tecnologies.title")}</h3>
      <hr className="separador" />
      <div className="tecs-contenedor">
        <div className="tecs-front">
          <div className="cat-titulo">
            <hr className="separadorTituloL" />
            <h4>Front-end</h4>
            <hr className="separadorTituloR" />
          </div>
          <div className="tec-list">
            {front &&
              front.map((el) => <TecCard key={"tec" + el.nombre} info={el} />)}
          </div>
        </div>
        <div className="tecs-back">
          <div className="cat-titulo">
            <hr className="separadorTituloL" />
            <h4>Back-end</h4>
            <hr className="separadorTituloR" />
          </div>
          <div className="tec-list">
            {back &&
              back.map((el) => <TecCard key={"tec" + el.nombre} info={el} />)}
          </div>
        </div>
        <div className="tecs-mobile">
          <div className="cat-titulo">
            <hr className="separadorTituloL" />
            <h4>{t("aboutMe.tecnologies.mobile")}</h4>
            <hr className="separadorTituloR" />
          </div>
          <div className="tec-list">
            {mobile &&
              mobile.map((el) => <TecCard key={"tec" + el.nombre} info={el} />)}
          </div>
        </div>
        <div className="tecs-software">
          <div className="cat-titulo">
            <hr className="separadorTituloL" />
            <h4>Software</h4>
            <hr className="separadorTituloR" />
          </div>
          <div className="tec-list">
            {software &&
              software.map((el) => (
                <TecCard key={"tec" + el.nombre} info={el} />
              ))}
          </div>
        </div>
        <div className="tecs-design">
          <div className="cat-titulo">
            <hr className="separadorTituloL" />
            <h4>{t("aboutMe.tecnologies.design")}</h4>
            <hr className="separadorTituloR" />
          </div>
          <div className="tec-list">
            {design &&
              design.map((el) => <TecCard key={"tec" + el.nombre} info={el} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tecnologias;
