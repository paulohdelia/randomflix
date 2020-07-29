import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.svg';
import Button from '../Button';

import './Menu.css';

const Menu = () => {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Random Flix" />
      </Link>

      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo Vídeo
      </Button>
    </nav>
  );
};

export default Menu;
