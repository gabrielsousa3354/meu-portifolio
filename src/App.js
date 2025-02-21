import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Simulador from './Components/simulador';
import QuemSomos from './Components/QuemSomos';
import SejaParceiro from './Components/SejaParceiro';
import PoliticaPrivacidade from './Components/PoliticaPrivacidade';
import TermosDeUso from './Components/TermosUso'; // Importando Termos de Uso

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/simulador" element={<Simulador />} />
          <Route path="/quemsomos" element={<QuemSomos />} />
          <Route path="/sejaparecer" element={<SejaParceiro />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/termos-de-uso" element={<TermosDeUso />} /> {/* Nova rota adicionada */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
