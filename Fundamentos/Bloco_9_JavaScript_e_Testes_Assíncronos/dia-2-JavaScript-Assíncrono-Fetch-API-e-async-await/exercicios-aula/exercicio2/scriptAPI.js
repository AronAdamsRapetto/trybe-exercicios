const url_API = 'https://api.coincap.io/v2/assets';
const listaMoedas = document.getElementById('lista-moedas');
let arrayMoedas = [];

const fetchMoeadas = () => {
    const objRequest = {
        method: 'GET'    
    };
    fetch(url_API, objRequest)
      .then((response) => response.json())
      .then((data) => {
        arrayMoedas = data.data.filter(({rank}) => rank <= 10);        
        arrayMoedas.map(({ name, symbol, supply}) => {
          const novoElemento = document.createElement('li');
          novoElemento.innerText = `${name} (${symbol}): ${parseFloat(supply).toFixed(2)}`;
          listaMoedas.appendChild(novoElemento);
        })
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
