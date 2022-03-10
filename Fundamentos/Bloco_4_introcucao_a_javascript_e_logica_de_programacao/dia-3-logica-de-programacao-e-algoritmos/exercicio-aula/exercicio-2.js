let word = 'tryber';
let wordInvertida = "";

for(let i = word.length-1; i >= 0; i -= 1){
    wordInvertida += word[i];
}

console.log(wordInvertida);