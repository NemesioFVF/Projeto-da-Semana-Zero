setTimeout(function ativaMensagem (){document.getElementById('mensagemLucas').style.visibility = 'visible';}, 3000);
mensagemLucas.onclick = function () {document.getElementById ('mensagemLucas').style.visibility = 'hidden';};

var b1 = document.getElementById('btcor');
var b2 = document.getElementById('btcor1');

b1.onclick = function () {
    h4.className = "alterar"
}

b2.onclick = function () {
    h4.className = "alterar1"
}