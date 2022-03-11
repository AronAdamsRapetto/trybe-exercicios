function somaNumero(N){
    let resultado = 0;

    for(let i = 1; i <= N; i += 1){
        resultado += i;
    }
    return resultado;
}

console.log(somaNumero(5));