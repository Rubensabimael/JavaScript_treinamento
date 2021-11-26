const botao = document.querySelector('button');


botao.onclick = function () {
    let valor1 = prompt('Digite um valor?');
    
    const operador = prompt('Digite um operador aritmético ?');

    let valor2 = prompt('Digiter um outro valor?');

    let soma = 0;
     
        soma = calculo(valor1, valor2, operador);
    

    alert("Valor trotal da soma foi de "+soma);
}

 function calculo (valor1,valor2,operador){
    return eval( valor1 + operador + valor2)
}


