# CLAUDE.md · Slides de Fundamentos do Python I (Senac Jaraguá do Sul)

Contexto para qualquer agente que for trabalhar neste repositório.
Leia inteiro antes de criar ou alterar um encontro.

---

## 1. O que é este repositório

O material de aula do curso **Fundamentos do Python I**, publicado como site estático. Cada encontro
é **uma página HTML** com os slides daquele dia, e o cronograma é uma página à parte.

A estrutura, o sistema visual e o jeito de escrever vieram dos slides da UC4 do mesmo docente
(`../SlidesPJP`). O conteúdo e o público são outros: aqui a turma nunca programou.

**Sem build, sem framework, sem dependência.** HTML, CSS e JavaScript puros, servidos direto.
Qualquer proposta de adicionar bundler, React, Tailwind, gerador de site estático ou gerenciador de
pacotes deve ser recusada. O docente precisa conseguir abrir um arquivo e editar um slide no meio
de uma aula.

**Material de referência, fora do Git** (pasta `docente/`, no `.gitignore`):

- `docente/orientacao.md`: as decisões do curso, o calendário, o material base no Google Drive com os
  IDs de cada deck, as correções obrigatórias e o que está fora do escopo. É a fonte deste arquivo.
- `docente/plano-de-curso.pdf`: o plano de curso oficial do Senac (12/08/2026).

---

## 2. Contexto do curso

| | |
|---|---|
| Curso | Fundamentos do Python I (Senac SC), aperfeiçoamento |
| Local | Senac Jaraguá do Sul, presencial, laboratório com um computador por aluno |
| Carga | 30 h · 10 encontros de 3 h · a UC é o próprio curso |
| Horário | sexta, 19h às 22h (intervalo 20h15 a 20h30) · sábado, 9h às 12h (intervalo 10h a 10h15) |
| Docentes | Daniel Becker Bortoluzzi (8 encontros) e Diego Guerra (encontros 2 e 3) |
| Idioma | **Português do Brasil, sempre.** Código, comentários, nomes de variáveis, tudo. |

### Quem é a turma

Iniciantes em programação, com **15 anos ou mais** e ensino fundamental completo. O plano pede noção de
editor de texto e planilha, e mais nada. Não assuma que ninguém sabe o que é terminal, extensão de
arquivo, pasta do sistema ou variável. Sexta à noite a turma chega cansada do trabalho; sábado de manhã
rende um pouco mais de conteúdo.

### Enquadramento formal (plano de curso)

O plano está aprovado e **não deve ser alterado**. O material tem que caber nele.

**Indicadores**
1. Parametriza o ambiente de desenvolvimento, conforme as funcionalidades e características do software
   a ser codificado em Python.
2. Utiliza comandos de entrada, saída e processamento de dados para criar software em Python, seguindo
   padrões da linguagem e boas práticas.

**Conhecimentos:** linguagem (conceitos, características, história); ambiente (compilador, interpretador,
código-fonte, IDLE: instalação, configuração, uso); lógica (sintaxe, entrada, processamento e saída,
tipos dinâmicos, variáveis e constantes, expressões e operadores); estruturas de controle (booleanos,
condicional, laços, listas e processamento de listas, operações lógicas e **bitwise**).

**Habilidades:** raciocínio lógico em Python; programar e executar no ambiente Python; **selecionar e
interpretar requisitos de usuário** (aqui: ler um enunciado e transformar em programa); usar termos
técnicos; selecionar técnicas e recursos da linguagem.

**Avaliação.** Durante o processo, menções **A**, **PA** e **NA**. No fim, **A** ou **NA**, que viram
"Concluiu" ou "Não concluiu". O ticket de saída de cada encontro é a evidência para as menções. A
recuperação acontece em sala, durante o processo, e o encontro 8 é dedicado a ela.

**Frequência.** Mínimo de 75% das 30 h (22,5 h). Na prática, **no máximo 2 faltas**: a terceira reprova.
Isso é dito na abertura, no encontro 1.

---

## 3. Calendário e etapas

**As datas vivem só em `assets/js/aulas.js`**, em formato ISO. O índice, os slides e o cronograma
leem dali. Diferente da UC4, o cronograma **não tem lista própria de datas**: o `cronograma/dados.js`
guarda só feriados e notas. Nunca escreva data dentro de um slide.

