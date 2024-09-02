import { useEffect, useState, useRef } from "react";
import { certificados } from "../../data";
import { Certificado } from "../../components";
import { animateScroll } from "react-scroll";
import { useTranslation } from "react-i18next";

const Certificaciones = () => {
  const {t} = useTranslation("global")

  const [verMas, setVerMas] = useState(false);
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
      animateScroll.scrollTo(desktop ? posicion + 450 : posicion + 500, {
        smooth: true,
        duration: 700,
        offset: 0,
      });
  };

  useEffect(() => {
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
              .slice(0,3)
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
              .slice(3)
              .map((el, index) => (
                <Certificado key={`certificado${index + 1}`} data={el} />
              ))}
        </div>
      </div>
      <button onClick={buttonHandler} className="cert-boton">
        <span className="btnSpan spanVer">{t("aboutMe.certificates.button", { returnObjects: true })[0]}</span>
        <span className="btnSpan spanOcultar">{t("aboutMe.certificates.button", { returnObjects: true })[1]}</span>
      </button>
    </div>
  );
};

export default Certificaciones;
