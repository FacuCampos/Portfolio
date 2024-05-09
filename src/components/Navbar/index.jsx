import {
  HomeIcon,
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  Bars3Icon,
  XMarkIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

function handleNav() {
  const fondoBlur = document.querySelector(".mainClass");
  fondoBlur.classList.toggle("blur");

  const topDiv = document.querySelector(".navegador");
  topDiv.classList.toggle("mostrarMenu");
  topDiv.classList.toggle("mostrarCruz");
}

function handleScroll(elem) {
  const nav = document.getElementById("navbar");
  const target = document.querySelector(elem);

  if (nav){
    const targetRect = target.getBoundingClientRect();
    const navHeight = nav.offsetHeight;
    const offset = targetRect.top - navHeight;

    window.scrollBy({ top: offset, behavior: "smooth" });
  } else {
    window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
  }

  handleNav()
}

const Navbar = () => {
  return (
    <nav id="navbar" className="navegador mostrarMenu">
      <div className="nav-top">
        <p className="nav-top-texto">Menu</p>
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
            <p className="nav-link-text">Inicio</p>
          </div>
        </button>
        <button onClick={() => handleScroll("#acerca")} className="nav-link">
          <div className="nav-link-div">
            <DocumentTextIcon className="nav-link-icon" />
            <p className="nav-link-text">Acerca de</p>
          </div>
        </button>
        <button
          onClick={() => handleScroll("#experiencia")}
          className="nav-link"
        >
          <div className="nav-link-div">
            <BriefcaseIcon className="nav-link-icon" />
            <p className="nav-link-text">Experiencia</p>
          </div>
        </button>
        <button onClick={() => handleScroll("#proyectos")} className="nav-link">
          <div className="nav-link-div">
            <CodeBracketIcon className="nav-link-icon" />
            <p className="nav-link-text">Proyectos</p>
          </div>
        </button>
        <button onClick={() => handleScroll("#contacto")} className="nav-link">
          <div className="nav-link-div">
            <ChatBubbleLeftRightIcon className="nav-link-icon" />
            <p className="nav-link-text">Contacto</p>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