| # | Data | Docente | Etapa | Foco |
|---|---|---|---|---|
| 1 | sex 23/10 | Daniel | 1 · O ambiente | abertura, software e mercado, história do Python, interpretador e compilador, IDLE, primeiro `print` |
| 2 | sáb 24/10 | Diego | 2 · A lógica | **dado:** lógica, `input`, variáveis |
| 3 | sáb 31/10 | Diego | 2 · A lógica | **dado:** os quatro tipos, conversão, `if`/`elif`/`else`, `and`, um pouco de `or` |
| 4 | sex 06/11 | Daniel | 3 · As decisões | entrada, processamento e saída, `bool` na prática, comparadores, `not`, revisão do `if`, atividades em níveis |
| 5 | sáb 07/11 | Daniel | 3 · As decisões | fim da Fechando a conta, `round`, f-string, menu com aspas triplas; depois do intervalo, listas sem laço |
| 6 | sex 13/11 | Daniel | 4 · A repetição | atividade de retomada das listas, continuação das listas e o `for` |
| 7 | sáb 14/11 | Daniel | 4 · A repetição | `while`, `break`, menu repetitivo, jogo de adivinhar o número |
| 8 | sex 27/11 | Daniel | 5 · O sistema de pedidos | laboratório e recuperação, sem conteúdo novo |
| 9 | sáb 28/11 | Daniel | 5 · O sistema de pedidos | bitwise curto e aplicado, início do desafio final |
| 10 | sex 04/12 | Daniel | 5 · O sistema de pedidos | conclusão e apresentação do desafio final, encerramento |

O sábado 21/11 ficou sem aula, emendado ao feriado de 20/11, e os encontros 8 a 10 andaram uma data:
eram 21/11, 27/11 e 28/11. O encerramento passou para uma sexta, das 19h às 22h.

As etapas são o agrupamento pedagógico, como os ciclos da UC4. Cada uma responde uma pergunta, e a
pergunta está em `window.ETAPAS`. Numa referência a encontro futuro dentro de um slide, prefira a etapa
("na etapa das decisões") ao número, porque o número muda se o calendário mudar.

**Encontros 2 e 3 são do professor Diego Guerra.** Os slides são feitos aqui e entregues a ele, para a turma
chegar ao encontro 4 com a mesma base. Por isso esses slides precisam **se sustentar sozinhos**: cada
passo escrito no slide, sem depender da fala do Daniel, e sem piada interna nem referência a algo que
só o Daniel disse no encontro 1. Ordem de produção: encontro 1, depois 2 e 3 (entregues antes de 24/10),
depois 4 a 7, o 8, e por fim 9 e 10.

Para liberar um encontro no índice: crie `aulas/encontro-NN.html` e marque `pronto: true` no manifesto.
A partir daí ele ainda espera o horário de início do dia (19h na sexta, 9h no sábado). Para ver tudo
antes da hora, abra qualquer página com `?docente=1` uma vez; `?docente=0` desfaz. É combinado de
turma, não tranca.

---

## 4. Método: ciclos curtos, situação-problema antes do conceito

**Conteúdo e prática intercalados em ciclos curtos**, nunca exposição longa com exercício só no fim.
Proporção aproximada: 30% conteúdo, 70% prática. Todo encontro tem prática, e todo exercício vem logo
depois do conceito que ele usa.

| Sexta | Sábado | Bloco |
|---|---|---|
| 19:00 a 19:10 | 9:00 a 9:10 | Aquecimento: desafio curto revisando o encontro anterior |
| 19:10 a 19:40 | 9:10 a 10:00 | Ciclo 1: conceito, prática, correção coletiva |
| 19:40 a 20:15 | não há | Ciclo 2 |
| 20:15 a 20:30 | 10:00 a 10:15 | Intervalo |
| 20:30 a 21:00 | 10:15 a 11:00 | Ciclo 3 (no sábado, ciclo 2) |
| 21:00 a 21:45 | 11:00 a 11:45 | Desafio integrador com o cardápio |
| 21:45 a 22:00 | 11:45 a 12:00 | Ticket de saída, entregue na hora |

O encontro fica, então, com esta forma no HTML (o `aulas/modelo.html` mostra o esqueleto):

1. Capa (escuro)
2. Aquecimento (exercício), a partir do encontro 2
3. Para cada ciclo: a situação-problema, o conceito em poucos slides, um slide de mão na massa com
   `<ol class="passos">`, e um slide de prática (exercício) com a correção coletiva
4. Atividade integradora (exercício) com o cardápio: uma só, em partes, com regras que os slides não
   mostraram, e um slide com os casos para conferir
