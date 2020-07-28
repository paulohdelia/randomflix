import React from "react";
import Logo from "../../assets/img/Logo.svg";
import Button from "../Button";

import "./Menu.css";

const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="CS Flix" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
};

export default Menu;
