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
      html: `
      <div class="toastDiv">
        <p>Change language to <strong>English</strong> here</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
        </svg>
      </div>
      `,
      toast: true,
      stopKeydownPropagation: false,
      timer: window.innerWidth <= 992 ? 2000 : 5000,
      timerProgressBar: true,
      position: "top-right",
      showCloseButton: true,
      showConfirmButton: false,
      customClass: {
        popup: "popupClass",
      },
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__backOutRight
          animate__faster
        `,
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
