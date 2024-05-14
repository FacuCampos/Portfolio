import { useEffect, useState, useRef } from "react";
import { certificados } from "../../data";
import { Certificado } from "../../components";
import { animateScroll } from "react-scroll";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Certificaciones = () => {
  const [verMas, setVerMas] = useState(false);
  const [boton, setBoton] = useState({ texto: "Ver todos" });

  const ref = useRef(null);

  const buttonHandler = () => {
    setVerMas(!verMas);
    const posicion = ref.current ? ref.current.offsetTop : 0;
    ref.current &&
      verMas &&
      animateScroll.scrollTo(posicion - 140, {
        smooth: true,
        duration: 900,
        offset: 0,
      });
    const certDropdown = document.querySelector(".certificaciones-contenedor");
    verMas
      ? certDropdown.classList.remove("mostrarRows")
      : certDropdown.classList.add("mostrarRows");
  };

  useEffect(() => {
    verMas ? setBoton({ texto: "Ocultar" }) : setBoton({ texto: "Ver todos" });
  }, [verMas]);

  return (
    <div className="certificaciones-contenedor" ref={ref}>
      <div className="primer-cert">
        <Certificado key={"certificado1"} data={certificados[0]} />
      </div>
      <div className="certDropdown">
        <div className="certDropdownDiv">
          {certificados &&
            certificados
              .slice(1)
              .map((el, index) => (
                <Certificado key={`certificado${index + 1}`} data={el} />
              ))}
        </div>
      </div>
      <button onClick={buttonHandler} className="cert-boton iconRotateX">
        <p>{boton.texto}</p>
        <ChevronDownIcon />
      </button>
    </div>
  );
};

export default Certificaciones;
