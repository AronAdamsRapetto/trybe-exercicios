let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let maiorValor = 0;
let impar = 0
let menorValor = 100;



for (let numeros of numbers){
    console.log("numeros do array: " + numeros);
}

for (let i = 0; i < numbers.length; i += 1){
    soma = soma + numbers[i];

    if(numbers[i] > maiorValor){
        maiorValor = numbers[i];
    }
    else if(numbers[i] < menorValor){
        menorValor = numbers[i];
    }
    
    if(numbers[i] % 2 === 0){
        impar++;
    }    
}

let media = soma / numbers.length;

console.log("soma de todos os valores do array: " + soma);

console.log("A média dos valore do array é: " + media);

if(media > 20) {
    console.log("Valor maior que 20");
}
else{
    console.log("Valor menor ou igual a 20");
}

console.log(maiorValor + " é o maior valor do array");

console.log(menorValor + " é o menor valor do array");

if(impar > 0){
    console.log("Foram encontrados " + impar + " numeros impar dentro do array.");
}   
else{
    console.log("Nenhum valor ímpar encontrado dentro do array");
}
