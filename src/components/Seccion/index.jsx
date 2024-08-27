import { Titulo } from "../../components";

const CustomSeccion = ({ titulo, seccion, id, children }) => {
  return (
    <section className={`sectionClass seccion${seccion}`} id={id}>
      <div className="sectionContenido">
        <Titulo titulo={titulo} />
        {children}
      </div>
    </section>
  );
};

export default CustomSeccion;
