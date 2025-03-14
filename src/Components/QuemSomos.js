import React from "react";
import "./css/QuemSomos.css";

const QuemSomos = () => {
  return (
    <div className="quem-somos-container">
      <div className="top-section">
        <p className="top-text">
          Transformando <strong>sonhos</strong> em <strong>realidade.</strong>
        </p>
      </div>

      <div className="header-section">
        <h1 className="header-title">QUEM SOMOS</h1>
      </div>
      <div className="main-content">
        <div className="text-section">
          <h2 className="main-title">Sobre nós</h2>
          <p className="main-description">
            Nós, da ACREDIT, estamos aqui para descomplicar seu processo de
            financiamento imobiliário, garantindo agilidade e tranquilidade, com
            as melhores taxas do mercado e parcelas que cabem no seu bolso.
            Viemos para transformar seus sonhos em realidade. Oferecemos suporte
            do início do fim do processo, e você não precisa nem sair de casa. É
            tudo online e gratuito. Conte conosco!
          </p>
        </div>
        <img
          src="/Images/quemsomossolo.png"
          alt="Descrição da segunda imagem"
          className="main-image"
        />
      </div>

      <div className="cards-container">
        <div className="card">
          <h3 className="card-title">Instituicoes financeiras parceiras</h3>
          <p className="card-text">
            {" "}
            Santander, Itaú, Bradesco, Banco do Brasil, Caixa Econômica Federal,
            BRB, Inter.
          </p>
        </div>
        <div className="card">
          <h3 className="card-title">Financiamento descomplicado</h3>
          <p className="card-text">
            Você não precisa do stress para financiar seu imóvel, nós fazemos
            tudo por você, sem custo e sem sair de casa.{" "}
          </p>
        </div>
        <div className="card">
          <h3 className="card-title">Suporte exclusivo</h3>
          <p className="card-text">
            Estamos 24h disponíveis para tirar dúvidas, com tratamento
            humanizado e personalizado
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuemSomos;
