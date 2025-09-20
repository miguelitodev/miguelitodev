# Projeto Portfólio Minimalista v1.0

Este documento serve como um guia de referência e planejamento para a criação de um portfólio de design e desenvolvimento, inspirado na estética e funcionalidade do site [octaviobrehm.com](https://octaviobrehm.com/).

## 1. Filosofia e Conceito

O objetivo é criar uma experiência digital que seja mais do que uma simples página, mas sim um espaço que desperte curiosidade e deixe uma marca. O design deve ser guiado por três pilares: **clareza, impacto e deleite**.

A abordagem não segue tendências, mas sim princípios. O foco está em interfaces intuitivas e memoráveis que resolvem problemas, fazem sentido e ajudam marcas a se destacarem.

**Frases de impacto para guiar o tom do projeto:**

- "Criando experiências digitais que despertam curiosidade e deixam uma marca."
- "Onde criatividade e funcionalidade se encontram para contar histórias únicas."
- "Designing for clarity, impact, and delight—one project at a time."

## 2. Estrutura do Site (Layout de Página Única)

O site será estruturado como uma _single-page application_ com navegação baseada em rolagem (scroll).

1.  **Header Fixo:**

    - Logo/Nome no canto superior esquerdo.
    - Menu de navegação no canto superior direito com âncoras para as seções: `About`, `Projects`, `Capabilities`, `Contact`.
    - Botão de play/pause para música ambiente (opcional).

2.  **Seção Hero:**

    - Uma imagem ou vídeo de fundo impactante e conceitual (ex: a mão tocando o tecido).
    - Texto de abertura com grande destaque tipográfico: "Touching possibilities, designing the future, transforming vision into experience."

3.  **Seção de Propósito (Purpose/About):**

    - Texto manifesto que detalha a filosofia de trabalho e crenças sobre design.
    - Layout limpo, com foco total na tipografia e no espaço em branco.

4.  **Seção de Projetos Recentes (Recent Projects):**

    - Grid com 2 ou mais projetos em destaque.
    - Cada projeto é apresentado com uma imagem ou vídeo de alta qualidade.
    - Efeito de _hover_ para revelar o nome do projeto.
    - Link "See more" para uma página de projetos ou para o Behance/Dribbble.

5.  **Seção de Capacidades (Capabilities):**

    - Lista vertical das principais habilidades.
    - Formato de lista/acordeão, onde cada item pode ou não ser expansível.
    - Habilidades listadas: `Art Direction`, `UI/UX Design`, `Web Development`, `Brand Identity`.

6.  **Seção de Contato/Encerramento:**

    - Frase de fechamento impactante.
    - Links diretos para redes sociais (LinkedIn, Behance) e e-mail.

7.  **Elementos Persistentes:**
    - Badge lateral (como o "W. Nominee") para prêmios ou destaques.
    - Cursor personalizado que reage a elementos clicáveis.

## 3. Sistema de Design (Design System)

### Paleta de Cores (Tema Claro)

| Uso               | Cor Hex    | Descrição                                                     |
| ----------------- | ---------- | ------------------------------------------------------------- |
| Fundo Principal   | `#F8F9FA`  | Um branco-gelo, suave e não cansativo.                        |
| Texto Principal   | `#121212`  | Preto ou cinza bem escuro para contraste.                     |
| Texto Secundário  | `#868E96`  | Cinza para subtítulos e textos de apoio.                      |
| Linhas/Bordas     | `#E9ECEF`  | Divisores de seção muito sutis.                               |
| Destaque (Accent) | `~#6DD3BF` | Verde-água (ou outra cor vibrante) para o badge e interações. |

### Tipografia

- **Fonte Principal:** Sugestão de uma fonte Sans-serif geométrica e moderna.
  - **Opções:** `Inter`, `Satoshi`, `General Sans`.
- **Hierarquia:**
  - **Títulos (H1, H2):** Peso `Medium` ou `Regular`, tamanho grande (ex: 48px - 72px).
  - **Títulos de Seção (H3):** Peso `Regular`, espaçamento entre letras aumentado (letter-spacing).
  - **Corpo de Texto:** Peso `Regular`, tamanho confortável para leitura (ex: 16px - 18px) com altura de linha (line-height) de `1.6`.
  - **Links/Labels:** Peso `Medium` ou `Semibold`.

## 4. Animações e Interatividade

A fluidez é a chave. As animações devem ser sutis e elegantes.

- **Animações de Rolagem (Scroll):**

  - Elementos de texto e imagem surgem na tela com um efeito suave de _fade-in_ (aparecer) e _slide-in_ (deslizar para a posição).
  - **Lib Recomendada:** `GSAP (ScrollTrigger)` ou `Framer Motion`.

- **Efeitos de Hover:**

  - **Links:** Mudança de cor suave ou sublinhado animado.
  - **Projetos:** Leve aumento de escala (`transform: scale(1.02)`) e/ou sobreposição de cor sutil na imagem.
  - **Itens de Capacidades:** Mudança de cor no ícone ou no texto.
  - **Técnica:** Utilizar `CSS Transitions` para suavizar todas as mudanças de estado.

- **Cursor:**
  - O cursor padrão é ocultado (`cursor: none`).
  - Uma `div` customizada segue o mouse via JavaScript.
  - O estilo do cursor muda ao passar sobre links e imagens (ex: aumenta de tamanho, mostra um ícone de "ver").

## 5. Sugestão de Tech Stack

- **Frontend:**
  - **React (com Next.js):** Para performance, SEO e renderização otimizada.
  - **Vue (com Nuxt.js):** Alternativa robusta com ótima experiência de desenvolvimento.
- **Animações:**
  - **GSAP (GreenSock):** Padrão da indústria para animações complexas e de alta performance.
  - **Framer Motion:** Excelente para quem usa React, com uma API mais declarativa.
- **Estilização:**
  - **Styled Components** ou **Emotion:** Para CSS-in-JS.
  - **Tailwind CSS:** Para uma abordagem utility-first, ótima para prototipagem rápida e consistência.
  - **CSS Modules:** Para escopo local de CSS sem bibliotecas adicionais.
- **Deployment:**
  - **Vercel:** Integração perfeita com Next.js.
  - **Netlify:** Ótima opção para projetos estáticos e Jamstack.

## Implementações Específicas do Projeto

### Seção de Playlists do Spotify
- Exibe playlists do usuário do Spotify com capa, nome e número de faixas
- Efeito de hover com inversão de cores (fundo preto, texto branco)
- Capas das playlists em preto e branco por padrão, volta a cor no hover
- Botão para expandir/recolher mais playlists
- Link para o perfil completo no Spotify

### Seção de Filmes do Letterboxd
- Exibe os últimos filmes assistidos do usuário no Letterboxd
- Layout horizontal com scroll
- Capas dos filmes em preto e branco por padrão, volta a cor no hover
- Efeito de hover com sobreposição de informações (título, ano, avaliação)
- Link para o perfil completo no Letterboxd

### Efeitos Visuais
- Filtros preto e branco em todas as imagens de mídia (playlists e filmes)
- Transições suaves de 300ms para todos os efeitos de hover
- Efeitos de scale nas imagens ao passar o mouse
- Inversão de cores em elementos interativos ao passar o mouse

## Qwen Added Memories
- O usuário deseja que comandos e padrões importantes sejam registrados no arquivo QWEN.md.
- Implementações importantes no portfólio:
1. Seção de playlists do Spotify com efeito de hover de inversão de cores (fundo preto, texto branco)
2. Filtro preto e branco nas capas das playlists que volta a cor no hover
3. Botão para expandir/recolher mais playlists
4. Seção de filmes do Letterboxd com layout horizontal e scroll
5. Filtro preto e branco nas capas dos filmes que volta a cor no hover
6. Efeitos de hover com sobreposição de informações nos filmes
7. Transições suaves de 300ms em todos os efeitos
8. Efeitos de scale nas imagens ao passar o mouse
