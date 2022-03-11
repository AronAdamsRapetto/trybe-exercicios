function maisSeRepete(numeros){    
    let auxCont = 0;
    let numeroMaisRepetido = 0;
    for(index in numeros){
        let cont = 0;
        for(index2 in numeros){
            if(numeros[index] === numeros[index2]){
                cont += 1;
            }
            if(cont > auxCont){
                numeroMaisRepetido = numeros[index];
                auxCont = cont;
            }
        }
    }
    return numeroMaisRepetido;
};

console.log(maisSeRepete([2, 3, 2, 5, 8, 2, 3]));

// for(let index = 0; index < numeros.lenght; index += 1){
//     let cont = 0;
//     for(let index2 = 0; index2 < numeros.lenght; index2 += 1){