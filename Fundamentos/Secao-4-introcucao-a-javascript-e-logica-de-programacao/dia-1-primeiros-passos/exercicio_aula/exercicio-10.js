const custoProduto = 30;
const valorVenda = 50;

if(custoProduto < 0 || valorVenda < 0){
    console.log("Algo está errado... revise os valores dispostos")
}
else{
    let custoProdutoTotal = custoProduto + (custoProduto * 0.20);
    let lucro = valorVenda - custoProdutoTotal
    lucro = lucro * 1000;
    console.log(lucro)
}