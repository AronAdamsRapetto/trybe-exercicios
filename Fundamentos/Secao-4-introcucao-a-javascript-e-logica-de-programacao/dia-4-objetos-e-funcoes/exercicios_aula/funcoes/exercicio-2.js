function maiorValor(numeros){
    let maiorValor = 0;

    for(index in numeros){
        for(index2 in numeros){
            if(numeros[index] > numeros[index2]){
                maiorValor = index;
            }
        }
    }
    return maiorValor;
};

let teste = maiorValor([2, 3, 6, 7, 10, 1]);
console.log(teste);