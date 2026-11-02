# XE Design

Portfolio site for XE Design: UI/UX case studies, photography and videography by Devin. It comes in English and Norwegian, with light and dark themes.

Built with React 19, TypeScript, Vite, Tailwind CSS v4, React Router and Zustand.

## Getting started

You need Node.js 22+ and pnpm 11.

```sh
pnpm install
pnpm dev
```

## Scripts

| Command        | Description                                     |
| -------------- | ----------------------------------------------- |
| `pnpm dev`     | Start the dev server with HMR                   |
| `pnpm build`   | Type-check (`tsc -b`) then build for production |
| `pnpm lint`    | Run ESLint                                      |
| `pnpm preview` | Preview the production build locally            |

## Project structure

```text
public/          Images and logos, served by absolute path
src/
  assets/        Flag icons
  components/    UI components, grouped by feature
  config/        Routes and navigation
  data/          Case studies and other page content
  hooks/         Shared React hooks
  i18n/          English and Norwegian text
  pages/         One component per route
  stores/        Theme and language state
  styles/        Design tokens, fonts and shared component classes
```

## Commits

Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/), for example `feat: add hero section`.

`pnpm install` sets up these git hooks:

- **pre-commit:** runs ESLint (`--fix`) and Prettier on staged files
- **commit-msg:** checks the message with commitlint
- **pre-push:** runs `pnpm lint`

CI runs lint and build on pull requests and pushes to `main` and `dev`.

## Credits

- Flag icons ([Norway](src/assets/emojione_flag-for-norway.svg), [United Kingdom](src/assets/emojione_flag-for-united-kingdom.svg)): [EmojiOne](https://icon-sets.iconify.design/emojione/), via [Iconify](https://iconify.design/), licensed [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
