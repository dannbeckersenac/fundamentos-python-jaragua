/* =========================================================
   Cronograma · Fundamentos do Python I
   O que é só do calendário

   Os encontros (datas, títulos, etapas, docente) NÃO ficam
   aqui: vêm de ../assets/js/aulas.js, o mesmo manifesto que
   o índice e os slides leem. Assim a data mora num lugar só.

   PAUSAS -> "MM-DD tipo|nome" (tipo: feriado, pausa, evento)
   NOTAS  -> "MM-DD texto"
             encontro com um aviso ou que aconteceu diferente
             do previsto; o texto aparece no detalhe do dia
   ========================================================= */

const ANO = 2026;

const PAUSAS = `
11-02 feriado|Finados
11-15 feriado|Proclamação da República
11-20 feriado|Consciência Negra
`;

const NOTAS = `
10-24 encontro do professor Diego Guerra: lógica, input e variáveis; entrada, processamento e saída passou para 06/11
10-31 encontro do professor Diego Guerra: tipos, conversão e as primeiras condicionais (if, elif, else, and); a turma passou a usar o VS Code
11-06 revisão das decisões com o que faltou: entrada, processamento e saída, bool na prática e o not; atividades em níveis para medir a turma
11-21 sábado do feriadão: sem conteúdo novo, tempo de laboratório e recuperação
`;

const MESES = ["janeiro","fevereiro","março","abril","maio","junho",
               "julho","agosto","setembro","outubro","novembro","dezembro"];
const DOW = ["seg","ter","qua","qui","sex","sáb","dom"];

/* primeiro e último mês exibidos no calendário */
const MES_INICIAL = 10;
const MES_FINAL = 11;
