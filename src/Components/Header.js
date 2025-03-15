import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header">
      <div className="navbar">
        <div className="logo">
          <Link to="/home">
            <img src="./Images/logo2.png" alt="Logo da Empresa" />
          </Link>
        </div>


        {/* Links de navegação */}
        <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
          <li>
            <Link to="/simulador">Simulador</Link>
          </li>
          <li>
            <Link to="/quemsomos">Quem Somos</Link>
          </li>
          <li>
            <Link to="/sejaparecer">Seja Parceiro</Link>
          </li>
        </ul>

      </div>
    </header>
  );
};

export default Header;
