// // a piramide só se formara com números împares
// // a base sendo o valor de n asteriscos
// // nas extremidades da piramide devem haver espaços
// // nas linhas pares deve haver pelo menos 1 espaço

const n = 7;
let auxLinhas = 0;
let auxEspacos = (n / 2);
auxEspacos = Math.floor(auxEspacos) + 1;

for(let linha = 0; linha <= n; linha += 1){
    auxLinhas += 1;
    let geoPiramide = "";
    if(auxLinhas % 2 != 0){
        auxEspacos -= 1;    
        for(let coluna = 1; coluna <= n; coluna += 1){        
            if(coluna <= auxEspacos || coluna > n - auxEspacos){
            geoPiramide = geoPiramide + " ";
            }                
            else{
                geoPiramide = geoPiramide + "*";
            }      
        }    
    }
    console.log(geoPiramide);    
}