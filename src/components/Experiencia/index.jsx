import { experiencia } from "../../data";
import { Seccion } from "../../components";

const Experiencia = () => {
  return (
    <Seccion
      titulo="Experiencia"
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
                  {el.trabajo +
                    (el.empresa
                      ? `${el.empresa !== "freelance" ? " en " : ""} ${
                          el.empresa
                        }.`
                      : ".")}
                </p>
                <p className="exp-tiempo">
                  <strong>{`${el.inicio} - ${
                    el.finalizacion ? el.finalizacion : "Actualidad"
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
