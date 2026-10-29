//Professor, fiz dois placares só porque eu tava achando legal, basicamente só repeti a função porém troquei o nome tanto da função, do id, e da variável.

//Placar Time A
let contador = 0;

function somarPonto() {
    contador++;
    document.getElementById('placar').innerText = contador;
}

function retirarPonto() {
     
    if (contador === 0) {
        // não deixa ficar negativo
    } else {
        contador--;
    }
    document.getElementById('placar').innerText = contador;
}


//Placar Time B
let contador2 = 0;

function somarPonto2() {
    contador2++;
    document.getElementById('placar2').innerText = contador2;
}

function retirarPonto2() {
     
    if (contador2 === 0) {
        // não deixa ficar negativo
    } else {
        contador2--;
    }
    document.getElementById('placar2').innerText = contador2;
}

