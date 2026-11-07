/* =========================================================
   Cronograma · Fundamentos do Python I
   Comportamento da página

   Os encontros vêm de ../assets/js/aulas.js (window.ENCONTROS
   e window.ETAPAS). Daqui saem só feriados e notas.

   Sumário
   1. Preparo dos dados
   2. Números do topo e botão "ver hoje"
   3. Filtros por etapa
   4. Trilha do curso
   5. Cartões das etapas
   6. Calendário
   7. Marcos
   8. Barra de detalhe
   ========================================================= */

/* ---------- 1. Preparo dos dados ---------- */

const ETAPA = Object.fromEntries(window.ETAPAS.map(e => [e.n, e]));

const aulas = window.ENCONTROS.map(e => ({
  ...e,
  chave: ETAPA[e.etapa].chave,
  aval: Boolean(e.avaliacao || e.recuperacao)
}));
const total = aulas.length;
window.ETAPAS.forEach(et => (et.total = aulas.filter(a => a.etapa === et.n).length));

const porData = Object.fromEntries(aulas.map(a => [a.data, a]));

const pausas = PAUSAS.trim().split("\n").filter(Boolean).map(linha => {
  /* o dia sai por captura e o nome fica inteiro */
  const [, dia, resto] = linha.trim().match(/^(\S+)\s+(.*)$/);
  const [tipo, nome] = resto.split("|");
  return { data: `${ANO}-${dia}`, tipo, nome };
});
const pausaPorData = Object.fromEntries(pausas.map(p => [p.data, p]));

/* notas: encontros com aviso ou que aconteceram diferente do previsto */
const notaPorData = Object.fromEntries(
  (typeof NOTAS === "string" ? NOTAS : "").trim().split("\n").filter(Boolean).map(linha => {
    const [, dia, texto] = linha.trim().match(/^(\S+)\s+(.*)$/);
    return [`${ANO}-${dia}`, texto];
  })
);

/* data de hoje no fuso local, sem passar por UTC */
const agora = new Date();
const hojeISO = [
  agora.getFullYear(),
  String(agora.getMonth() + 1).padStart(2, "0"),
  String(agora.getDate()).padStart(2, "0")
].join("-");

const aulaHoje = porData[hojeISO];
const pausaHoje = pausaPorData[hojeISO];
const realizadas = aulas.filter(a => a.data <= hojeISO).length;

/* o dia que o botão do topo abre: hoje, se houver algo; senão o próximo encontro */
const proxima = aulas.find(a => a.data >= hojeISO);
const ultima = aulas[aulas.length - 1];
const alvoHoje = aulaHoje || pausaHoje ? hojeISO : (proxima ? proxima.data : ultima.data);

function formatarData(iso) {
  const [ano, mes, dia] = iso.split("-").map(Number);
  const d = new Date(ano, mes - 1, dia);
  return `${DOW[(d.getDay() + 6) % 7]}, ${dia} de ${MESES[mes - 1]}`;
}

const diaMes = iso => `${iso.slice(8)}/${iso.slice(5, 7)}`;

function periodo(n) {
  const lista = aulas.filter(a => a.etapa === n);
  const ini = diaMes(lista[0].data);
  const fim = diaMes(lista[lista.length - 1].data);
  return ini === fim ? ini : `${ini} a ${fim}`;
}

const outroDocente = a => a.docente !== "daniel";
const nomeDocente = a => window.DOCENTES[a.docente];

/* ---------- 2. Números do topo e botão "ver hoje" ---------- */

document.getElementById("stProg").textContent = `${realizadas}/${total}`;
document.getElementById("stHoje").textContent = aulaHoje
  ? `encontro ${aulaHoje.n}`
  : (pausaHoje ? "feriado" : "livre");

const rotuloHoje = document.getElementById("rotuloHoje");
const notaHoje = document.getElementById("notaHoje");

