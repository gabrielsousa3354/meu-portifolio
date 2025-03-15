// FloatingButton.js
import React, { useState } from 'react';
import './css/FloatingButton.css'; // Importando o CSS do botão flutuante

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Função para abrir e fechar o menu de redes sociais
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="floating-button">
      <button className="btn" onClick={toggleMenu}>
        {/* Substitua pelo caminho da sua imagem */}
        <img src="./Images/connection.png" alt="Ícone do Botão" style={{ width: '30px', height: '30px' }} />
      </button>

      {/* Links das redes sociais, visíveis somente quando o menu estiver aberto */}
      <div className={`social-links ${isOpen ? 'open' : ''}`}>
        <a
          href="https://wa.me/5511914930509"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./Images/whatsapp-icon.png" alt="WhatsApp" />
        </a>
        <a
          href="https://facebook.com/suaempresa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./Images/facebook-icon.png" alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com/acreditsolucoesimob?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./Images/instagram-icon.png" alt="Instagram" />
        </a>
      </div>
    </div>
  );
};

export default FloatingButton;
