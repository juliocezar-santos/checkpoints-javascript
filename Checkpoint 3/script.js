function trocarProduto() {
    const imagem = document.getElementById('imagemProduto');
    const srcAtual = imagem.getAttribute("src");                 

    if (srcAtual === "tenisazul.webp") {         
        imagem.setAttribute("src", "tenisvermelho.avif");  
        imagem.setAttribute("alt", "Um tênis vermelho");  
    } else {
        imagem.setAttribute("src", "tenisazul.webp");  
        imagem.setAttribute("alt", "Um tênis azul"); 
    }
}
