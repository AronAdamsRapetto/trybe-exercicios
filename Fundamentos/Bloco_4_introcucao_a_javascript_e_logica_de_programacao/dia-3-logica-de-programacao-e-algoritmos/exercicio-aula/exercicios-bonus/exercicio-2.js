const n = 5;


if(n > 1){
    for(let linha = 1; linha <= n; linha += 1){
        let geoTriangulo = "";
        for(let coluna = 0; coluna < linha; coluna += 1){
            geoTriangulo = geoTriangulo + "*";
        }
        console.log(geoTriangulo);
    }    
}