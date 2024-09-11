import {
  HomeIcon,
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  Bars3Icon,
  XMarkIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation("global");

  const handleChangeLanguaje = (lang) => {
    i18n.changeLanguage(lang);
  };

  function handleNav() {
    const windowWidth = window.innerWidth;
    const fondoBlur = document.querySelector(".mainClass");

    if (windowWidth < 920) {
      fondoBlur.classList.toggle("blur");
    }

    const topDiv = document.querySelector(".navegador");
    topDiv.classList.toggle("mostrarMenu");
    topDiv.classList.toggle("mostrarCruz");
  }

  function handleScroll(elem) {
    const nav = document.getElementById("navbar");
    const target = document.querySelector(elem);

    if (nav) {
      const targetRect = target.getBoundingClientRect();
      const navHeight = nav.offsetHeight;
      const offset = targetRect.top - navHeight;

      window.scrollBy({ top: offset, behavior: "smooth" });
    } else {
      window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
    }

    handleNav();
  }

  const iconoLenguaje = i18n.language === "es" ? "englishIconRound" : "spanishIconRound"

  return (
    <nav id="navbar" className="navegador mostrarMenu">
      <div className="nav-top">
        <p className="nav-top-texto">{t("navbar.title")}</p>
        <div className="nav-top-div">
          <button
            onClick={() => handleNav()}
            className="nav-top-icon iconoCruz"
          >
            <XMarkIcon />
          </button>
          <button
            onClick={() => handleNav()}
            className="nav-top-icon iconoMenu"
          >
            <Bars3Icon />
          </button>
        </div>
      </div>
      <div className="nav-dropdown">
        <button onClick={() => handleScroll("#inicio")} className="nav-link">
          <div className="nav-link-div">
            <HomeIcon className="nav-link-icon" />
            <p className="nav-link-text">{t("navbar.home")}</p>
          </div>
        </button>
        <button onClick={() => handleScroll("#acerca")} className="nav-link">
          <div className="nav-link-div">
            <DocumentTextIcon className="nav-link-icon" />
            <p className="nav-link-text">{t("navbar.about")}</p>
          </div>
        </button>
        <button
          onClick={() => handleScroll("#experiencia")}
          className="nav-link"
        >
          <div className="nav-link-div">
            <BriefcaseIcon className="nav-link-icon" />
            <p className="nav-link-text">{t("navbar.experience")}</p>
          </div>
        </button>
        <button onClick={() => handleScroll("#proyectos")} className="nav-link">
          <div className="nav-link-div">
            <CodeBracketIcon className="nav-link-icon" />
            <p className="nav-link-text">{t("navbar.projects")}</p>
          </div>
        </button>
        <button onClick={() => handleScroll("#contacto")} className="nav-link">
          <div className="nav-link-div nav-link-contacto">
            <ChatBubbleLeftRightIcon className="nav-link-icon" />
            <p className="nav-link-text">{t("navbar.contact")}</p>
          </div>
        </button>
        <button onClick={() => handleChangeLanguaje(t("navbar.language"))} className="nav-link languageBtn" title={i18n.language === "en" ? "Cambiar idioma" : "Change language"}>
          <div className="nav-link-div languageDiv">
            <img src={`./img/icons/${iconoLenguaje}.svg`} className="nav-language" />
            {window.innerWidth <= 992 && <p className="nav-link-text">{i18n.language === "en" ? "language" : "idioma"}</p>}
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