5. Ticket de saída (exercício): curto, individual, entregue antes de sair
6. Recapitulação (escuro), com 5 pontos e o gancho para o próximo encontro

Eyebrows de referência: `Aquecimento · 10 minutos`, `Ciclo N · o problema`, `Ciclo N · mão na massa`,
`Ciclo N · prática`, `Desafio integrador`, `Ticket de saída`, `Recapitulando`.

### Situação-problema antes do conceito

O plano manda partir de situações-problema do cotidiano. É a mesma regra da UC4 (dor antes da
solução), em escala de iniciante: **nenhum comando aparece antes de a turma ver o problema que ele
resolve.** Se um slide começa com "o `if` é uma estrutura condicional que", ele está errado. Começa com
o cliente que gastou mais de R$ 100 e não ganhou o desconto.

- **Um conceito novo por ciclo**, ancorado em algo que a turma já fez.
- **Não ensine à frente do ledger** (seção 6), ainda que o código fique melhor.
- **Fluxograma e pseudocódigo** antes do código quando a lógica tiver decisão ou repetição nova.
- **Erro como conteúdo.** O plano pede análise e correção de erros. Mostre a mensagem vermelha do
  IDLE, leia a última linha com a turma (`NameError`, `SyntaxError`, `TypeError`, `ValueError`) e
  diga o que ela quer dizer em português.
- **Versão simples antes do atalho.** Primeiro o `print` com vírgulas, depois a f-string.
- **Leitura linha a linha** quando o código tiver construção nova: um comentário por linha no `<pre>`.
- **Todo passo que depende de uma ação no IDLE ganha o seu slide**: abrir o shell, criar arquivo,
  salvar, rodar com F5.
- **Rode o código antes de pôr no slide.** Teste cada trecho num `python3` de verdade, com as entradas
  que o slide mostra, e copie a saída exata para o último passo.

### Prática individual, atividade final diferente dos exemplos

- **Toda prática é individual.** Nada de "conte para quem senta ao lado" nem "explique ao colega": o
  docente pediu assim no encontro 4. A resposta que antes ia para o colega vai para um comentário no
  código. O momento coletivo é a correção no projetor, conduzida pelo professor.
- **Ritmo da semana:** o sábado apresenta o conteúdo novo, e a sexta seguinte abre retomando esse
  conteúdo com uma atividade, como o encontro 4 fez com as decisões. Depois da retomada, a sexta segue
  com o próximo assunto.
- **Sem slide de intervalo.** O docente para quando o horário pede, sem correr para alcançar um slide.
- **A atividade do fim não repete os exemplos dos slides.** A turma testa os exemplos enquanto a aula
  anda, e chega na atividade já com aquilo pronto. A atividade usa regras novas (no encontro 4: combo,
  forma de pagamento e troco) e de preferência é **uma só, em partes**, que junta tudo o que foi visto
  até ali. As partes vão da mais simples à mais difícil, e "até qual parte você chegou" mede o nível.
  Um slide "Confira com estes pedidos" dá as entradas e os valores que têm que sair. A solução
  testada fica em `docente/solucoes/`.

---

## 5. O exemplo condutor

**Os slides usam sempre o cardápio digital que emite pedidos**: itens, preços, quantidades, total,
descontos, taxa de entrega, frete grátis acima de um valor. Atende à sugestão do plano de protótipos de
e-commerce e gestão de informações. Não troque o domínio por outro exemplo no meio do curso: a
familiaridade com o cardápio é o que libera atenção para o conceito novo.

O exemplo é **do professor**. Rotule o bloco de código como `exemplo do professor · pedido.py` quando
houver risco de confusão, e mande o aluno fazer o equivalente.

**Desafio final** (encontros 9 e 10): um **sistema de pedidos simples no terminal**, só com o que foi
visto no curso. É a evidência de conclusão e não precisa ser grande. O enunciado é escrito como
requisitos de usuário que o aluno interpreta, porque essa é uma habilidade do plano.

**Bitwise** (encontro 9): curto e aplicado. Opções do pedido combinadas num número só ("sem cebola",
"extra queijo", "para viagem") e par ou ímpar com `& 1`, ligando ao `%` do encontro 5.

---

## 6. Ledger: o que a turma sabe em cada ponto

Ao escrever o encontro N, **use apenas o que está acumulado até N-1**, mais o que o próprio encontro N
introduz.

