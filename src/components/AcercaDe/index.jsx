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
  ];

  const front = tecnologias.filter((el) => el.tipo == "frontend");

  const back = tecnologias.filter((el) => el.tipo == "backend");

  const software = tecnologias.filter((el) => el.tipo == "software");

  return (
    <section className="sectionClass" id="acerca">
      <h2>Acerca de mí</h2>
      <p>
        Me llamo Facundo José Campos, tengo 25 años y vivo en la Ciudad Autónoma
        de Buenos Aires, Argentina.
      </p>
      <p>
        Soy un programador front-end especializado en React JS. Me gusta
        aprender a utilizar nuevas tecnologias, por lo que sigo desarrollome
        constantemente.
      </p>
      <p>
        Empecé la carrera de ingenieria industrial al salir del secundario, pero
        al cabo de unos años me di cuenta que no era lo que me interesaba. Allí
        tuve un cuatrimestre con introducción a la programación, materia que me
        encantó y me di cuenta que era lo que realmente me apasionaba. Por eso
        en 2022 decidí cambiar de rumbo definitivamente.
      </p>
      <p>
        Estoy abierto a oportunidades laborales donde pueda contribuir, aprender
        y crecer profesionalmente.
      </p>

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

      </div>
    </section>
  );
};

export default AcercaDe;
