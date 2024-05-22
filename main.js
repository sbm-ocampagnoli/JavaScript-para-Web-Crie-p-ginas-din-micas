function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

// document.querySelector('.teclado_pom').onclick = tocaSomPom; // Quando uso sem () a função eu to falando para o onclick guardar a referencia da função e não executar a função;

//Outra maneira de fazer

const botaoPom = document.querySelector('.tecla_pom');
botaoPom.addEventListener('click', tocaSomPom);    

function tocaSomClap () {
    document.querySelector('#som_tecla_clap').play();
}