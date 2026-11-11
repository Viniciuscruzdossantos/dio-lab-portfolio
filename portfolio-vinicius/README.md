# 💚 Portfólio: Vinícius Cruz Core Dev

Um portfólio feito com HTML, CSS e JavaScript puro, sem frameworks e sem nenhuma biblioteca de fora. Ele apresenta quem eu sou, minhas especificações, meus 10 projetos práticos e minha trajetória, com um visual que mistura a linguagem de **Apple**, **NVIDIA** e **Intel** como se fossem uma marca só: tipografia gigante e muito espaço, preto com verde e uma ficha técnica em azul.

🎉 Este projeto nasceu do desafio **Construindo seu Portfólio Front-end do Zero**, proposto pela [DIO](https://www.dio.me/). Em vez de seguir o layout do instrutor, desenhei um do zero com a minha identidade. Veja os créditos no final.

## 🎮 Como usar

1. Abra o portfólio e veja a apresentação no topo da página.
2. Use o menu para ir direto a cada seção (ou apenas role a página).
3. Mexa o mouse sobre o chip do topo e veja ele inclinar.
4. Na seção de projetos, clique em um filtro para ver só um tipo de projeto.
5. Clique em **Ver no GitHub ›** em qualquer cartão para abrir o código.
6. Clique no botão **◐** para trocar entre o tema escuro e o claro.

### Os controles

| Controle | O que faz |
|---|---|
| Menu (Sobre, Especificações, Projetos, Roadmap, Contato) | Leva até a seção e destaca a seção em que você está |
| Botão ☰ (celular) | Abre e fecha o menu |
| Botão ◐ | Alterna entre tema escuro e claro e lembra a sua escolha |
| Filtros (Todos, JavaScript, HTML e CSS, Automação e IA) | Mostram só os projetos daquela categoria |
| Mouse sobre o chip | Inclina o chip em 3D, como em um lançamento de produto |
| Cartão de projeto | Sobe no hover e abre o repositório no GitHub |

## ✨ O que o portfólio tem

- **Hero estilo keynote:** título gigante em degradê verde e azul, frase que se digita sozinha e um chip em SVG com trilhas animadas.
- **Números com contagem animada:** projetos, cursos e trilhas, anos ensinando tecnologia e nível de inglês.
- **Sobre:** minha formação e minha experiência, contadas em poucas linhas.
- **Especificações:** uma tabela no estilo ficha técnica da Intel, com nome, formação, núcleos, linguagens, design, escritório, idiomas e status.
- **Benchmark:** barras que mostram quantos projetos usam cada tecnologia. Os valores são calculados sozinhos a partir da lista de projetos.
- **Projetos:** 10 cartões com descrição, tecnologias e link, com filtro por categoria.
- **Roadmap:** a trajetória em uma linha do tempo, do momento atual até a formação.
- **Contato:** chamada final com botões para o LinkedIn e o GitHub.
- **Dois temas:** escuro (padrão) e claro, com a escolha salva no navegador.
- **Funciona no celular:** o layout se reorganiza para telas pequenas.
- **Acessível:** navegação por teclado, foco visível e respeito a `prefers-reduced-motion` (quem desativa animações no sistema não vê movimento).

## 🔍 Como funciona (explicação simples)

### De onde vêm os dados

O portfólio não usa banco de dados nem API. Os projetos ficam em uma lista (um array) no começo do `scripts.js`. O caminho é este:

1. O `scripts.js` lê a lista `projects`, onde cada projeto tem título, descrição, tecnologias, categoria e link.
2. Para cada projeto, ele cria um cartão na tela.
3. Quando você clica em um filtro, a lista é filtrada pela categoria e os cartões são desenhados de novo.
4. As barras do benchmark contam, na mesma lista, quantos projetos usam cada tecnologia e calculam a largura de cada barra.

Para adicionar um projeto novo, basta copiar um objeto da lista e trocar os textos. O cartão e o benchmark se atualizam sozinhos.

### Os arquivos

| Arquivo | O que faz |
|---|---|
| `index.html` | Monta a página: menu, hero com o chip, números, sobre, especificações, projetos, roadmap e contato. |
| `assets/css/styles.css` | Todo o visual: cores, tipografia, cartões, tabela, barras, animações e layout responsivo. |
| `assets/js/scripts.js` | A lógica: lista de projetos, filtro, tema, menu, digitação, chip 3D, benchmark e animações de rolagem. |

### Como o tema claro e escuro funciona

As cores ficam em variáveis do CSS (`--bg`, `--text`, `--g`, `--b` e outras). O botão ◐ só troca o atributo `data-theme` da página, e todas as cores mudam de uma vez. A escolha fica guardada no `localStorage`.

## 🧠 O que dá para aprender com este projeto

- Montar uma página inteira só com HTML e CSS, sem framework.
- Guardar dados em um array de objetos e desenhar a tela a partir dele.
- Filtrar uma lista com `filter` e recriar o HTML com `createElement`.
- Usar `IntersectionObserver` para animar ao rolar e destacar o menu da seção atual.
- Calcular dados a partir de outros dados (o benchmark vem da lista de projetos).
- Trocar de tema com variáveis CSS e `data-theme`.
- Guardar uma preferência com `localStorage`, tratando o erro com `try/catch`.
- Fazer um visual caprichado só com CSS: gradientes, grid, `color-mix()`, `clamp()`, animações e SVG.
- Respeitar acessibilidade: foco visível, rótulos `aria` e `prefers-reduced-motion`.

## 🛠️ Tecnologias usadas

| Tecnologia | Para que serve neste projeto |
|---|---|
| HTML | Estrutura de todas as seções e o chip em SVG. |
| CSS | Todo o visual: temas, cartões, tabela, barras, trilhas animadas e responsividade. |
| JavaScript | A lógica: projetos, filtros, tema, menu, digitação, chip 3D e animações. |
| Google Fonts | As fontes Inter e JetBrains Mono. |

## ▶️ Como rodar

1. Baixe ou clone este repositório.
2. Abra o arquivo `index.html` no navegador, com duplo clique.
3. Se você usa o VS Code, também pode clicar em **Go Live** (extensão Live Server).

> 💡 **Importante:** as fontes vêm da internet. Sem conexão, o portfólio continua funcionando, só que com as fontes padrão do sistema.

### Como publicar no GitHub Pages

1. Suba os arquivos na raiz do repositório.
2. Em **Settings → Pages**, escolha a branch `main` e a pasta `/ (root)`.
3. Acesse `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

## 📁 Estrutura do projeto

```
├── index.html
├── README.md
└── assets
    ├── css
    │   └── styles.css
    └── js
        └── scripts.js
```

## 🚀 O que foi melhorado em relação ao original

**Mantido do original:** a proposta do desafio (um portfólio front-end com tecnologias livres), a estrutura de pastas `assets/css` e `assets/js` e a ideia de publicar no GitHub Pages.

**Novo:**

- Um visual do zero, inspirado em Apple, NVIDIA e Intel, no lugar do layout do instrutor.
- Hero estilo keynote, com um chip animado que inclina com o mouse.
- Tabela de especificações no estilo ficha técnica.
- Benchmark calculado automaticamente a partir dos projetos.
- Filtro de projetos por categoria.
- Tema escuro e claro, que lembra a escolha.
- Números com contagem animada e seções que aparecem ao rolar.
- Layout responsivo, navegação por teclado e suporte a `prefers-reduced-motion`.

## 🙌 Créditos

Este portfólio nasceu do desafio **Construindo seu Portfólio Front-end do Zero**, proposto pela DIO, com base no repositório do desafio.

Muito obrigado pela ideia e pela base do projeto! 👏

O design é apenas **inspirado** na linguagem visual de Apple, NVIDIA e Intel. Não usa logos nem materiais dessas marcas e não tem nenhuma afiliação com elas. Este é um projeto de estudo, sem fins comerciais.

## 👨‍💻 Autor desta versão

Feito por **Vinícius Cruz dos Santos**

[GitHub](https://github.com/Viniciuscruzdossantos) · [LinkedIn](https://www.linkedin.com/in/vinicius-cruz-dos-santos-719147272)
