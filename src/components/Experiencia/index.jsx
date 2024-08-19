import { experiencia } from "../../data";

const Experiencia = () => {
  return (
    <section className="sectionClass" id="experiencia">
      <h2>Experiencia</h2>
      <ul>
        {experiencia &&
          experiencia.map((el, index) => {
            return (
              <li key={`experiencia${index}`}>
                <p className="exp-nombre">{el.trabajo + (el.empresa ? `${el.empresa !== "freelance" ? " en " : ""} ${el.empresa}.` : ".")}</p>
                <p className="exp-tiempo">{`${el.inicio} - ${el.finalizacion ? el.finalizacion : "Actualidad"}`}</p>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default Experiencia;
