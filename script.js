// Pega o botão pelo ID (igual você fez com o resultado)
let botao = document.getElementById("meuBotao");

// Quando clicar, adiciona a classe amarelo no body
botao.addEventListener("click", function() {
  document.body.classList.toggle("amarelo");
});