| # | Introduz |
|---|---|
| 1 | o que é software, linguagem, história e características do Python, mercado; código-fonte, interpretador e compilador (Python é interpretado); IDLE: instalar, shell interativo (`>>>`) e arquivo `.py`, salvar, rodar com F5; `print` com texto entre aspas; comentário com `#`; ler a mensagem de erro |
| 2 | (Diego) lógica; `input`, `print` com várias partes separadas por vírgula; variável, atribuição. Entrada, processamento e saída **não** foi dado |
| 3 | (Diego) `int`, `float`, `str`, `bool` (o `bool` sem exemplo prático); `input` com conversão por `int()` e `float()`, usado bastante; `if`, `elif`, `else` "em parte"; `and` bastante, `or` só comentado com exemplos. **Não confirmado:** `//`, `%`, `**`, constante, fluxograma e 5Qs |
| 4 | entrada, processamento e saída; constante em MAIÚSCULAS; `True` e `False` em variável, `type()` dando `bool`; `== != > < >= <=`; `or` na prática e `not` (devagar: o Diego avisou que confunde); revisão do `if`/`elif`/`else`, a ordem das condições, o recuo; `=` contra `==`. Atividade única "Fechando a conta", em quatro partes (pedido, combo, pagamento com troco, bônus), com a solução em `docente/solucoes/conta.py` |
| 5 | `round(valor, 2)` (o gancho: 1 pastel e 1 caldo no pix dá `11.875`, e 2 de cada dá `38.949999999999996`); f-string, primeiro sem e depois com `:.2f`; texto de várias linhas com aspas triplas, para menu; opção do menu comparada como texto (`opcao == "1"`); listas: literal, índice a partir do zero, `IndexError`, `append`, `remove`, `ValueError`, `in` e `not in`, `len`, `sum`, sem laço. Atividade: a lista de compras (`docente/solucoes/compras.py`). **Par ou ímpar com `%` saiu** e ainda não tem lugar |
| 6 | retomada das listas numa atividade; `for item in lista` percorrendo o pedido; `continue` |
| 7 | `while`, condição de parada, `break`, menu repetitivo; `import random` e `random.randint` para o jogo de adivinhar |
| 8 | nada novo: desafios de revisão dos encontros 4 a 7, em níveis de dificuldade |
| 9 | `&`, `\|`, `bin()`; opções combinadas num número; par ou ímpar com `& 1`; enunciado do desafio final |
| 10 | nada novo: conclusão e apresentação do desafio |

**Fora do escopo do curso**, nem como extra cobrado: funções com `def`, dicionários, tuplas, arquivos,
orientação a objetos, `try`/`except`, Git e GitHub, API, front-end e back-end em profundidade,
`datetime`. Em listas, `append`, `remove`, `len`, `sum` e o `for` bastam.

Pontos a decidir com o docente antes de usar: `range` e `enumerate` (estão no deck da aula 08 de
origem e não na lista do encontro 6); `math.ceil` (deck da aula 07). A saída antecipada saiu do
encontro 5: sem `def`, ela é só validar a entrada num `if` antes do resto, e aparece assim na
atividade 5 do encontro 4.

### Correções obrigatórias no material reaproveitado

O material base (decks do Drive, listados em `docente/orientacao.md`) foi feito para lógica genérica:

- **Operadores lógicos:** `&&` e `||` não existem em Python. Use `and`, `or` e `not`.
- **Tipos:** em Python os básicos são `int`, `float`, `str` e `bool`. Não há `char` (um caractere é uma
  `str` de tamanho 1) nem `double`, e `datetime` está fora do escopo.
- **Nomes:** `snake_case` (`preco_produto`), nunca camelCase (`precoProduto`). É o PEP 8.
- **Constantes:** convenção de nome em maiúsculas (`TAXA_ENTREGA = 5.0`). Python não impede a mudança.
- **"Compilar":** o plano usa o termo, mas Python é interpretado. A diferença é explicada no encontro 1.
- **Ambiente:** o plano pede o **IDLE**, e o encontro 1 foi com ele. Com o Diego, a maior parte da turma passou para o **VS Code**; alguns ficaram no IDLE porque a máquina não tinha espaço. Os slides do encontro 4 em diante servem aos dois: rodar é "▶ no VS Code, F5 no IDLE", e a saída aparece no terminal ou no shell.
- **Slide "O que é o elif?"** dos decks 06 e 07: uma versão lista o `else` antes do `elif`. Corrija.
- **Digitação:** "aǵua", "fever", "incosistente", "Celcius", "sera", "Algorítmos".
- **Aula 01 de origem:** sai tudo do curso de 200 h (UC1 a UC4, prof. Allan, projeto integrador).

