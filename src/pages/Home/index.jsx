import { Acerca, Contacto, Experiencia, Intro, Layout, Proyectos } from "../../components";

const Home = () => {
  return (
    <Layout>
      <Intro/>
      <Acerca/>
      <Experiencia/>
      <Proyectos/>
      <Contacto/>
    </Layout>
  );
};

export default Home;
