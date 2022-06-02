function maiorNome(nomes){
    let resultadoNome = "";
    for(indexNome in nomes){
        for(indexNome2 in nomes){
            if(nomes[indexNome].length > nomes[indexNome2].length && nomes[indexNome].length > resultadoNome.length){
                resultadoNome = nomes[indexNome];
            }
        }
    }
    return resultadoNome;
};

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));