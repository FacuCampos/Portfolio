import {
  Acerca,
  Contacto,
  Experiencia,
  Intro,
  Layout,
  Proyectos,
} from "../../components";
import { useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "animate.css";
import { useTranslation } from "react-i18next";

const Home = () => {
  const MySwal = withReactContent(Swal);

  const { i18n } = useTranslation("global");

  useEffect(() => {
    MySwal.fire({
      title: <h2>{i18n.language === "en" ? "Sent!" : "¡Enviado!"}</h2>,
      html: (
        <p>
          {i18n.language === "en"
            ? "The message has been sent successfully"
            : "El mensaje ha sido enviado exitosamente"}
        </p>
      ),
      buttonsStyling: false,
      allowOutsideClick: false,
      allowEnterKey: false,
      allowEscapeKey: false,
      stopKeydownPropagation: false,
      showCloseButton: true,
      showClass: {
        popup: `
          animate__animated
          animate__zoomIn
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__zoomOut
          animate__faster
        `,
      },
      customClass: {
        popup: "emailSendToast",
      },
    });
  }, []);

  return (
    <Layout>
      <Intro />
      <Acerca />
      <Experiencia />
      <Proyectos />
      <Contacto />
    </Layout>
  );
};

export default Home;