Só o texto dos decks foi analisado. Os prints de código das aulas 06 a 10 estão em imagem: confira a
parte visual antes de reaproveitar, e redesenhe o código como `.codigo` de texto, nunca como imagem.

---

## 7. Política de IA

O curso não tem política de IA definida. Não crie prompts para a turma nem arquivos de regras sem o
docente pedir. A infraestrutura existe (seção 10) e está pronta se ele decidir usar.

---

## 8. Estrutura dos arquivos

```
index.html               índice dos encontros, montado em JS a partir do manifesto
.nojekyll                necessário para o GitHub Pages
assets/css/slides.css    a base dos slides, herdada da UC4 (palco, escala, blocos, impressão)
assets/css/encontro.css  a camada deste curso, carregada depois: fundo claro, ícones, janela do IDLE
assets/img/              logo do Senac e do Python, icones/ (dos decks do docente) e fotos/
assets/css/navegacao.css barra do topo, capa e tema claro/escuro do índice e do cronograma
assets/js/aulas.js       MANIFESTO: curso, horários, encontros, etapas e a regra de liberação
assets/js/slides.js      navegação, escala, barra inferior, rodapé e botões de copiar
assets/js/tema.js        tema do índice e do cronograma, guardado no navegador
aulas/encontro-NN.html   uma página por encontro
aulas/modelo.html        esqueleto para copiar; não entra no manifesto
cronograma/              calendário de outubro e novembro: index.html, app.js, estilos.css e
                         dados.js (só feriados e notas)
prompts/                 vazio por enquanto (seção 7)
docente/                 fora do Git: orientação e plano de curso
```

**O índice e o cronograma são as páginas de navegação** e dividem o mesmo cabeçalho: a linha de cima da
barra é o mesmo HTML nas duas; mexeu numa, mexa na outra. Elas usam Space Grotesk e IBM Plex Sans, com
tema claro e escuro. **Os slides não têm tema e não usam `navegacao.css`.**

Publicação: GitHub Pages, branch `main`, pasta raiz, sem build. O repositório ainda não tem remoto.
Se ele for público, o Pages publica tudo o que entra na `main`: encontro novo fica fora do commit até o
dia, com `pronto: false`, como na UC4.

---

## 9. Sistema visual dos slides

A base é o `template_aulas.pptx` do docente, o mesmo da UC4 (`slides.css`). Por cima dela, o
`encontro.css` aproxima os slides dos decks que o docente já usa com turmas iniciantes. **Não invente
cores nem fontes.**

### O jeito dos decks do docente (pedido dele: natural, sem cara de IA)

- **Fundo claro e título simples no topo**, sem rótulo em caixa alta acima. O `.eyebrow` só aparece nos
  slides de prática, e em frase normal: `Prática · 10 minutos`, `Desafio · 45 minutos`.
- **Ícone grande em todo slide de conceito.** Os ícones são os dos decks do docente, coloridos e no
  mesmo traço, em `assets/img/icones/` com nome em português (`cardapio.png`, `duvida.png`). Use os que
  já estão lá; ícone de outro estilo destoa. Se faltar um, peça ao docente, não desenhe.
- **Pergunta para a turma** num slide só dela (`.pergunta`, com o `duvida.png`), como nos decks.
- **Pouca moldura**: nada de faixa colorida na lateral de caixa nem linha embaixo de título.
- Texto curto, como o docente fala. Uma frase de efeito por slide, no máximo.

Blocos da camada do curso: `.miolo` (centra o conteúdo abaixo do título) · `.lado-icone` e
`.lado-icone.esq` (texto e ícone grande) · `.pergunta` · `.icones.n2` a `.n5` (fileira de ícones com
`.t` e `.d`) · `.tempo.n4` (linha do tempo com `.ano`) · `.perfil` e `.fotos` · `.lista` (lista simples)
· `.cartao > img` (cartão branco com ícone) · `.slide.capa` (logo do Senac e do Python) ·
`.slide.escuro.intervalo`.

**Código aparece como no IDLE**: `.codigo.idle`, com o `.arquivo` virando a barra de título da janela
(`ola.py`, `IDLE Shell`) e as cores do tema IDLE Classic (`kw` laranja, `fn` roxo, `str` verde, `com`
vermelho). No shell, `.pr` é o `>>>`, `.saida` a resposta em azul e `.erro` a mensagem em vermelho.
**Janela de shell leva também a classe `.shell`**, e aí o `slides.js` não põe botão de copiar: o aluno
digita no shell, e o texto da janela mistura o que se digita com o que volta. `.janelas` põe duas lado a
lado. Mensagem de erro no slide é a mensagem real, copiada de um Python rodando, nunca reescrita.

