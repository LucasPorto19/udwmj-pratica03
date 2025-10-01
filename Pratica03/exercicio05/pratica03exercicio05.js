// Mostra π com 6 casas para didática
document.getElementById("pi-value").textContent = Math.PI.toFixed(6);

const form = document.getElementById("form-volume");
const inputRaio = document.getElementById("raio");
const saida = document.getElementById("resultado");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // evita recarregar a página

  // Aceita vírgula ou ponto como separador decimal
  const valor = inputRaio.value.trim().replace(",", ".");
  const raio = parseFloat(valor);

  // Validações
  if (Number.isNaN(raio)) {
    saida.textContent = "Informe um número válido para o raio.";
    return;
  }
  if (raio < 0) {
    saida.textContent = "O raio não pode ser negativo.";
    return;
  }

  // V = (4/3) × π × r³
  // use Math.pow(r, 3) para deixar claro o expoente 3
  const volume = (4 / 3) * Math.PI * Math.pow(raio, 3);

  // Exibe com 4 casas decimais
  saida.textContent = `V = (4/3) × π × ${raio}³ = ${volume.toFixed(4)} unidades³`;
});

// Limpa a área de resultado ao resetar o formulário
form.addEventListener("reset", function () {
  saida.textContent = "";
});
