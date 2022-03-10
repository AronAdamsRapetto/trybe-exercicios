const n = 7;
let auxLinhas = 0;
let auxEspacos = (n / 2);
auxEspacos = Math.floor(auxEspacos) + 1;

if(n % 2 != 0){
    for(let linha = 0; linha <= n; linha += 1){
        auxLinhas += 1;
        let geoPiramide = "";
        if(auxLinhas % 2 != 0){
            auxEspacos -= 1;    
            for(let coluna = 1; coluna <= n; coluna += 1){
                if(linha === n-1){
                    geoPiramide = geoPiramide + "*";
                }       
                else if(coluna < auxEspacos || coluna > n - auxEspacos){
                    geoPiramide = geoPiramide + " ";
                }                
                else if(coluna === auxEspacos + 1 && auxLinhas != 1 || coluna === n - auxEspacos){
                    geoPiramide = geoPiramide + "*";
                }
                else{
                    geoPiramide = geoPiramide + " ";
                }
            }            
        }
        console.log(geoPiramide);            
    }
}
else{
    console.log("numero não é par...");
}