if (aulaHoje) {
  rotuloHoje.textContent = "Ver hoje no calendário";
  notaHoje.textContent = `Hoje é o encontro ${aulaHoje.n} de ${total}: ${aulaHoje.titulo}, ${window.horarioDoEncontro(aulaHoje).texto}.`;
} else if (pausaHoje) {
  rotuloHoje.textContent = "Ver hoje no calendário";
  notaHoje.textContent = `Hoje não tem aula: ${pausaHoje.nome}.`;
} else if (proxima) {
  rotuloHoje.textContent = "Ir para o próximo encontro";
  notaHoje.textContent = `Sem aula hoje. O próximo encontro é ${formatarData(proxima.data)}, ${window.horarioDoEncontro(proxima).texto}.`;
} else {
  rotuloHoje.textContent = "Ver o último encontro";
  notaHoje.textContent = "O curso já foi concluído.";
}

document.getElementById("btnHoje").addEventListener("click", () => {
  aplicarFiltro(null);   // limpa o filtro para o dia não ficar apagado
  selecionar(alvoHoje, { rolar: true, piscar: true });
});

/* ---------- 3. Filtros por etapa ---------- */

let filtroAtivo = null;
const filtros = document.getElementById("filtros");

window.ETAPAS.forEach(et => {
  const b = document.createElement("button");
  b.className = "chip";
  b.type = "button";
  b.dataset.etapa = et.n;
  b.setAttribute("aria-pressed", "false");
  b.style.color = `var(--${et.chave})`;
  b.innerHTML = `<i></i>${et.nome}`;
  b.addEventListener("click", () => aplicarFiltro(filtroAtivo === et.n ? null : et.n));
  filtros.appendChild(b);
});

function aplicarFiltro(n) {
  filtroAtivo = n;
  document.body.classList.toggle("filtrando", Boolean(n));

  filtros.querySelectorAll(".chip").forEach(c => {
    const ligado = Number(c.dataset.etapa) === n;
    const chave = ETAPA[c.dataset.etapa].chave;
    c.setAttribute("aria-pressed", ligado);
    c.style.color = ligado ? "" : `var(--${chave})`;
  });
  document.querySelectorAll(".etapa").forEach(c =>
    c.setAttribute("aria-pressed", Number(c.dataset.etapa) === n)
  );
  document.querySelectorAll(".dia.aula").forEach(d =>
    d.classList.toggle("apagado", Boolean(n) && Number(d.dataset.etapa) !== n)
  );
  document.querySelectorAll(".tbarra").forEach(t =>
    t.classList.toggle("on", Boolean(n) && Number(t.dataset.etapa) === n)
  );
}

/* ---------- 4. Trilha do curso ---------- */

const trilha = document.getElementById("trilha");
let grupo = null;
let etapaCorrente = null;

aulas.forEach(a => {
  if (a.etapa !== etapaCorrente) {
    etapaCorrente = a.etapa;
    const et = ETAPA[a.etapa];
    grupo = document.createElement("div");
    grupo.className = "tgrupo";
    grupo.style.setProperty("--c", `var(--${et.chave})`);
    grupo.style.flex = `${et.total} 1 0`;
    grupo.innerHTML =
      `<div class="tbarras"></div>
       <div class="trotulo"><b>${et.nome}</b>
         <span>${et.total} encontro${et.total === 1 ? "" : "s"} · ${periodo(et.n)}</span>
       </div>`;
    trilha.appendChild(grupo);
  }

  const barra = document.createElement("button");
  barra.type = "button";
  barra.className = "tbarra"
    + (a.data <= hojeISO ? " feita" : "")
    + (a.data === hojeISO ? " hoje" : "");
  barra.dataset.etapa = a.etapa;
  barra.dataset.data = a.data;
  barra.setAttribute("aria-label", `Encontro ${a.n} de ${total}, ${formatarData(a.data)}: ${a.titulo}`);
  barra.addEventListener("click", () => selecionar(a.data, { rolar: true }));
  grupo.querySelector(".tbarras").appendChild(barra);
});

