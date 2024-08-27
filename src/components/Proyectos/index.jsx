import {proyectos} from "../../data";
import {Proyecto, Seccion} from "../../components";

const Proyectos = () => {
  return (
    <Seccion titulo="Proyectos" seccion="1" id="proyectos">
      <div className="proyectos-contenedor">
        {
          proyectos && proyectos.map((el, index) => <Proyecto key={`proyecto${index}`} datos={el}/>)
        }
      </div>
    </Seccion>
  )
}

export default Proyectos

