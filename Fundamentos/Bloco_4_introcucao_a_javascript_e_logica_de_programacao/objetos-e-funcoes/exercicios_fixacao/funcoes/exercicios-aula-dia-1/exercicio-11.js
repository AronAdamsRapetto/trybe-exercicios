function calculoSalarioLiquido(salarioBruto){
    
    let salarioLiquido = 0;

    if(salarioBruto <= 1556.94){
        salarioBruto = salarioBruto - (salarioBruto * 0.08);
    }
    else if(salarioBruto <= 2594.92){
        salarioBruto = salarioBruto - (salarioBruto * 0.09);
    }
    else if(salarioBruto <= 5189.82){
        salarioBruto = salarioBruto - (salarioBruto * 0.11);
    }
    else if(salarioBruto > 5189.82){
        salarioBruto = salarioBruto - 570.88;
    }

    if(salarioBruto <= 1903.98){
        salarioLiquido = salarioBruto;
    }
    else if(salarioBruto <= 2826.65){
        salarioLiquido = salarioBruto - ((salarioBruto * 0.075) -142.80);
    }
    else if(salarioBruto <= 3751.05){
        salarioLiquido = salarioBruto - ((salarioBruto * 0.15) -354.80);
    }
    else if(salarioBruto <= 4664.68){
        salarioLiquido = salarioBruto - ((salarioBruto * 0.225) -636.13);
    }
    else if(salarioBruto > 4664.68){
        salarioLiquido = salarioBruto - ((salarioBruto * 0.275) -869.36);
    }

    console.log("Salário Líquido: R$ " + salarioLiquido);
}

calculoSalarioLiquido(3000.00);
