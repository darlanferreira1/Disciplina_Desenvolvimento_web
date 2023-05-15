import React, { useEffect, useState } from 'react';

const Questao03 = () => {
  const [maiorPopulacao, setMaiorPopulacao] = useState(''); // Estado para armazenar a capital com maior população
  const [menorPopulacao, setMenorPopulacao] = useState(''); // Estado para armazenar a capital com menor população

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population") // Faz uma requisição para a API Restcountries
      .then(response => response.json()) // Converte a resposta em JSON
      .then(data => {
        let maiorPop = 0; // Variável para armazenar a maior população
        let menorPop = Infinity; // Variável para armazenar a menor população
        let maiorIndex = 0; // Índice do país com maior população no vetor data
        let menorIndex = 0; // Índice do país com menor população no vetor data

        data.forEach((country, index) => { 
          const population = country.population; 
          if (population > maiorPop) { 
            maiorPop = population; 
            maiorIndex = index; 
          }
          if (population < menorPop) {
            menorPop = population; 
            menorIndex = index; 
          }
        });

        setMaiorPopulacao(data[maiorIndex].capital[0])
        setMenorPopulacao(data[menorIndex].capital[0]);
      })
      .catch(error => console.log(error)); 
  }, []);

  return (
    <div>
     <h3>Capitais com Maior e Menor População na Europa:</h3>
      <p>Maior População: {maiorPopulacao}</p>
      <p>Menor População: {menorPopulacao}</p>
    </div>
  );
};

export default Questao03;
