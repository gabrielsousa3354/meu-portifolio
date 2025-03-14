import React from "react";
import "./css/Home.css";

const Home = () => {
  return (
    <div className="home">
     
      <div className="top-banner">
  <h1>
    SOLUÇÕES <span className="thin-text">QUE AJUDAM SEU</span> NEGÓCIO
  </h1>
  <div className="divider"></div>
</div>
      <div
        className="main-content"
        style={{
          backgroundImage: `url('/Images/mulher_sorrindo.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="features-list">
          <div className="feature-item">
            <img src="./icons/support_agent1.png" alt="Atendimento Personalizado" />
            <p>Atendimento Personalizado</p>
          </div>
          <hr />
          <div className="feature-item">
            <img src="./icons/check_circle2.png" alt="Facilidade no Processo" />
            <p>Facilidade no Processo</p>
          </div>
          <hr />
          <div className="feature-item">
            <img src="./icons/speed2.png" alt="Aprovação Rápida" />
            <p>Aprovação Rápida</p>
          </div>
          <hr />
          <div className="feature-item">
            <img src="./icons/phone_in_talk5.png" alt="Suporte ao Cliente" />
            <p>Suporte ao Cliente</p>
          </div>
        </div>

        <div className="central-message">
  <h1 className="main-text">
    <span>ACREDITE</span>
    <span className="thin">NO SEU</span>
    <span>SONHO</span>
  </h1>
</div>
        <div className="empty-space"></div>
      </div>
    </div>
  );
};

export default Home;
