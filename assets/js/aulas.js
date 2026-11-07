/* ============================================================
   Manifesto do curso Fundamentos do Python I.
   ÚNICO lugar onde as datas ficam registradas. O índice, os
   slides e o cronograma leem daqui: ajuste aqui e as três
   páginas acompanham.

   São 10 encontros de 3 horas, em sextas à noite e sábados de
   manhã. Os encontros 2 e 3 são dados pelo professor Diego Guerra, com
   slides preparados aqui e entregues a ele.
   ============================================================ */

window.CURSO = {
  nome: "Fundamentos do Python I",
  tipo: "Aperfeiçoamento",
  local: "Senac Jaraguá do Sul",
  ch: 30,
  faltasMax: 2,     /* 75% de 30 h são 22,5 h: a terceira falta reprova */
  docente: "Daniel Becker Bortoluzzi"
};

window.DOCENTES = {
  daniel: "Daniel",
  diego: "Diego Guerra"
};

/* horário de cada dia da semana em que há encontro (getDay: 5 sexta, 6 sábado) */
window.HORARIOS = {
  5: { inicio: 19, texto: "19h às 22h", intervalo: "20h15 às 20h30" },
  6: { inicio: 9,  texto: "9h às 12h",  intervalo: "10h às 10h15" }
};

window.ENCONTROS = [
  { n:  1, data: "2026-10-23", etapa: 1, docente: "daniel", pronto: true,
    titulo: "Abertura: a linguagem Python e o IDLE",
    foco: "apresentação, software e mercado, história do Python, interpretador e compilador, IDLE, primeiro print" },
  { n:  2, data: "2026-10-24", etapa: 2, docente: "diego",  pronto: false,
    titulo: "Lógica, variáveis e entrada de dados",
    foco: "dado: lógica, input, variáveis; entrada, processamento e saída ficou para o encontro 4" },
  { n:  3, data: "2026-10-31", etapa: 2, docente: "diego",  pronto: false,
    titulo: "Tipos de dados, conversão e as primeiras condicionais",
    foco: "dado: int, float, str, bool, conversão com int() e float(), if, elif, else, and, um pouco de or" },
  { n:  4, data: "2026-11-06", etapa: 3, docente: "daniel", pronto: true,
    titulo: "Decisões no pedido: verdadeiro, falso e o if",
    foco: "entrada, processamento e saída, constante, bool na prática, comparadores, and, or, not, revisão do if e elif, atividades em níveis" },
  { n:  5, data: "2026-11-07", etapa: 3, docente: "daniel", pronto: true,
    titulo: "Valores em dinheiro e primeiras listas",
    foco: "fim da Fechando a conta, round, f-string com :.2f, menu com aspas triplas, listas com índice, append, remove, in, len e sum" },
  { n:  6, data: "2026-11-13", etapa: 4, docente: "daniel", pronto: false,
    titulo: "Retomada das listas e o laço for",
    foco: "atividade de retomada das listas, continuação das listas e o for percorrendo o pedido" },
  { n:  7, data: "2026-11-14", etapa: 4, docente: "daniel", pronto: false,
    titulo: "O laço while, o break e o menu repetitivo",
    foco: "while, break, menu repetitivo, jogo de adivinhar o número" },
  { n:  8, data: "2026-11-21", etapa: 5, docente: "daniel", pronto: false, recuperacao: true,
    titulo: "Laboratório e recuperação",
    foco: "sem conteúdo novo: desafios de revisão dos encontros 4 a 7, em níveis" },
  { n:  9, data: "2026-11-27", etapa: 5, docente: "daniel", pronto: false,
    titulo: "Operações bitwise e o início do desafio final",
    foco: "bitwise curto e aplicado, enunciado do sistema de pedidos no terminal" },
  { n: 10, data: "2026-11-28", etapa: 5, docente: "daniel", pronto: false, avaliacao: true,
    titulo: "Desafio final: conclusão, apresentação e encerramento",
    foco: "conclusão e apresentação do sistema de pedidos, encerramento do curso" }
];

/* etapas: o agrupamento pedagógico do curso, com a pergunta que cada uma responde.
   "chave" é o nome da cor no cronograma (cronograma/estilos.css). */
window.ETAPAS = [
  { n: 1, chave: "ambiente",  nome: "O ambiente",   encontros: "encontro 1",
    guia: "Onde o Python mora e como eu converso com ele?" },
  { n: 2, chave: "logica",    nome: "A lógica",     encontros: "encontros 2 e 3",
    guia: "Como transformar um problema em passos que o computador segue?" },
  { n: 3, chave: "decisoes",  nome: "As decisões",  encontros: "encontros 4 e 5",
    guia: "Como o programa escolhe o caminho certo?" },
  { n: 4, chave: "repeticao", nome: "A repetição",  encontros: "encontros 6 e 7",
    guia: "Como tratar muitos itens sem escrever o mesmo código de novo?" },
  { n: 5, chave: "entrega",   nome: "O sistema de pedidos", encontros: "encontros 8 a 10",
    guia: "Consigo montar um programa inteiro a partir de um enunciado?" }
];

/* ============================================================
   Liberação por data.

   Um encontro só vira link quando as duas coisas valem: os
   slides existem (pronto) e o encontro já começou, no horário
   de início daquele dia da semana (HORARIOS). Vale o relógio
   da máquina de quem abre.

   Isto é combinado de turma, não é tranca. O HTML continua
   público para quem digitar o endereço na mão.

   Docente: abra qualquer página com ?docente=1 uma vez e o
   navegador guarda a liberação geral. ?docente=0 desfaz.
   ============================================================ */

window.MODO_DOCENTE = (function () {
  var chave = "fpj:docente";
  var pedido = null;
  try {
    pedido = new URLSearchParams(window.location.search).get("docente");
  } catch (erro) { pedido = null; }
  try {
    if (pedido === "1") localStorage.setItem(chave, "1");
    if (pedido === "0") localStorage.removeItem(chave);
    return localStorage.getItem(chave) === "1";
  } catch (erro) {
    /* navegador sem localStorage: vale só enquanto a página estiver aberta */
    return pedido === "1";
  }
})();

/* "2026-10-23" vira um Date à meia-noite local, sem passar por UTC */
window.diaDoEncontro = function (iso) {
  var p = String(iso).split("-").map(Number);
  return new Date(p[0], p[1] - 1, p[2]);
};

window.horarioDoEncontro = function (enc) {
  return window.HORARIOS[window.diaDoEncontro(enc.data).getDay()] || { inicio: 0, texto: "", intervalo: "" };
};

/* momento em que o encontro abre, no fuso de quem está lendo */
window.aberturaDoEncontro = function (enc) {
  var d = window.diaDoEncontro(enc.data);
  d.setHours(window.horarioDoEncontro(enc).inicio);
  return d;
};

window.liberado = function (enc) {
  if (!enc || !enc.pronto) return false;
  if (window.MODO_DOCENTE) return true;
  return new Date() >= window.aberturaDoEncontro(enc);
};

/* "2026-10-23" vira "23/10", que é como a data aparece na tela */
window.dataCurta = function (iso) {
  var p = String(iso).split("-");
  return p[2] + "/" + p[1];
};

window.diaDaSemana = function (iso) {
  return ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"][window.diaDoEncontro(iso).getDay()];
};

/* endereço dos slides de um encontro, a partir da raiz do site */
window.arquivoDoEncontro = function (enc) {
  return "encontro-" + String(enc.n).padStart(2, "0") + ".html";
};
