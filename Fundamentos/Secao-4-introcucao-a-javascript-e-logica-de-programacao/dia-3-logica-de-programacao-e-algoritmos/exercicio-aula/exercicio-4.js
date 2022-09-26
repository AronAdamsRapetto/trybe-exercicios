let = maiorPrimo = 0;

for(let i = 2; i <= 50; i += 1){
    for(let k = 2; k <= 50; k += 1){
        if(i % k === 0 && i != k){
            break;
        }
        else if(i === k){
            maiorPrimo = i;
        }
    }
}
console.log(maiorPrimo);