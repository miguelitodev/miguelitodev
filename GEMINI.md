# Gemini CLI Guidelines

This document outlines the preferences and expected workflow when interacting with the Gemini CLI in this project.

## General Workflow

1.  **Understanding and Planning:** Before any significant action, Gemini should seek to fully understand the request and the project context. A concise plan will be presented if the task is complex or involves multiple steps.
2.  **Verification:** After code modifications, Gemini should always attempt to verify the changes. This includes:
    *   Running `npm run lint -- --max-warnings 0` to ensure there are no lint warnings.
    *   Running `npm run build` to check for compilation and linting errors.
    *   Considering running tests (if applicable and identified).
3.  **Communication:**
    *   **Command Explanation:** Before executing commands that modify the file system (`rm`, `git push`, `npm install`, etc.), Gemini should briefly explain what the command does.
    *   **Confirmation:** For significant or ambiguous actions, Gemini should ask for confirmation.

## Code Management (Git)

1.  **Branches:**
    *   For new features (`feat`), Gemini should create a new branch (e.g., `feature/feature-name`).
    *   For bug fixes (`fix`) or refactors (`refactor`), changes can be applied directly to the current branch, unless requested otherwise.
2.  **Commits:**
    *   Always propose a clear, concise commit message focused on the "why" of the change.
    *   Use the commit pattern `type: message` (e.g., `feat: add movies section to homepage`).
    *   **All commit messages must be in English.**
    *   Ensure all relevant files are staged before committing.
3.  **Push:**
    *   **NEVER** `git push` to the remote repository without my explicit permission. Always ask, "Would you like to push these changes to the remote repository?".
    *   After a `git push`, check `git status` to confirm success.

## Development Preferences

*   **Environment Variables:** When adding new environment variables, Gemini should update the `.env.example` file with placeholders and explanatory comments, but never commit sensitive values.
*   **UI/UX:**
    *   **Horizontal Scroll:** For horizontal lists that may exceed the screen width, prefer a horizontal scroll with a hidden scrollbar (using `tailwind-scrollbar-hide` or similar).
    *   **Mouse Wheel Scrolling:** Enable horizontal scrolling with the mouse wheel when hovering over the relevant section.
    *   **Skeleton Loaders:** Use skeleton loaders to indicate that content is being loaded, especially in sections that depend on asynchronous requests.
    *   **Style:** Maintain consistency with the existing code style and conventions in the project (fonts, sizes, responsiveness, etc.).

## Additional Configurations and Tools

*   **Unit Tests (Jest):** The project uses Jest for unit tests. New tests should be added for pure functions and data logic, following the `__tests__/` pattern. To run the tests, use `npm test`.
*   **CI/CD (GitHub Actions):** A CI/CD workflow has been configured in GitHub Actions (`.github/workflows/main.yml`). It runs `lint`, `test`, and `build` on every `push` and `pull_request` to the `master` branch.
*   **Font Optimization (Next.js `next/font`):** The project's fonts are optimized using Next.js `next/font` for better performance and loading.
*   **Linter (ESLint):** ESLint is configured to ensure code quality. Currently, the migration to the new ESLint configuration system (flat config) is pending due to a persistent `SyntaxError` in the development environment. `npm run lint` still uses the `.eslintrc.json` configuration.
*   **Formatter (Prettier) and Lint-Staged:** The integration of Prettier and Lint-Staged has been temporarily reverted due to the ESLint migration issue. It will be re-evaluated after the ESLint problem is resolved.

---

This document may be updated as new preferences or workflows are established.