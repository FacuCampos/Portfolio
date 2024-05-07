import { Acerca, Contacto, Intro, Layout, Proyectos } from "../../components";

const Home = () => {
  return (
    <Layout>
      <Intro/>
      <Acerca/>
      <Proyectos/>
      <Contacto/>
    </Layout>
  );
};

export default Home;
