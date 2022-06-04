const randomNumber = () => Math.floor(Math.random() * 100);

const upperCase = (texto) => texto.toUpperCase();

const firstLetter = (texto) => texto[0];

const mergeText = (texto1, texto2) => texto1 + texto2;

module.exports = { randomNumber, upperCase, firstLetter, mergeText };