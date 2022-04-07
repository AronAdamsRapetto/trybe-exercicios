//Exercicio 1

const geraEmpregado = (nome) => {
  return { nomeCompleto: nome, email: `${nome.replace(" ", "_")}@trybe.com` };
};

const newEmployees = (func) => {
  const employees = {
    id1: func("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

console.log(newEmployees(geraEmpregado));

//Exercicio 2

const verificaResultado = (apostado, sorteado) =>
  sorteado === apostado ? `Parabéns você ganhou` : `Tente novamente`;

const sorteio = (aposta, func) => {
  numSorteio = Math.floor(Math.random() * 6);

  return func(aposta, numSorteio);
};
for (let i = 0; i < 10; i += 1) {
  console.log(sorteio(3, verificaResultado));
}

//Exercicio 3

const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

const verificaRepostas = (gabarito, respostas) => {
  let nota = 0;
  let respostasCertas = 0;
  let respostasErradas = 0;
  let semResposta = 0;
  for (let index = 0; index < gabarito.length; index += 1) {
    if (respostas[index] === "N.A") {
      nota += 0;
      semResposta +=1
    } else if (respostas[index] === gabarito[index]) {
      nota += 1;
      respostasCertas += 1;
    } else {
      nota -= 0.5;
      respostasErradas += 1;
    }
  }
  return `
  Nota final: ${nota}
  Respostas certas: ${respostasCertas}
  Respostas erradas ${respostasErradas}`
};

const resultadoProva = (gabarito, respostas, func) => func(gabarito, respostas);

console.log(resultadoProva(RIGHT_ANSWERS, STUDENT_ANSWERS, verificaRepostas));
