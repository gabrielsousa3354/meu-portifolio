import React from "react";
import "./css/Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <img
            src="./Images/logo.png"
            alt="Logo da Acredite"
            className="footer-logo"
          />
          <p>
            <strong>CNPJ:</strong> 57.524.519/0001-96
          </p>
          <p>
            <strong>Endereço:</strong> Avenida Paulista, 1636, CJ 4 PAV. 15,
            SALA 1504,<br></br> Paulista Corporate, CEP 01310-200.{" "}
          </p>
        </div>
        <div className="footer-column">
          <p>
            <strong>Contato:</strong>
          </p>
          <p>Email: soluções.acredit@gmail.com</p>
          <p>Telefone: (11)91493-0509</p>
          <p>
            <a href="/politica-privacidade">Política de Privacidade</a>
            <span class="barra">|</span>
            <a href="/termos-de-uso"> Termos de Uso</a>
          </p>
        </div>
        <div className="footer-column">
          <p>
            <strong>Bancos com Convênio:</strong>
          </p>
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
