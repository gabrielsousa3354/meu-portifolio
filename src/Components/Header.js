import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="navbar">
        {/* Espaço para o logotipo */}
        <div className="logo">
  <Link to="/home">
    <img src="./Images/logo2.png" alt="Logo da Empresa" />
  </Link>
</div>
        <ul className="nav-links">
  <li><Link to="/simulador">Simulador</Link></li>
  <li><Link to="/quemsomos">Quem Somos</Link></li>
  <li><Link to="/sejaparecer">Seja Parceiro</Link></li>
</ul>


        {/* Ícones de redes sociais à direita */}
        <div className="contact-icons">
          <a href="https://wa.me/5511914930509" target="_blank" rel="noopener noreferrer">
            <img src="./Images/whatsapp-icon.png" alt="WhatsApp" />
          </a>
          <a className="face" href="https://facebook.com/suaempresa" target="_blank" rel="noopener noreferrer">
            <img src="./Images/facebook-icon.png" alt="Facebook" />
          </a>
          <a className="insta" href="https://www.instagram.com/acreditsolucoesimob?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <img  src="/images/instagram-icon.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
