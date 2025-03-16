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
          Nós, da ACREDIT, nascemos com um propósito claro: ajudar você a transformar seu sonho da casa própria em realidade. Sabemos que o processo de financiamento imobiliário pode ser complexo, e é por isso que trabalhamos para torná-lo mais simples, ágil e acessível.

Somos uma empresa jovem no mercado, mas já chegamos para fazer a diferença, oferecendo um atendimento personalizado e humanizado. Acreditamos que cada cliente é único e merece um suporte exclusivo, do início ao fim da jornada, sem burocracia e sem complicações.

Nosso compromisso é garantir as melhores taxas do mercado, com condições que realmente cabem no seu bolso. E o melhor: todo o processo é 100% online e gratuito. Você não precisa sair de casa para conquistar o seu imóvel dos sonhos!
<br></br>
Nossos valores:<br></br>
✅ Transparência e confiança em cada etapa do financiamento;<br></br>
✅ Atendimento personalizado para entender suas necessidades;<br></br>
✅ Inovação e tecnologia para simplificar sua jornada;<br></br>
✅ Compromisso em oferecer sempre as melhores condições;<br></br>

Na ACREDIT, não apenas financiamos imóveis, financiamos sonhos. Conte conosco para dar esse passo com segurança e tranquilidade!
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
