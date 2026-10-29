function calcular() {
    let preco = Number(document.getElementById('preco').value);
    let quantidade = Number(document.getElementById('quantidade').value);

    let resultado = preco * quantidade;

    let resultadoFormatado = resultado.toFixed(2).replace(".", ",");

    document.getElementById('resultado').innerText = 'Total da compra: R$ ' + resultadoFormatado;

}