| Papel | Valor |
|---|---|
| Fundo escuro | `#0F172A` |
| Azul destaque | `#2563EB` |
| Cinza texto | `#334155` |
| Cinza claro | `#E2E8F0` |
| Roxo exercício | `#4F46E5` |
| Vermelho alerta | `#DC2626` |

Tipografia: **Calibri** (texto) e **Consolas** (código), com Carlito e JetBrains Mono do
Google Fonts como equivalentes para quem não está no Windows.

### Escala tipográfica

O material é projetado num laboratório e precisa ser legível **do fundo da sala**. A escala foi
calibrada para isso e não deve encolher: se algo não cabe, o problema é o excesso de conteúdo no
slide, nunca o tamanho da fonte.

| Papel | Tamanho |
|---|---|
| `h1` título de abertura | 66px |
| `h2` título de slide | 46px |
| `.intro`, `.destaque` | 27px |
| `.alerta`, `.tarefa`, parágrafo | 26px |
| `.recap`, `table`, `.passos li`, `.proximo` | 25 a 28px |
| `.dica`, `.passos.curta li` | 23 a 24px |
| `.codigo pre` | 23px (`.compacto` 21px, dentro de `.comparacao` 19.5px) |
| `.eyebrow`, `.arquivo`, rodapé | 15 a 18px |

**Nunca reduza uma fonte para fazer conteúdo caber.** As saídas legítimas, nesta ordem: cortar texto,
encurtar o bloco de código, trocar por um bloco mais compacto (`.comparacao` no lugar de dois blocos
empilhados) ou dividir em dois slides.

### Anatomia de um encontro

```html
<body data-encontro="4">    <!-- número do encontro, usado pela barra e pelo rodapé -->
<div class="palco">
  <section class="slide escuro"> ... </section>
  <section class="slide"> ... </section>
</div>
<nav class="barra" id="barra"></nav>
<script src="../assets/js/aulas.js"></script>
<script src="../assets/js/slides.js"></script>
```

Cada slide tem `<div class="corpo">` com o conteúdo e um `<div class="rodape">` no fim.

**O rodapé é gerado pelo `slides.js`, não escrito à mão.** A capa (o primeiro `.slide` do arquivo)
é a única exceção: ela mantém as duas `<span>` do HTML, com a etapa e a identificação da turma.
Todos os outros slides levam `<div class="rodape"></div>` vazio, e o JS preenche com a paginação
à esquerda (`3/12`, contando a capa) e `Encontro NN · Etapa N` à direita. O número da etapa vem do
manifesto em `aulas.js`, encontrado pelo `data-encontro` do `<body>`.

Duas consequências práticas: acrescentar ou remover um slide não exige mexer em rodapé nenhum, e
rodapé com texto dentro (fora o da capa) é erro, porque o JS sobrescreve ao carregar a página.

### Variantes de slide

| Classe | Quando usar |
|---|---|
| `slide` | padrão, fundo claro |
| `slide escuro` | abertura, recapitulação, momentos de ênfase |
| `slide exercicio` | roxo, a atividade prática |

### Blocos disponíveis

`.eyebrow` rótulo acima do título · `.intro` parágrafo de abertura · `.destaque` ideia central (azul) ·
`.alerta` aviso (vermelho) · `.dica` nota no rodapé do slide · `.fluxo` + `.passo` (use `.enfase` no
último) · `.cartoes.n2/.n3/.n4` + `.cartao` (com `.icone`, `.t`, `.d`) · `table` de comparação ·
`.codigo` + `.arquivo` + `<pre>` · `.comparacao` + `.lado.ruim` / `.lado.bom` (sem os modificadores,
`.lado` sozinho dá uma comparação **neutra** de duas colunas, útil para contrastes que não são
certo/errado) · `.tarefas` + `.tarefa` ·
`.recap` + `.proximo` · `.acoes` + `.btn` botões de copiar e de baixar arquivo (seção 10) ·
`.der` + `.entidade` (veio da UC4, não deve ser preciso aqui) ·
**`<ol class="passos">`** lista numerada de passos, o bloco padrão de todo slide
de mão na massa (funciona em slide claro, escuro e de exercício; variante `.passos.curta` para texto menor).

