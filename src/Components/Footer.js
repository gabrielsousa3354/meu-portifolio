import React from 'react';
import './css/Footer.css';
const Footer = () => {
  return (
    <footer>
      
      <div className="footer-container">
        {/* Primeira Coluna */}
        <div className="footer-column">
          <img 
            src="./Images/logo.png"
            alt="Logo da Acredite" 
            className="footer-logo"
          />
          <p><strong>CNPJ:</strong> 00.000.000/0001-00</p>
          <p><strong>Endereço:</strong> Rua , 123, Centro - São Paulo/SP, CEP 01234-567</p>
        </div>

        {/* Segunda Coluna */}
        <div className="footer-column">
          <p><strong>Contato:</strong></p>
          <p>Email: contato@acredite.com</p>
          <p>Telefone: (11) 1234-5678</p>
          <p>
            <a href="/politica-de-privacidade">Política de Privacidade</a> | 
            <a href="/termos-de-uso"> Termos de Uso</a>
          </p>
        </div>

        {/* Terceira Coluna */}
        <div className="footer-column">
          <p><strong>Bancos com Convênio:</strong></p>
          <ul>
            <li>BRB</li>
            <li>Caixa</li>
            <li>Bradesco</li>
            <li>Santander</li>
            <li>Itaú</li>
          </ul>
          
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2025 A-credit. Todos os direitos reservados.</p>
      </div>
     
    </footer>
  );
};

export default Footer;
