import { useEffect, useState, useRef } from "react";
import { certificados } from "../../data";
import { Certificado } from "../../components";
import { animateScroll } from "react-scroll";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Certificaciones = () => {
  const [verMas, setVerMas] = useState(false);
  const [boton, setBoton] = useState({ texto: "Ver todos" });
  const [desktop, setDesktop] = useState(false);

  const ref = useRef(null);

  function handleResize() {
    const { innerWidth: windowWidth } = window;
    setDesktop(windowWidth >= 992);
  }

  useEffect(() => {
    const { innerWidth: windowWidth } = window;
    setDesktop(windowWidth >= 992);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const buttonHandler = () => {
    setVerMas(!verMas);
    const posicion = ref.current ? ref.current.offsetTop : 0;
    ref.current &&
      verMas &&
      animateScroll.scrollTo(posicion - 140, {
        smooth: true,
        duration: 700,
        offset: 0,
      });
  };

  useEffect(() => {
    verMas ? setBoton({ texto: "Ocultar" }) : setBoton({ texto: "Ver todos" });
    const certDropdown = document.querySelector(".certificaciones-contenedor");
    verMas
      ? certDropdown.classList.add("mostrarRows")
      : certDropdown.classList.remove("mostrarRows");
  }, [verMas]);

  return (
    <div className="certificaciones-contenedor" ref={ref}>
      {desktop ? (
        <div className="primer-cert">
          {certificados &&
            certificados
              .slice(1,4)
              .map((el, index) => (
                <Certificado key={`certificado${index + 1}`} data={el} />
              ))}
        </div>
      ) : (
        <div className="primer-cert">
          <Certificado key={"certificado1"} data={certificados[0]} />
        </div>
      )}
      <div className="certDropdown">
        <div className="certDropdownDiv">
          {certificados &&
            certificados
              .slice(4)
              .map((el, index) => (
                <Certificado key={`certificado${index + 1}`} data={el} />
              ))}
        </div>
      </div>
      <hr className="separador"/>
      <button onClick={buttonHandler} className="cert-boton iconRotateX">
        <p>{boton.texto}</p>
        <ChevronDownIcon />
      </button>
    </div>
  );
};

export default Certificaciones;
