import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer'; // Importando o Footer
import Home from './Components/Home';
import Simulador from './Components/simulador';
import QuemSomos from './Components/QuemSomos';
import SejaParceiro from './Components/SejaParceiro'; // Importando SejaParceiro


const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simulador" element={<Simulador />} />
          <Route path="/quemsomos" element={<QuemSomos />} />
          <Route path="/sejaparecer" element={<SejaParceiro />} /> {/* Adicionando a rota de SejaParceiro */}
        </Routes>
      </main>
      <Footer /> {/* Adicionando o Footer aqui */}
    </Router>
  );
};

export default App;
