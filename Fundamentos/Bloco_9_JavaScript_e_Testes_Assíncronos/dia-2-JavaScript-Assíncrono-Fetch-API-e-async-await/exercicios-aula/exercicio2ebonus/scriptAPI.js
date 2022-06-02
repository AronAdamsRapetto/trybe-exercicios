const url_API = 'https://api.coincap.io/v2/assets';
const url_currencyAPI = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json'
const listaMoedas = document.getElementById('lista-moedas');
let arrayMoedas = [];

const fetchMoeadas = () => {
    const objRequest = {
        method: 'GET'    
    };
    fetch(url_API, objRequest)
      .then((response) => response.json())
      .then((data) => {
        cryptoMoedas = data.data.filter(({rank}) => rank <= 10);
        fetchCurrency(cryptoMoedas); 
      })
      .catch((erro) => {     
        const containerMoedas = document.getElementById('container-moedas');   
        const novoElemento = document.createElement('h2');
        novoElemento.innerText = `Algo inesperado aconteceu, tente novamente mais tarde! 
        ${erro}`;
        containerMoedas.appendChild(novoElemento);
      });
}

const fetchCurrency = (moedas) => {
  fetch(url_currencyAPI)
    .then((resposta) => resposta.json())
    .then((data) => {
      const { usd: { brl } } = data;
      console.log(moedas);
      moedas.map(({ name, symbol, priceUsd }) => {
        const novoElemento = document.createElement('li');
        novoElemento.innerText = `${name} (${symbol}): ${(parseFloat(priceUsd) * brl).toFixed(2)}`;
        listaMoedas.appendChild(novoElemento);
      });
    })
    .catch((erro) => {     
      const containerMoedas = document.getElementById('container-moedas');   
      const novoElemento = document.createElement('h2');
      novoElemento.innerText = `Algo inesperado aconteceu, tente novamente mais tarde! 
      ${erro}`;
      containerMoedas.appendChild(novoElemento);
    });
}

fetchMoeadas();
