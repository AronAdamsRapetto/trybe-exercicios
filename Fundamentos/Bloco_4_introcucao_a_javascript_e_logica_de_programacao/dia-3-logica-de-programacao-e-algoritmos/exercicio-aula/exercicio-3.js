let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = "";

for(let index = 0; index < array.length; index += 1){
    for(let index2 = 0; index2 < array.length; index2 += 1){
        if(array[index].length > array[index2].length && array[index].length > maiorPalavra.length ){
            maiorPalavra = array[index];
        }
    }
}
console.log(maiorPalavra);