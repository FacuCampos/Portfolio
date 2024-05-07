const Navbar = () => {
  return (
    <nav className="navegador">
      <div className="nav-list">
        <a href="#inicio" className="nav-link">
            <div className="nav-link-div">
                <p className="nav-link-text">Inicio</p>
            </div>
        </a>
        <a href="#" className="nav-link">
            <div className="nav-link-div">
                <p className="nav-link-text">Acerca de</p>
            </div>
        </a>
        <a href="#" className="nav-link">
            <div className="nav-link-div">
                <p className="nav-link-text">Proyectos</p>
            </div>
        </a>
        <a href="#" className="nav-link">
            <div className="nav-link-div">
                <p className="nav-link-text">Contacto</p>
            </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
