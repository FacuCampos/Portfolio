import {proyectos} from "../../data";
import {Proyecto} from "../../components";

const Proyectos = () => {
  return (
    <section className="sectionClass" id="proyectos">
      <h2>Proyectos</h2>
      <div className="proyectos-contenedor">
        {
          proyectos && proyectos.map((el, index) => <Proyecto key={`proyecto${index}`} datos={el}/>)
        }
      </div>
    </section>
  )
}

export default Proyectos

