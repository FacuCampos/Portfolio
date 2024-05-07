import { Navbar } from "../../components";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="mainClass">{children}</main>
    </>
  );
};

export default Layout;