/* ---------- 5. Cartões das etapas ---------- */

const gradeEtapas = document.getElementById("gradeEtapas");

window.ETAPAS.forEach(et => {
  const doCartao = aulas.filter(a => a.etapa === et.n);
  const cartao = document.createElement("button");
  cartao.className = "etapa";
  cartao.type = "button";
  cartao.dataset.etapa = et.n;
  cartao.style.setProperty("--c", `var(--${et.chave})`);
  cartao.setAttribute("aria-pressed", "false");
  cartao.innerHTML = `
    <div class="etapa-top">
      <span class="etapa-tag">Etapa ${et.n}</span>
      <span class="etapa-per">${periodo(et.n)}</span>
    </div>
    <h3>${et.nome}</h3>
    <p>${et.guia}</p>
    <div class="etapa-nums">
      <div>${et.total}<small>encontro${et.total === 1 ? "" : "s"}</small></div>
      <div>${et.total * 3} h<small>carga</small></div>
      <div>${nomeDocente(doCartao[0])}<small>docente</small></div>
    </div>`;
  cartao.addEventListener("click", () => aplicarFiltro(filtroAtivo === et.n ? null : et.n));
  gradeEtapas.appendChild(cartao);
});

/* ---------- 6. Calendário ---------- */

const meses = document.getElementById("meses");

for (let m = MES_INICIAL; m <= MES_FINAL; m++) {
  const mm = String(m).padStart(2, "0");
  const totalDias = new Date(ANO, m, 0).getDate();                  // dia 0 do mês seguinte
  const primeiroDow = (new Date(ANO, m - 1, 1).getDay() + 6) % 7;   // segunda = 0
  const encontros = aulas.filter(a => a.data.slice(5, 7) === mm).length;

  const bloco = document.createElement("div");
  bloco.className = "mes";
  bloco.id = `mes-${mm}`;
  bloco.innerHTML = `
    <h3>${MESES[m - 1]}</h3>
    <span class="resumo">${encontros} encontro${encontros === 1 ? "" : "s"}</span>
    <div class="dow">${DOW.map(d => `<span>${d}</span>`).join("")}</div>
    <div class="dias"></div>`;
  const caixa = bloco.querySelector(".dias");

  for (let i = 0; i < primeiroDow; i++) {
    const vazio = document.createElement("div");
    vazio.className = "dia fora";
    caixa.appendChild(vazio);
  }

  for (let d = 1; d <= totalDias; d++) {
    const iso = `${ANO}-${mm}-${String(d).padStart(2, "0")}`;
    const aula = porData[iso];
    const pausa = pausaPorData[iso];

    const cel = document.createElement("div");
    cel.className = "dia";
    cel.textContent = d;
    cel.dataset.data = iso;

    if (aula) {
      cel.classList.add("aula");
      if (aula.aval) cel.classList.add("aval");
      if (outroDocente(aula)) cel.classList.add("outro");
      cel.dataset.etapa = aula.etapa;
      cel.style.setProperty("--c", `var(--${aula.chave})`);
      cel.setAttribute("aria-label",
        `${d} de ${MESES[m - 1]}: encontro ${aula.n} de ${total}, ${aula.titulo}`
        + (outroDocente(aula) ? `, com o professor ${nomeDocente(aula)}` : "")
        + (notaPorData[iso] ? `, ${notaPorData[iso]}` : ""));
    } else if (pausa) {
      cel.classList.add("pausa");
      cel.setAttribute("aria-label", `${d} de ${MESES[m - 1]}: ${pausa.nome}`);
    }

    if (iso === hojeISO) cel.classList.add("hoje");

    if (aula || pausa) {
      cel.tabIndex = 0;
      cel.setAttribute("role", "button");
      cel.addEventListener("click", () => selecionar(iso));
      cel.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selecionar(iso);
        }
      });
    }

    caixa.appendChild(cel);
  }

  meses.appendChild(bloco);
}

