import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classification, setClassification] = useState('');

  const calcularIMC = () => {
    if (altura && peso) {
      const imcCalculado = (peso / ((altura / 100) ** 2)).toFixed(2);
      setImc(imcCalculado);

      // Classificação com base no IMC
      if (imcCalculado < 18.5) {
        setClassification('Abaixo do Peso');
      } else if (imcCalculado < 24.9) {
        setClassification('Peso Normal');
      } else if (imcCalculado < 29.9) {
        setClassification('Sobrepeso');
      } else if (imcCalculado < 34.9) {
        setClassification('Obesidade Grau I');
      } else if (imcCalculado < 39.9) {
        setClassification('Obesidade Grau II');
      } else {
        setClassification('Obesidade Grau III');
      }
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div>
        <label>Altura (cm):</label>
        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </div>
      <div>
        <label>Peso (kg):</label>
        <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </div>
      <button onClick={calcularIMC}>Calcular</button>
      {imc && (
        <div>
          <h2>Resultado</h2>
          <p>IMC: {imc}</p>
          <p>Classificação: {classification}</p>
        </div>
      )}
    </div>
  );
};

export default App;
