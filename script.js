// Aula 1 - Calculo
var resultado = 10 * 100;
var divLocal = document.getElementById('exibe_resultado');
divLocal.innerHTML += resultado;

// Aula 2 - Botao amarelo
let botao = document.getElementById("meuBotao");
botao.addEventListener("click", function() {
  document.body.classList.toggle("amarelo");
});