/* ---------- 7. Marcos ---------- */

const marcos = document.getElementById("marcos");

function cartaoMarcos(titulo, itens) {
  if (!itens.length) return;
  const el = document.createElement("div");
  el.className = "marco";
  el.innerHTML = `<h4>${titulo}</h4><ul>${itens.map(i => `
    <li><time>${i.data}</time>
      <span>${i.chave ? `<i style="--c:var(--${i.chave})"></i> ` : ""}<b>${i.titulo}</b>${i.sub ? ` · ${i.sub}` : ""}</span>
    </li>`).join("")}</ul>`;
  marcos.appendChild(el);
}

cartaoMarcos("Recuperação e avaliação", aulas.filter(a => a.aval).map(a => ({
  data: diaMes(a.data), chave: a.chave, titulo: `Encontro ${a.n}`,
  sub: a.avaliacao ? "desafio final e encerramento" : "laboratório e recuperação"
})));

cartaoMarcos("Encontros com o professor Diego Guerra", aulas.filter(outroDocente).map(a => ({
  data: diaMes(a.data), chave: a.chave, titulo: `Encontro ${a.n}`, sub: a.titulo
})));

cartaoMarcos("Começo de cada etapa", window.ETAPAS.map(et => {
  const primeira = aulas.find(a => a.etapa === et.n);
  return { data: diaMes(primeira.data), chave: et.chave, titulo: et.nome, sub: et.encontros };
}));

cartaoMarcos("Feriados e dias sem aula", pausas.map(p => ({ data: diaMes(p.data), titulo: p.nome })));

/* ---------- 8. Barra de detalhe ---------- */

const detalhe = document.getElementById("detalhe");
const dData = document.getElementById("dData");
const dTitulo = document.getElementById("dTitulo");
const dSub = document.getElementById("dSub");

function selecionar(iso, opcoes = {}) {
  document.querySelectorAll(".dia.sel").forEach(d => d.classList.remove("sel", "pulsa"));

  const cel = document.querySelector(`.dia[data-data="${iso}"]`);
  if (cel) {
    cel.classList.add("sel");
    if (opcoes.rolar) cel.scrollIntoView({ block: "center", behavior: "smooth" });
    if (opcoes.piscar) {
      cel.classList.add("pulsa");
      cel.addEventListener("animationend", () => cel.classList.remove("pulsa"), { once: true });
    }
  }

  const aula = porData[iso];
  const pausa = pausaPorData[iso];
  dData.textContent = formatarData(iso);

  if (aula) {
    const h = window.horarioDoEncontro(aula);
    detalhe.style.setProperty("--c", `var(--${aula.chave})`);
    dTitulo.textContent = `Encontro ${aula.n} · ${aula.titulo}`;
    dSub.textContent =
      `Etapa ${aula.etapa} · ${h.texto}, intervalo ${h.intervalo}` +
      (outroDocente(aula) ? ` · com o professor ${nomeDocente(aula)}` : "") +
      (notaPorData[iso] ? ` · ${notaPorData[iso]}` : "");
  } else if (pausa) {
    detalhe.style.setProperty("--c", "var(--suave)");
    dTitulo.textContent = pausa.nome;
    dSub.textContent = "Sem aula";
  } else {
    return;
  }

  detalhe.classList.add("aberto");
}

function fecharDetalhe() {
  detalhe.classList.remove("aberto");
  document.querySelectorAll(".dia.sel").forEach(d => d.classList.remove("sel"));
}

document.getElementById("dFechar").addEventListener("click", fecharDetalhe);

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    fecharDetalhe();
    aplicarFiltro(null);
  }
});

/* ao abrir a página, se hoje for dia de aula, já mostra o detalhe sem rolar a tela */
if (aulaHoje) selecionar(hojeISO);
