const botao = document.querySelector('button');


botao.onclick = function () {
    let valor1 = prompt('Digite um valor?');
    let valor2 = prompt('Digiter um outro valor');
    let soma = (valor1* valor2);
    alert("Valor trotal da soma foi de "+soma)
}
 