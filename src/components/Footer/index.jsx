import React from "react";
import { Github, Linkedin } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/facundo-jose-campos/" target="_blank" className="linkedin" title="LinkedIn">
              <Linkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/FacuCampos" target="_blank" className="github" title="Github">
              <Github />
            </a>
          </li>
        </ul>
      <div>
        <span>© Facundo José Campos - 2024</span>
      </div>
    </footer>
  );
};

export default Footer;
