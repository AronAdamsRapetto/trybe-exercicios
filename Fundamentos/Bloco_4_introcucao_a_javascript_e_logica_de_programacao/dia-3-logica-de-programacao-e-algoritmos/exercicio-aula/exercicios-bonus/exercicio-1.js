const n = 2;

if(n > 1){
  for(let linha = 0; linha < n; linha += 1){
  let geoQuadrado = "";
  for(let coluna = 0; coluna < n; coluna += 1){
    geoQuadrado = geoQuadrado + "*";
  }
  console.log(geoQuadrado);
  }
}