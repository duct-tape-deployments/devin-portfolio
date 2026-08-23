# devin-portfolio

Built with React 19, TypeScript, Vite, and Tailwind CSS v4.

## Prerequisites

- Node.js 22+
- pnpm 10+

## Setup

```sh
pnpm install
```

## Scripts

| Command        | Description                                     |
| -------------- | ----------------------------------------------- |
| `pnpm dev`     | Start the dev server with HMR                   |
| `pnpm build`   | Type-check (`tsc -b`) then build for production |
| `pnpm lint`    | Run ESLint                                      |
| `pnpm preview` | Preview the production build locally            |

## Commits

Commit messages must follow [Conventional Commits](https://www.conventionalcommits.org/) (e.g. `feat: add hero section`, `fix: correct nav overflow on mobile`) — enforced by commitlint via a `commit-msg` hook.

Git hooks (via husky):

- **pre-commit** — runs ESLint (`--fix`) and Prettier on staged files
- **commit-msg** — validates the commit message against Conventional Commits
- **pre-push** — runs the full lint suite

These run automatically after `pnpm install` (via the `prepare` script).
