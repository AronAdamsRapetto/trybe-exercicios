const fetch = require('node-fetch');

// Mescla do async/await com .then() e .catch()

// const fetchJoke = async () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';
//   const url = 'api.chucknorris.io/jokes/random?category=dev'; // induz requisição ao erro

//   const result = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.value)
//     .catch((error) => `Algo deu errado :( \n${error}`);
  
//   console.log(result);
// };

// Mesclando async/await com try/catch

const fetchJoke = async () => {
    const url = 'https://api.chucknorris.io/jokes/random?category=dev';
    // const url = 'api.chucknorris.io/jokes/random?category=dev'; // induz requisição ao erro
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.value);
    } catch(error) {
      console.log(`Algo deu errado :( \n${error}`);
    }
  }

fetchJoke();