Destaque de sintaxe é manual, com `<span>`: `kw` palavra-chave · `str` texto · `com` comentário ·
`fn` função embutida (`print`, `input`, `len`) · `num` número.

**Todo bloco de código tem botão de copiar.** O `slides.js` cria um botão `copiar` no canto superior
direito de cada `.codigo` e copia só o texto do `<pre>`, sem o rótulo do `.arquivo`. Não escreva esse
botão no HTML: basta o bloco existir. Duas consequências: o que está no `<pre>` precisa funcionar
colado como está (nada de `...` no meio de código que o aluno vai rodar), e o fim da primeira linha
do bloco fica sob o botão quando não há `.arquivo`, então linha longa ali pede um `.arquivo` em cima.
Clique no botão não troca de slide, e ele some na impressão.

### Quantos slides

O encontro 1 saiu com 38: onze de abertura (apresentação, trajetória, combinados), que passam rápido,
e o resto em dois ciclos, desafio, ticket e recapitulação. Os seguintes, sem a abertura, devem ficar
entre 22 e 30. Slide de ícone e de pergunta passa em segundos; o que conta é não faltar degrau. O que não pode é faltar o degrau (seção 4). Blocos de código curtos: o programa
inteiro de um iniciante cabe em 5 a 8 linhas, e se não cabe confortavelmente na tela projetada, está
grande demais.

**Orçamento de altura.** O `.corpo` de um slide tem cerca de **620px** úteis. O `.eyebrow` mais o `h2`
já comem ~110px, então sobram ~510px para o conteúdo. Custos aproximados, para você estimar antes de
escrever:

| Bloco | Altura |
|---|---|
| `.codigo` | ~100px de moldura mais ~34px por linha (`.compacto` ~31px, dentro de `.comparacao` ~29px) |
| `.passos li` | ~46px por item de uma linha, mais ~33px por linha que quebrar |
| `.destaque`, `.alerta` | ~92px com uma linha, ~130px com duas |
| `.dica` | ~73px com uma linha, ~110px com duas |
| `.intro` | ~61px por linha |
| `.cartoes` | ~277px · `table` de 5 linhas ~355px · `.tarefas` de 4 ~368px |
| `.acoes` | ~56px com os botões em uma linha |

Conferir de olho não funciona: o conteúdo transborda em silêncio porque os filhos do `.corpo` são
itens flex e encolhem em vez de estourar. Renderize e meça, comparando o fim do último bloco com o
topo do `.rodape`, com `flex-shrink: 0` forçado nos filhos. Mire em pelo menos 25px de folga.
---

## 10. Botões de copiar e de baixar

Herdado da UC4 e sem uso por enquanto. Um `.acoes` com `.btn data-copiar="../prompts/arquivo.md"`
busca o arquivo, descarta o que vem antes da primeira linha de três hifens e copia o resto. Um
`<a class="btn" href="..." download="NOME.md">` baixa o arquivo. Pode servir para entregar o enunciado
do desafio final ou a lista de desafios do encontro 8 como arquivo.

---

## 11. Como escrever os slides

O conteúdo pode estar certo e o slide continuar ruim. Esta seção é sobre a escrita.

### Travessão: praticamente nunca

O travessão (`—`) é a marca registrada de texto gerado por máquina. A turma percebe, e o material
perde autoridade na hora. **O teto é um travessão por encontro, e o ideal é zero.**

No lugar dele, quase sempre cabe uma destas quatro coisas:

| Em vez de | Escreva |
|---|---|
| `O total está certo — mas o desconto não entrou.` | `O total está certo. Mas o desconto não entrou.` |
| `O erro diz a linha — e o motivo.` | `O erro diz a linha, e o motivo.` |
| `Vale uma regra — e ela vale em todo encontro.` | `Vale uma regra, e ela vale em todo encontro.` |
| `O programa continua igual — só muda o preço.` | `O programa continua igual. Só muda o preço.` |

Ponto final é a melhor troca na maioria dos casos: duas frases curtas leem melhor projetadas do que
uma frase longa costurada. Vírgula serve para aposto curto, dois-pontos para o que explica o que veio
antes, parênteses para o que é mesmo secundário.

Isso vale para `—` e `–`, inclusive em intervalo numérico: escreva `encontros 4 a 7`, não `encontros 4–7`.
Hífen de palavra composta segue normal, e o `·` do eyebrow e do rodapé é separador visual, não
travessão: pode ficar.

### Tom

