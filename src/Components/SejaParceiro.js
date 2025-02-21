import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './css/SejaParceiro.css';

function SejaParceiro() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    cnpj: '',
    nomeFantasia: '',
    nomeContato: '',
    celular: '',
    telefone: '',
    email: '',
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    ramoAtividade: '',
    comoConheceu: '',
    politicaPrivacidade: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Envia os dados para o EmailJS
    emailjs.sendForm(
      'service_gnip4a4', // ID do serviço do EmailJS
      'template_xu0x66m', // ID do template do EmailJS
      e.target, // O formulário HTML que foi enviado
      'xl_uzcviTfNWN5xKQ' // Sua chave pública do EmailJS
    ).then(
      (result) => {
        alert('Formulário enviado com sucesso!');
        e.target.reset();
      },
      (error) => {
        console.error('Erro ao enviar o formulário:', error);
        alert('Erro ao enviar o formulário. Tente novamente.');
      }
    ).finally(() => {
      setLoading(false);
    });
  };

  // Para atualizar os dados do formulário conforme o usuário preenche
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className="seja-parceiro-page">
      <div className="image-text-section">
        <div className="text-content">
          <h1>SEJA NOSSO PARCEIRO</h1>
          <p>
          Junte-se a nós, preencha já o seu Précadastro e torne-se um parceiro .
          </p>
         
        </div>
        <div className="image-content">
          <img src="./Images/hand.jpg" alt="Seja Parceiro" />
        </div>
      </div>
      <div className='sec-text'>
        <p>
        A <span class="highlight">A-Credit</span> é especialista no mercado de financiamento imobiliário e está pronta para ajudar você a oferecer as melhores soluções
aos seus clientes. Com experiência consolidada, trabalhamos para atender as necessidades do mercado, facilitando o acesso à casa
própria e ajudando seus clientes a realizarem o sonho do imóvel próprio. Nosso objetivo é fortalecer sua atuação no setor
imobiliário, oferecendo condições personalizadas e um atendimento ágil e transparente. Com a A-Credit, você tem um parceiro
comprometido com o sucesso do seu negócio e com a satisfação dos seus clientes. Preencha já o seu Pré-cadastro e venha fazer
parte da nossa rede de parceiros. Juntos, vamos transformar oportunidades em resultados e garantir o crescimento do seu negócio!<br />
<span class="highlight">A-Credit. Soluções em financiamento imobiliário que realizam sonhos.</span>
        </p>
      </div>
      <form id="demo-form" onSubmit={handleSubmit} className="styled-form">
  <div className="form-row">
    <div className="form-column">
      <label>
        CNPJ:
        <input type="text" name="cnpj" placeholder='00.000.000/0000-00' value={formData.cnpj} onChange={handleChange} required />
      </label>
      <label>
        Nome Fantasia:
        <input type="text" name="nomeFantasia" value={formData.nomeFantasia} onChange={handleChange} required />
      </label>
      <label>
        Nome do Contato:
        <input type="text" name="nomeContato" value={formData.nomeContato} onChange={handleChange} required />
      </label>
      <label>
        Celular:
        <input type="tel" name="celular" placeholder='(00) 00000-0000' value={formData.celular} onChange={handleChange} required />
      </label>
      <label>
        Telefone:
        <input type="tel" name="telefone" placeholder='(00) 00000-0000' value={formData.telefone} onChange={handleChange} />
      </label>
    </div>

    <div className="form-column">
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        CEP:
        <input type="text" name="cep" placeholder='00000-000' value={formData.cep} onChange={handleChange} required />
      </label>
      <label>
        Endereço:
        <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} required />
      </label>
      <div className="double-field">
        <label>
          Número:
          <input type="text" name="numero" value={formData.numero} onChange={handleChange} required />
        </label>
        <label>
          Complemento:
          <input type="text" name="complemento" value={formData.complemento} onChange={handleChange} />
        </label>
      </div>
      <label>
        Bairro:
        <input type="text" name="bairro" value={formData.bairro} onChange={handleChange} required />
      </label>
    </div>
  </div>
<div className='final'>
  <label>
    Ramo de Atividade:
    <select name="ramoAtividade" value={formData.ramoAtividade} onChange={handleChange} required>
      <option value="">Selecione</option>
      <option value="imobiliaria">Imobiliária</option>
      <option value="corretora">Corretora</option>
      <option value="consultoria">Consultoria</option>
    </select>
  </label>
  <label>
    Como conheceu a A-Credit:
    <textarea name="comoConheceu" value={formData.comoConheceu} onChange={handleChange} rows="3"></textarea>
  </label> </div>
  <div className="form-footer">
  <label className="privacy-policy">
    <input
      type="checkbox"
      name="politicaPrivacidade"
      checked={formData.politicaPrivacidade}
      onChange={handleChange}
      required
      className="checkbox"
    />
    Concordo com a <a href="/politica-privacidade" target="_blank">Política de Privacidade</a>
  </label>

  <button
    type="submit"
    className="submit-button"
    disabled={loading}
  >
    Enviar
  </button>
</div>

</form>

    </div>
  );
}

export default SejaParceiro;
