// 1. Faça um algoritmo que calcule a soma de 50 a 100 usando a estrutura “for” e retorne no formato:
// A soma de 50 a 100 é: X.

let soma = 0;

for (let i = 50; i <= 100; i += 1){
    soma += i;
}
console.log("A soma de 50 a 100 é: " + soma);

// 2. Crie um algoritmo que conte quantos números do intervalo entre 1 e 125 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta a sua escolha.

let cont = 0;

for(let i = 1; i <= 125; i += 1){
    if(i % 3 === 0){
        cont++;
    }
}

if(cont === 50){
    console.log('50 ímpares!! Nunca mais ein... kkkk');
}

// 3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.

let jogador1 = 'tesoura';
let jogador2 = 'tesoura';

if(jogador1 === jogador2){
    console.log("Empate");
}
else if(jogador1 === 'papel' && jogador2 === 'pedra' || jogador1 === 'tesoura' && jogador2 === 'papel' || jogador1 === 'pedra' && jogador2 === 'tesoura'){
    console.log("Jogador 1 Vence");
}
else{
    console.log("Jogador 2 vence");
}

// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: “A pessoa é maior de idade”.

let pessoa = 17;

if(pessoa >= 18){
    console.log("A pessoa é maior de idade");
}
else{
    console.log("A pessoa é menor de idade");
}


// 5. Crie um algoritmo que recebe a idade de Marcella, Carlos e Camila e imprima quem é a mais nova no formato:
// “Pessoa” é a mais nova.

let idadeMarcella = 32;
let idadeCarlos = 40;
let idadeCamila = 24;

if(idadeMarcella < idadeCamila && idadeMarcella < idadeCarlos){
    console.log("Marcella é a mais nova");
}
else if(idadeCamila < idadeCarlos){
    console.log("Camila é a mais nova");
}
else{
    console.log("Carlos é o mais novo");
}