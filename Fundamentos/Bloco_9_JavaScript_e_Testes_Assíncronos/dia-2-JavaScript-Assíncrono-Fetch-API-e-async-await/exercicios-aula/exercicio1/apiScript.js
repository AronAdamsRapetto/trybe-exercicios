// apiScript.js
const API_URL = "https://icanhazdadjoke.com/";
const containerPiada = document.getElementById('jokeContainer');

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: "GET",
    headers: { Accept: "application/json" },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => containerPiada.innerText = data.joke)    
    .catch((erro) => containerPiada.innerText = `Houve algo errado com usa piada :'(
      Tente novamente mais tarde!
      ${erro}`);
};

window.onload = () => fetchJoke();
