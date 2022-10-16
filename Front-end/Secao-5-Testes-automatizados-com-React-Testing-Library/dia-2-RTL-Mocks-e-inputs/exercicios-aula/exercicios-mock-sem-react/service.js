const fetch = require('node-fetch');

const randomNumber = () => Math.floor(Math.random() * 100);

const upperCase = (texto) => texto.toUpperCase();

const firstLetter = (texto) => texto[0];

const mergeText = (texto1, texto2) => texto1 + texto2;

const fetchDogs = async () => {
  const URL = 'https://dog.ceo/api/breeds/image/random';

  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

fetchDogs();

module.exports = { randomNumber, upperCase, firstLetter, mergeText, fetchDogs };