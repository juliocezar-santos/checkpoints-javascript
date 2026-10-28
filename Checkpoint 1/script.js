function calcular() {
    let n1 = Number(document.getElementById('preco').value);
    let n2 = Number(document.getElementById('quantidade').value);

    let resultado = n1 * n2;

    document.getElementById('resultado').innerText = 'Valor final: R$' + resultado

}