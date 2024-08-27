import { Footer, Navbar } from "../../components";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="mainClass">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
