const fatorial = 10;
let resultadoFatorial = 1;

for(let i = fatorial - 1; i >= 1 ; i -= 1){
    resultadoFatorial = resultadoFatorial * i; 
}

console.log("resultado do fatorial de 10: " + resultadoFatorial);