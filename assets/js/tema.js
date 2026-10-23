/* ============================================================
   Tema claro e escuro das páginas de navegação: o índice das
   aulas e o cronograma. Os slides não usam este arquivo.

   A escolha fica guardada no navegador e vale para as duas
   páginas. Quem nunca escolheu acompanha o sistema operacional.

   Carregue no <head>, sem defer: assim o tema é aplicado antes
   da primeira pintura e a página não pisca no tema errado.
   ============================================================ */

(function () {
  var CHAVE = "fpj2026:tema";

  var raiz = document.documentElement;
  var sistema = window.matchMedia("(prefers-color-scheme: light)");

  /* localStorage pode estar bloqueado; nesse caso o tema vale só para a página aberta */
  function lerSalvo() {
    try { return localStorage.getItem(CHAVE); }
    catch (erro) { return null; }
  }
  function salvar(tema) {
    try { localStorage.setItem(CHAVE, tema); } catch (erro) { /* segue sem salvar */ }
  }

  function atualizarBotao() {
    var btn = document.getElementById("btnTema");
    if (!btn) return;
    var proximo = raiz.dataset.tema === "escuro" ? "claro" : "escuro";
    btn.setAttribute("aria-label", "Mudar para tema " + proximo);
    btn.title = "Mudar para tema " + proximo;
  }

  function aplicar(tema) {
    raiz.dataset.tema = tema;
    atualizarBotao();
  }

  function temaInicial() {
    return lerSalvo() || (sistema.matches ? "claro" : "escuro");
  }

  aplicar(temaInicial());

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("btnTema");
    if (!btn) return;
    atualizarBotao();
    btn.addEventListener("click", function () {
      var novo = raiz.dataset.tema === "escuro" ? "claro" : "escuro";
      aplicar(novo);
      salvar(novo);
    });
  });

  /* se a pessoa nunca escolheu, acompanha a troca no sistema operacional */
  sistema.addEventListener("change", function () {
    if (!lerSalvo()) aplicar(temaInicial());
  });

  /* trocou o tema numa página e voltou para a outra pelo botão de voltar,
     ou está com as duas abertas: a outra acompanha */
  window.addEventListener("pageshow", function () { aplicar(temaInicial()); });
  window.addEventListener("storage", function (e) {
    if (e.key === CHAVE && e.newValue) aplicar(e.newValue);
  });
})();
