import { TecCard } from "../../components";

const AcercaDe = () => {
  const tecnologias = [
    {
      tipo: "frontend",
      nombre: "HTML 5",
      img: "html-5.svg",
      alt: "Icono de HTML",
    },
    { tipo: "frontend", nombre: "CSS 3", img: "css.svg", alt: "Icono de CSS" },
    {
      tipo: "frontend",
      nombre: "Javascript",
      img: "javascript.svg",
      alt: "Icono de Javascript",
    },
    {
      tipo: "frontend",
      nombre: "React JS",
      img: "react.svg",
      alt: "Icono de React",
    },
    {
      tipo: "backend",
      nombre: "Python",
      img: "python.svg",
      alt: "Icono de Python",
    },
    {
      tipo: "backend",
      nombre: "Django",
      img: "django.svg",
      alt: "Icono de Django",
    },
    {
      tipo: "backend",
      nombre: "PHP",
      img: "php.svg",
      alt: "Icono de PHP",
    },
    {
      tipo: "backend",
      nombre: "Laravel",
      img: "laravel.svg",
      alt: "Icono de Laravel",
    },
    {
      tipo: "frontend",
      nombre: "Sass",
      img: "sass.svg",
      alt: "Icono de Sass",
    },
    {
      tipo: "frontend",
      nombre: "Bootstrap",
      img: "bootstrap.svg",
      alt: "Icono de Bootstrap",
    },
    {
      tipo: "frontend",
      nombre: "Tailwind",
      img: "tailwind.svg",
      alt: "Icono de Tailwind",
    },
    {
      tipo: "backend",
      nombre: "MySQL",
      img: "mysql.svg",
      alt: "Icono de MySQL",
    },
    {
      tipo: "software",
      nombre: "Figma",
      img: "figma.svg",
      alt: "Icono de Figma",
    },
    {
      tipo: "backend",
      nombre: "Git",
      img: "git.svg",
      alt: "Icono de Git",
    },
    {
      tipo: "software",
      nombre: "Github",
      img: "github.svg",
      alt: "Icono de Github",
    },
    {
      tipo: "backend",
      nombre: "Node JS",
      img: "nodejs.svg",
      alt: "Icono de Node JS",
    },
    {
      tipo: "software",
      nombre: "Visual Studio",
      img: "vsc.svg",
      alt: "Icono de VSC",
    },
    {
      tipo: "backend",
      nombre: "SQLite",
      img: "sqlite.svg",
      alt: "Icono de SQLite",
    },
  ];

  const front = tecnologias.filter((el) => el.tipo == "frontend");
  const back = tecnologias.filter((el) => el.tipo == "backend");
  const software = tecnologias.filter((el) => el.tipo == "software");

  const certificados = [
    {
      nombre: "Desarrollo frontend React",
      img: "certificado_carrera_frontend.webp",
      alt: "Certificado de Desarrollador frontend React",
    },
    {
      nombre: "Desarrollo web",
      img: "certificado_desarrollo_web.webp",
      alt: "Certificado de desarrollo web",
    },
    {
      nombre: "Javascript",
      img: "certificado_javascript.webp",
      alt: "Certificado de Javascript",
    },
    {
      nombre: "React JS",
      img: "certificado_react.webp",
      alt: "Certificado de React JS",
    },
    {
      nombre: "Python",
      img: "certificado_python.webp",
      alt: "Certificado de Python",
    },
    {
      nombre: "PHP + MySQL",
      img: "certificado_php.webp",
      alt: "Certificado de PHP + MySQL",
    },
  ];

  return (
    <section className="sectionClass" id="acerca">
      <h2>Acerca de mí</h2>
      <div className="retrato">
        <img src="/img/retrato.jpg" alt="Mi foto" />
      </div>
      <ul>
        <li>
          <p>
            Me llamo <strong>Facundo José Campos</strong>, tengo 25 años y vivo en la Ciudad
            Autónoma de Buenos Aires, Argentina.
          </p>
        </li>
        <li>
          <p>
            Soy un strong <strong>programador front-end especializado en React JS</strong>. Me gusta
            aprender a utilizar nuevas tecnologias, por lo que sigo desarrollome
            constantemente.
          </p>
        </li>
        <li>
          <p>
            Empecé la carrera de ingenieria industrial al salir del secundario,
            pero al cabo de unos años me di cuenta que no era lo que me
            interesaba. Allí tuve un cuatrimestre con introducción a la
            programación, materia que me encantó y me di cuenta que era lo que
            realmente me apasionaba. Por eso en 2022 decidí cambiar de rumbo
            definitivamente.
          </p>
        </li>
        <li>
          <p>
            Estoy <strong>abierto a oportunidades laborales</strong> donde pueda contribuir,
            aprender y crecer profesionalmente.
          </p>
        </li>
      </ul>

      <div className="tecnologias">
        <h3>Tecnologías</h3>
        <hr className="separador" />
        <div className="tecs-contenedor">
          <div className="tecs-front">
            <div className="cat-titulo">
              <hr className="separadorTituloS" />
              <h4>Front-end</h4>
              <hr className="separadorTituloE" />
            </div>
            <div className="tec-list">
              {front &&
                front.map((el) => (
                  <TecCard key={"tec" + el.nombre} info={el} />
                ))}
            </div>
          </div>
          <div className="tecs-back">
            <div className="cat-titulo">
              <hr className="separadorTituloS" />
              <h4>Back-end</h4>
              <hr className="separadorTituloE" />
            </div>
            <div className="tec-list">
              {back &&
                back.map((el) => <TecCard key={"tec" + el.nombre} info={el} />)}
            </div>
          </div>
          <div className="tecs-software">
            <div className="cat-titulo">
              <hr className="separadorTituloS" />
              <h4>Software</h4>
              <hr className="separadorTituloE" />
            </div>
            <div className="tec-list">
              {software &&
                software.map((el) => (
                  <TecCard key={"tec" + el.nombre} info={el} />
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="certificaciones">
        <h3>Certificaciones</h3>
        <hr className="separador" />
        <div className="cert-contenedor">
          {certificados &&
            certificados.map((el, index) => (
              <div className="certificado" key={`certificado${index}`}>
                <div className="certificado-contenido">
                  <div className="cert-nombre">
                    <p>{el.nombre}</p>
                    <hr className="separador2" />
                  </div>
                  <a href={`/img/certificaciones/${el.img}`} target="_blank">
                    <img src={`/img/certificaciones/${el.img}`} alt={el.alt} />
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AcercaDe;
