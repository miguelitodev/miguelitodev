# Diretrizes para o Gemini CLI

Este documento descreve as preferências e o fluxo de trabalho esperado ao interagir com o Gemini CLI neste projeto.

## Fluxo de Trabalho Geral

1.  **Entendimento e Planejamento:** Antes de qualquer ação significativa, o Gemini deve buscar entender completamente a solicitação e o contexto do projeto. Um plano conciso será apresentado se a tarefa for complexa ou envolver múltiplas etapas.
2.  **Verificação:** Após modificações de código, o Gemini deve sempre tentar verificar as alterações. Isso inclui:
    *   Rodar `npm run lint -- --max-warnings 0` para garantir que não há warnings de lint.
    *   Rodar `npm run build` para checar erros de compilação e linting.
    *   Considerar a execução de testes (se aplicável e identificado).
3.  **Comunicação:**
    *   **Explicação de Comandos:** Antes de executar comandos que modificam o sistema de arquivos (`rm`, `git push`, `npm install`, etc.), o Gemini deve explicar brevemente o que o comando faz.
    *   **Confirmação:** Para ações significativas ou ambíguas, o Gemini deve pedir confirmação.

## Gerenciamento de Código (Git)

1.  **Branches:**
    *   Para novas funcionalidades (`feat`), o Gemini deve criar uma nova branch (ex: `feature/nome-da-feature`).
    *   Para correções de bugs (`fix`) ou refatorações (`refactor`), as alterações podem ser aplicadas diretamente na branch atual, a menos que seja solicitado o contrário.
2.  **Commits:**
    *   Sempre propor uma mensagem de commit clara, concisa e focada no "porquê" da mudança.
    *   Utilizar o padrão de commit `tipo: mensagem` (ex: `feat: add movies section to homepage`).
    *   **Todas as mensagens de commit devem ser em inglês.**
    *   Garantir que todos os arquivos relevantes estejam staged antes do commit.
3.  **Push:**
    *   **NUNCA** fazer `git push` para o repositório remoto sem a minha permissão explícita. Sempre perguntar "Gostaria de enviar essas alterações para o repositório remoto?".
    *   Após um `git push`, verificar o `git status` para confirmar o sucesso.

## Preferências de Desenvolvimento

*   **Variáveis de Ambiente:** Ao adicionar novas variáveis de ambiente, o Gemini deve atualizar o arquivo `.env.example` com placeholders e comentários explicativos, mas nunca commitar valores sensíveis.
*   **UI/UX:**
    *   **Scroll Horizontal:** Para listas horizontais que podem exceder a largura da tela, preferir um scroll horizontal com a barra de rolagem oculta (usando `tailwind-scrollbar-hide` ou similar).
    *   **Rolagem com Roda do Mouse:** Habilitar a rolagem horizontal com a roda do mouse ao passar o mouse sobre a seção relevante.
    *   **Skeleton Loaders:** Utilizar skeleton loaders (máscaras de carregamento) para indicar que o conteúdo está sendo carregado, especialmente em seções que dependem de requisições assíncronas.
    *   **Estilo:** Manter a consistência com o estilo e as convenções de código existentes no projeto (fontes, tamanhos, responsividade, etc.).

## Configurações e Ferramentas Adicionais

*   **Testes Unitários (Jest):** O projeto utiliza Jest para testes unitários. Novos testes devem ser adicionados para funções puras e lógicas de dados, seguindo o padrão `__tests__/`. Para rodar os testes, use `npm test`.
*   **CI/CD (GitHub Actions):** Um workflow de CI/CD foi configurado no GitHub Actions (`.github/workflows/main.yml`). Ele executa `lint`, `test` e `build` em cada `push` e `pull_request` para a branch `master`.
*   **Otimização de Fontes (Next.js `next/font`):** As fontes do projeto são otimizadas usando o `next/font` do Next.js para melhor performance e carregamento.
*   **Linter (ESLint):** O ESLint está configurado para garantir a qualidade do código. Atualmente, a migração para o novo sistema de configuração do ESLint (flat config) está pendente devido a um `SyntaxError` persistente no ambiente de desenvolvimento. O `npm run lint` ainda usa a configuração `.eslintrc.json`.
*   **Formatador (Prettier) e Lint-Staged:** A integração do Prettier e Lint-Staged foi revertida temporariamente devido ao problema de migração do ESLint. Será reavaliada após a resolução do problema do ESLint.

---

Este documento pode ser atualizado conforme novas preferências ou fluxos de trabalho forem estabelecidos.
