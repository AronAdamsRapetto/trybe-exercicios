const readLine = require('readline-sync');

const weight = readLine.questionFloat('What is your weigth? ');
const height = readLine.questionFloat('What is your heigth? ');

const imc = weight / (height * height);

if (imc < 18.5) {
  console.log('Abaixo do peso');
} else if (imc <= 24.9) {
  console.log('Peso normal');
} else if (imc <= 29.9) {
  console.log('Acima do peso');
} else if (imc <= 34.9) {
  console.log('Obesidade grau I');
} else if (imc <= 39.9) {
  console.log('Obesidade grau II');
} else {
  console.log('Obesidade graus III e IV');
}

console.log(imc.toFixed(2));