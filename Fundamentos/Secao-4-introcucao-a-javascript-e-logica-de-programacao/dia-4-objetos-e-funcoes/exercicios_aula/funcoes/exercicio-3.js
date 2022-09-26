function menorValor(numeros){
    let indexMenorValor = 0;

    for(index in numeros){
        for(index2 in numeros){
            if(numeros[index] < numeros[index2] && numeros[index] < numeros[indexMenorValor]){
                indexMenorValor = index;
            }
        }
    }
    return indexMenorValor;
};

console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));