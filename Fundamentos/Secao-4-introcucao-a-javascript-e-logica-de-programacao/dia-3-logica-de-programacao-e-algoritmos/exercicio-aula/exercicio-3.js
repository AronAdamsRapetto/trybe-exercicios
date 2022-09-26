let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = "";
let menorPalavra;

for(let index = 0; index < array.length; index += 1){
    if(menorPalavra === undefined){
        menorPalavra = array[index];
    }
    for(let index2 = 0; index2 < array.length; index2 += 1){
        if(array[index].length > array[index2].length && array[index].length > maiorPalavra.length){
            maiorPalavra = array[index];
        }
        else if(array[index].length < array[index2].length && array[index].length < menorPalavra.length){
            menorPalavra = array[index];
        }
    }
}
console.log("maior palavra: " + maiorPalavra);
console.log("menor paravra: " + menorPalavra);