// mostra o valor de π na página (só para didática)
document.getElementById("pi-value").textContent = Math.PI.toFixed(6);

const form = document.getElementById("form-area");
const inputRaio = document.getElementById("raio");
const saida = document.getElementById("resultado");

// ouvir o submit do formulário
form.addEventListener("submit", function (event) {
  event.preventDefault(); // evita recarregar a página

  // aceita vírgula ou ponto (muito comum em pt-BR)
  const valorDigitado = inputRaio.value.trim().replace(",", ".");
  const raio = parseFloat(valorDigitado);

  // validações básicas
  if (Number.isNaN(raio)) {
    saida.textContent = "Por favor, informe um número válido para o raio.";
    return;
  }
  if (raio < 0) {
    saida.textContent = "O raio não pode ser negativo.";
    return;
  }

  // cálculo da área: A = π × r²
  const area = Math.PI * raio * raio;

  // exibindo com 4 casas para ficar amigável (toFixed retorna string)
  saida.textContent = `A = π × ${raio}² = ${area.toFixed(4)} unidades²`;
});

// limpar o resultado quando o usuário clicar em "Limpar"
form.addEventListener("reset", function () {
  saida.textContent = "";
});
