const form = document.getElementById("form-juros");
const inputCapital = document.getElementById("capital");
const inputTaxa = document.getElementById("taxa");
const inputTempo = document.getElementById("tempo");
const saida = document.getElementById("resultado");

// formatador de moeda pt-BR (opcional; ajuda na leitura)
const fmtMoeda = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

function parseNumeroBR(txt) {
  return parseFloat(String(txt).trim().replace(",", "."));
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const capital = parseNumeroBR(inputCapital.value);
  const taxaPercent = parseNumeroBR(inputTaxa.value);
  const tempo = parseInt(inputTempo.value, 10);

  // validações simples
  if (Number.isNaN(capital) || capital < 0) {
    saida.textContent = "Informe um capital inicial válido (número ≥ 0).";
    return;
  }
  if (Number.isNaN(taxaPercent) || taxaPercent < 0) {
    saida.textContent = "Informe uma taxa válida em porcentagem (número ≥ 0).";
    return;
  }
  if (Number.isNaN(tempo) || tempo < 0) {
    saida.textContent = "Informe um tempo (períodos) válido (inteiro ≥ 0).";
    return;
  }

  // converte taxa de % para decimal
  const i = taxaPercent / 100;

  // M = C * (1 + i)^t
  const montante = capital * Math.pow(1 + i, tempo);
  const juros = montante - capital;

  // monta um resumo didático
  const substituicao =
    `M = ${fmtMoeda.format(capital)} × (1 + ${i.toLocaleString("pt-BR")})^${tempo}`;

  saida.innerHTML = `
    <strong>Montante (M): ${fmtMoeda.format(montante)}</strong><br>
    Juros acumulados: ${fmtMoeda.format(juros)}<br>
    <span class="muted">Cálculo:</span> ${substituicao}
  `;
});

form.addEventListener("reset", function () {
  saida.textContent = "";
});
