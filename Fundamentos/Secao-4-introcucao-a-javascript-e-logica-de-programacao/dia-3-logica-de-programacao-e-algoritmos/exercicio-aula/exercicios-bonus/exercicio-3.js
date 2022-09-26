const n = 10;
let auxEspacos = n + 1;

if(n > 1){
    for(let linha = 0; linha < n; linha += 1){
        let geoTrianguloInver= "";
        auxEspacos -= 1;
        for(let coluna = 0; coluna < n + 1; coluna += 1){
            if(coluna < auxEspacos){
                geoTrianguloInver = geoTrianguloInver + " ";
            }
            else{
                geoTrianguloInver = geoTrianguloInver + "*";
            }
        }
        console.log(geoTrianguloInver);
    }
}