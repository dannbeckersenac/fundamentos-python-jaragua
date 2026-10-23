# Slides de Fundamentos do Python I

Slides em HTML e cronograma do curso Fundamentos do Python I (Senac Jaraguá do Sul · aperfeiçoamento ·
30 h · 10 encontros, de 23/10 a 28/11/2026).

Publicável direto no **GitHub Pages**: sem build, sem dependência, sem framework. A estrutura e o
sistema visual vieram dos slides da UC4 do mesmo docente.

## Publicar

1. Crie o repositório e suba estes arquivos na raiz.
2. `Settings → Pages → Source: Deploy from a branch`, branch `main`, pasta `/ (root)`.
3. O índice fica em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

## Estrutura

```
index.html               índice dos encontros, montado a partir do manifesto
cronograma/              calendário de outubro e novembro
assets/js/aulas.js       MANIFESTO: datas, horários, títulos, etapas e docente de cada encontro
assets/js/slides.js      navegação, escala, barra inferior e rodapé dos slides
assets/css/slides.css    o sistema visual dos slides
assets/css/navegacao.css cabeçalho e tema do índice e do cronograma
aulas/encontro-NN.html   um arquivo por encontro
aulas/modelo.html        esqueleto para copiar
assets/css/encontro.css  camada visual do curso (ícones, janela do IDLE)
assets/img/              logos, ícones e fotos
```

## Ajustar as datas

Tudo em um lugar só: **`assets/js/aulas.js`**. O índice, os slides e o cronograma leem dali.
Feriados e avisos de um dia ficam em `cronograma/dados.js`.

Para liberar um encontro: crie `aulas/encontro-NN.html` (copiando o `modelo.html`) e marque
`pronto: true` no manifesto. Ele aparece como link na hora em que o encontro começa.
Para ver tudo antes da hora, abra com `?docente=1`.

## Navegar nos slides

| Tecla | Ação |
|---|---|
| `→` `PageDown` `espaço` | próximo slide |
| `←` `PageUp` | slide anterior |
| `Home` / `End` | primeiro / último |
| clique | esquerda volta, direita avança |

O slide tem 1280×720 e é escalado para caber em qualquer projetor. `Ctrl+P` imprime um slide por
página, para gerar PDF.
