import React, { useState } from 'react';
import './css/simulador.css';

const Simulador = () => {
  const questions = [
    {
      question: "Qual o tipo de imóvel?",
      description: "Selecione o tipo de imóvel que deseja financiar.",
      options: ["Casa", "Apartamento", "Terreno"],
      image: "./Images/home.png",
    },
    {
      question: "Qual o valor financiado?",
      description: "Use o controle deslizante ou insira o valor.",
      options: [], // Tratado separadamente no JSX
      image: "./Images/value.png",
    },
    {
      question: "Qual a localização do imóvel?",
      description: "Selecione o estado onde você deseja morar.",
      options: [], // Aqui não há opções fixas, pois o estado é alterado dinamicamente
      image: "/Images/brazil.png",
    },
    {
      question: "Qual o estado do imóvel?",
      description: "Selecione se o imóvel é novo ou usado.",
      options: ["Novo", "Usado"],
      image: "./Images/predio.png",
    },
    {
      question: "Dados Pessoais",
      description: "Informe seus dados pessoais para prosseguir.",
      options: [],
      image: "./Images/group.png",
      fields: [
        {
          name: "Nome",
          type: "text",
          placeholder: "Digite seu nome completo",
        },
        {
          name: "Data de Nascimento",
          type: "date",
        },
        {
          name: "Tipo de Renda",
          type: "select",
          options: ["Funcionário Público", "Aposentado", "Empregado", "Autônomo"],
        },
        {
          name: "Contato",
          type: "tel",
          placeholder: "Digite seu telefone",
        },
        {
          name: "Estado Civil",
          type: "select",
          options: ["Solteiro", "Casado", "Viúvo"],
        },
      ],
    },
    
  ];
  const [currentStep, setCurrentStep] = useState(0); // Passo atual
  const [answers, setAnswers] = useState({}); // Respostas do usuário
  const [customValue, setCustomValue] = useState(""); // Valor personalizado
  const [sliderValue, setSliderValue] = useState(1000); // Valor da barra deslizante
  const [selectedState, setSelectedState] = useState("Brasil"); // Estado selecionado
  const [statePhrase, setStatePhrase] = useState("Selecione o estado onde você deseja morar."); // Frase do estado
  const [stateImage, setStateImage] = useState("/Images/brazil.png"); // Imagem associada ao estado
  const [city, setCity] = useState(""); // Cidade inserida
  // Função para formatar o valor como moeda brasileira
  const formatCurrency = (value) => {
    const formattedValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
    return formattedValue;
  };

  // Função para lidar com a mudança do valor inserido manualmente
  const handleCustomValueChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos

    if (rawValue) {
      const numericValue = parseInt(rawValue, 10); // Converte para número
      const formattedValue = formatCurrency(numericValue / 100); // Formata como reais
      setCustomValue(formattedValue); // Atualiza o estado
    } else {
      setCustomValue(""); // Se vazio, remove o valor
    }
  };

  // Função para salvar a resposta
  const handleOptionClick = (option) => {
    setAnswers({ ...answers, [currentStep]: option });
  };
  const handleStateChange = (e) => {
    const state = e.target.value; // Pega o estado selecionado
    setSelectedState(state);

    // A alteração de imagem ocorre apenas na pergunta de localização
    if (currentStep === 2) {  // Verifica se estamos na pergunta de localização
      const stateData = {
        Brasil: { phrase: "Selecione abaixo o estado onde você deseja morar.", image: "/Images/brazil.png" },
        AC: { phrase: "Cercado pela Amazônia, o Acre é terra de biodiversidade, cultura indígena e um povo acolhedor.", image: "/Images/estados/AC.png" },
        AL: { phrase: "Com belas praias e uma rica cultura, Alagoas encanta com sua natureza exuberante.", image: "/Images/estados/AL.png" },
        AM: { phrase: "No coração da Amazônia, o Amazonas é um território de rios majestosos e uma fauna única.", image: "/Images/estados/AM.png" },
        AP: { phrase: "O Amapá, com suas florestas e o Parque Nacional do Cabo Orange, é um lugar de beleza natural incomparável.", image: "/Images/estados/AP.png" },
        BA: { phrase: "Bahia é o berço do samba, das praias paradisíacas e da cultura afro-brasileira.", image: "/Images/estados/BA.png" },
        CE: { phrase: "Ceará oferece praias de tirar o fôlego e a vibrante cidade de Fortaleza.", image: "/Images/estados/CE.png" },
        DF: { phrase: "Brasília, com seus modernos edifícios e arquitetura ícone, é a capital do Brasil.", image: "/Images/estados/DF.png" },
        ES: { phrase: "Espírito Santo é famoso por suas belas praias, montanhas e a cultura capixaba.", image: "/Images/estados/ES.png" },
        GO: { phrase: "Goiás é o estado das festas tradicionais, com destaque para a culinária goiana e a cultura sertaneja.", image: "/Images/estados/GO.png" },
        MA: { phrase: "Maranhão é um lugar de encantos, com o Parque Nacional dos Lençóis Maranhenses e a rica história de São Luís.", image: "/Images/estados/MA.png" },
        MG: { phrase: "Minas Gerais é o estado da boa comida, das montanhas e das cidades históricas.", image: "/Images/estados/MG.png" },
        MS: { phrase: "Mato Grosso do Sul é a terra das belezas naturais, com destaque para o Pantanal e o Parque Nacional da Serra da Bodoquena.", image: "/Images/estados/MS.png" },
        MT: { phrase: "Mato Grosso é conhecido pela sua grande biodiversidade, com o Pantanal e o Cerrado como destaque.", image: "/Images/estados/MT.png" },
        PA: { phrase: "Pará é um dos maiores estados do Brasil, famoso por sua floresta e os rios amazônicos.", image: "/Images/estados/PA.png" },
        PB: { phrase: "A Paraíba oferece praias tranquilas e um rico patrimônio cultural, com destaque para João Pessoa.", image: "/Images/estados/PB.png" },
        PE: { phrase: "Pernambuco é famoso pelo frevo, as praias e o manguebeat, além de sua culinária deliciosa.", image: "/Images/estados/PE.png" },
        PI: { phrase: "História, calor humano e as belezas do Delta do Parnaíba fazem do Piauí um estado singular", image: "/Images/estados/PI.png" },
        PR: { phrase: "O Paraná é conhecido pela beleza das Cataratas do Iguaçu, com uma rica cultura de imigração europeia.", image: "/Images/estados/PR.png" },
        RJ: { phrase: "Rio de Janeiro, a cidade maravilhosa, com suas praias icônicas e o Cristo Redentor, é um dos destinos mais visitados do Brasil.", image: "/Images/estados/RJ.png" },
        RN: { phrase: "Rio Grande do Norte é famoso pelas suas dunas, praias e pelo Parque Nacional de Jericoacoara.", image: "/Images/estados/RN.png" },
        RO: { phrase: "Rondônia, com suas florestas e rios, é um lugar de beleza natural exuberante.", image: "/Images/estados/RO.png" },
        RR: { phrase: "Roraima é um dos estados menos explorados do Brasil, com uma natureza intocada e vastos rios.", image: "/Images/estados/RR.png" },
        RS: { phrase: "Com suas tradições gaúchas e paisagens deslumbrantes, o Rio Grande do Sul orgulha e cativa.", image: "/Images/estados/RS.png" },
        SC: { phrase: "Santa Catarina é um estado com paisagens deslumbrantes, desde as praias até a Serra do Rio do Rastro.", image: "/Images/estados/SC.png" },
        SE: { phrase: "Sergipe é conhecido pelas suas praias de águas mornas e pela cidade histórica de Aracaju.", image: "/Images/estados/SE.png" },
        SP: { phrase: "São Paulo é o estado mais populoso do Brasil, com uma cultura vibrante e a maior economia do país.", image: "/Images/estados/SP.png" },
        TO: { phrase: "Tocantins tem a exuberância do cerrado e uma natureza deslumbrante com rios e cachoeiras.", image: "/Images/estados/TO.png" }
      };

      const { phrase, image } = stateData[state] || { phrase: "Estado não reconhecido.", image: "/Images/brazil.png" };
      setStatePhrase(phrase);  // Atualiza a frase
      setStateImage(image);    // Atualiza a imagem
    }
  };

  // Função para salvar a cidade
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const [showThankYou, setShowThankYou] = useState(false); // Novo estado para controlar a exibição da mensagem de agradecimento

  // Função para avançar para a próxima pergunta ou mostrar a mensagem de agradecimento
  const handleNext = () => {
    if (currentStep === questions.length - 1) {
      // Última pergunta, exibe a mensagem de agradecimento
      setShowThankYou(true);
    } else {
      // Avança para a próxima pergunta
      setCurrentStep(currentStep + 1);
    }
  };
  
  // Função para habilitar o botão "Avançar"
  const isNextEnabled = () => {
    // Condição para a pergunta de Dados Pessoais
    if (currentStep === 4) {
      const allFieldsFilled =
        answers["Nome"] &&
        answers["Data de Nascimento"] &&
        answers["Tipo de Renda"] &&
        answers["Contato"] &&
        answers["Estado Civil"];
      return allFieldsFilled;
    }
  
    // Condições para as outras perguntas (como as anteriores, por exemplo)
    if (currentStep === 1) {
      return sliderValue >= 1000 || customValue !== "";
    }
  
    if (currentStep === 2) {
      return selectedState !== "Brasil" && city !== "";
    }
  
    // Para todas as outras etapas, a validação pode ser baseada na resposta
    return !!answers[currentStep];
  };
  
  // Função para tratar as mudanças nos campos
  const handleInputChange = (e, fieldName) => {
    setAnswers({
      ...answers,
      [fieldName]: e.target.value,
    });
  };
    const progressPercentage = ((currentStep + 1) / questions.length) * 100;
  return (
    <div className='simu'> 
    <div className="simulador-container">
      {/* Pergunta */}
      <div className="simulador-pergunta">
        <h2>{questions[currentStep].question}</h2>
      </div>
  
      {/* Descrição com frase e imagem alteradas diretamente */}
      <div className="simulador-descricao">
        {/* Condicional para exibir a imagem correta conforme a pergunta */}
        <img
          src={currentStep === 2 ? stateImage : questions[currentStep].image}
          alt="Descrição"
          className="descricao-imagem"
        />
        <p className="descricao-texto">
          {currentStep === 2 ? statePhrase : questions[currentStep].description}
        </p> {/* A frase só será alterada para a pergunta de localização */}
      </div>
  
      {/* Opções de escolha */}
      <div className="simulador-opcoes">
        {currentStep === 1 && (
          <>
            <h3>Selecione o valor financiado:</h3>
            <input
              type="range"
              min="1000"
              max="5000000"
              step="2000"
              value={sliderValue}
              onChange={(e) => setSliderValue(e.target.value)}
            />
            <p>Valor selecionado: {formatCurrency(sliderValue)}</p>
  
            <div className="opcao-personalizada">
              <label htmlFor="customValue">Ou insira um valor:</label>
              <input
                type="text"
                id="customValue"
                value={customValue}
                onChange={handleCustomValueChange}
                placeholder="Digite o valor"
              />
            </div>
          </>
        )}
  
        {currentStep === 2 && (
          <>
            <div className="location-question">
              <label htmlFor="state" className="location-label">Escolha o estado:</label>
              <select
                id="state"
                value={selectedState}
                onChange={handleStateChange}
                className="location-select"
              >
                <option value="Brasil">Brasil</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
            </div>
  
            {/* Adicionando o campo para a cidade */}
            <div className="city-input">
              <label htmlFor="city" className="city-label">Insira a cidade:</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={handleCityChange}
                placeholder="Digite o nome da cidade"
                className="city-input-field"
              />
            </div>
          </>
        )}
         {/* Mapeando as opções para exibir botões */}
         {currentStep === 2 && questions[currentStep].options.map((option, index) => (
          <button
            key={index}
            className={`opcao-localizacao ${answers[currentStep] === option ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
  
        {/* Mapeamento de opções para outras etapas */}
        {questions[currentStep].options.map((option, index) => (
          <button
            key={index}
            className={`opcao ${answers[currentStep] === option ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
       {/* Mapeamento de opções para outras etapas */}
       {currentStep === 4 && (
  <div className="question-container dados-pessoais-form">
    <form className='formulario'>
      {questions[currentStep].fields.map((field, index) => (
        <div className="field-container" key={index}>
          <label htmlFor={field.name}>{field.name}:</label>
          
          {field.type === "text" || field.type === "tel" ? (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              placeholder={field.placeholder} // Esse valor será para sugerir o que o usuário deve inserir
              value={answers[field.name] || ""}
              onChange={(e) => handleInputChange(e, field.name)}
            />
          ) : field.type === "date" ? (
            <input
              type="date"
              id={field.name}
              name={field.name}
              value={answers[field.name] || ""}
              onChange={(e) => handleInputChange(e, field.name)}
            />
          ) : field.type === "select" ? (
            <select
              id={field.name}
              name={field.name}
              value={answers[field.name] || ""}
              onChange={(e) => handleInputChange(e, field.name)}
            >
              <option value="">Selecione...</option>
              {field.options.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : null}
        </div>
      ))}
    </form>
  </div>
)}

      </div>
  {/* Botão Avançar e barra de progresso */}
  <div className="simulador-navegacao">
        <button
          className="botao-avancar"
          onClick={handleNext}
          disabled={!isNextEnabled()}
        >
          Avançar
        </button>
        <div className="barra-progresso">
          <div
            className="progresso"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
  
      {/* Se for o último passo, exibe a mensagem de agradecimento */}
      {showThankYou && (
        <div className="mensagem-agradecimento">
          <h2>Obrigado por completar o simulador!</h2>
          <p>Em breve entraremos em contato com você.</p>
        </div>
      )}
</div>
</div>
);// Fim do retorno do componente
 };
  
  export default Simulador;
  