const accordion = document.querySelectorAll(".accordion");

//explicação:
//para cada item dentro de accordion, assim que acontecer o clique
// se for a primeira vez ele irá acrescentar uma classe chamada active onde clicou
//e no próximo irmão do elemento clicado ele adiciona a classe show
//a classe show mostra o display
//o toggle faz com que caso já tenha as classes adicionadas, mas voce clica de novo no elemento ele irá retirar as classes

accordion.forEach(function (item) {
    item.addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        panel.classList.toggle("show");
    });
});