É um professor falando com a turma às 19h de uma sexta, ou às 9h de um sábado. Não é artigo de blog, nem documentação. A turma é iniciante e pode ter 15 anos: termo técnico entra explicado na primeira vez.

- **Frase curta.** Se ela tem mais de duas vírgulas, quebre em duas.
- **Voz ativa e segunda pessoa.** "Abra o arquivo", "repare no tipo", "você vai ver". Não "deve-se observar".
- **Uma ideia por frase.** Slide projetado é lido de relance, não estudado.
- Humor seco cabe. Entusiasmo de propaganda não. Ninguém precisa ser avisado de que o assunto é útil.
- Escreva como quem já viu a turma errar isso antes, porque é disso que o material trata.

### Padrões que denunciam IA

Nenhum destes entra em slide:

- Abertura de contexto genérico. "No cenário atual do desenvolvimento web", "cada vez mais", "hoje em dia".
- Antítese repetida. Uma construção "não é X, é Y" por encontro já é bastante; três viram tique.
- Tríade de adjetivos. "Rápido, seguro e escalável" não diz nada.
- Muleta de transição. "Vale lembrar", "é importante notar", "em resumo", "em suma", "por fim", "além disso".
- Adjetivo empilhado antes do substantivo. "O poderoso e robusto framework" é só "o framework".
- Negrito espalhado. No máximo dois trechos em negrito por parágrafo, e nenhum em frase curta.
- Emoji. Só quando o docente pede, como o foguinho na fonte queimada da trajetória do encontro 1.
- A palavra "arguição". Em tudo que a turma lê, o nome é **apresentação**: "na apresentação, você explica".
- Reticências decorativas e aspas de ironia.

Um teste que funciona: leia o slide em voz alta. Se você não falaria aquilo na frente da turma, reescreva.

### Passo a passo é obrigatório

Todo slide de mão na massa é uma receita que a turma consegue executar sozinha, sem o professor
completando o que falta na fala. Se o slide mostra um bloco de código e não diz o que fazer com ele,
está incompleto.

O bloco padrão é `<ol class="passos">`, com o código logo antes ou logo depois. Regras:

1. **De três a cinco passos.** Menos que isso não precisava de lista; mais que isso é slide demais.
2. **Cada passo diz onde.** A janela do shell do IDLE, o arquivo `.py` ou o menu, sempre nomeado.
3. **Um passo, uma ação.** Se o passo tem um "e" no meio ligando dois comandos, são dois passos.
4. **O último passo é verificável.** O que aparece na tela se deu certo, com o texto exato que o
   programa imprime para uma entrada dada.
   É o que permite a turma saber que pode seguir em frente sem perguntar.

Também vale fora do código: conceito com etapa, decisão com critério e checklist de conferência
ficam melhores como passos numerados do que como parágrafo.

---

## 12. Ao trabalhar aqui

- Leia o `docente/orientacao.md` antes de criar um encontro: ele tem o material base de cada um.
- Verifique o ledger da seção 6 antes de escrever código em slide.
- Escreva a situação-problema antes do conceito, e a prática logo depois dele.
- Todo encontro tem aquecimento (a partir do 2), ciclos com prática, desafio integrador e ticket de saída.
- Use o cardápio como exemplo, sempre como projeto do professor.
- Siga o jeito dos decks do docente (seção 9): título simples, ícone grande, pergunta para a turma.
- Encontros 2 e 3: o slide se sustenta sem o Daniel na sala.
- Todo slide de mão na massa leva `<ol class="passos">`, com o último passo verificável.
- Teste todo trecho de código num `python3` antes de dar o encontro por pronto, com as entradas do slide.
- Rode `grep -cE '—|–' aulas/encontro-NN.html`. O aceitável é `0`.
- Meça a altura de todo slide que você criar ou alterar (seção 9). Slide que transborda não avisa.
- Releia procurando os padrões da seção 11 antes de entregar.
- Rodapé de slide fica vazio no HTML, menos o da capa. Quem preenche é o `slides.js`.
- Depois de criar um encontro, marque `pronto: true` no manifesto.
- Mudou uma data? Só no `assets/js/aulas.js`. Feriado ou aviso de um dia, no `cronograma/dados.js`.
- Não altere o plano de curso, os indicadores nem as datas sem o docente pedir.
- Ao renderizar para conferir, o slide tem 1280×720 e é escalado por JS. `Ctrl+P` gera um slide por
  página: `google-chrome --headless=new --print-to-pdf=saida.pdf aulas/encontro-NN.html` tem que dar
  uma página por slide.
