# Repository Guidelines

## Project Structure & Module Organization

The production application uses Next.js App Router. Routes and global styles
live in `src/app/`, reusable layout and section components in `src/components/`,
and validated institutional data in `src/content/site.ts`. Public images belong
in `public/images/`. Product context is documented in `PRD.md` and `copy.md`.

`index.html` and `assets/` contain the original Aura snapshot used only as a
visual reference. Do not import, edit, or ship those generated bundles as
application source. Keep unconfirmed contacts, Pix details, and social links
disabled in the central site configuration.

## Build, Test, and Development Commands

From the repository root, use:

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

`dev` starts the local Next.js server. `lint` checks source conventions,
`typecheck` validates TypeScript, and `build` produces the production bundle.
Run `npm run check` before submitting a change.

## Coding Style & Naming Conventions

Use two-space indentation and strict TypeScript. Name React components in
PascalCase, variables in camelCase, and files in kebab-case. Keep static content
in Server Components; add `"use client"` only for genuine interaction. Reuse
the tokens in `globals.css`, Lucide icons, semantic HTML, and accessible labels.

## Testing Guidelines

Automated coverage requirements are not established. Every change must pass
lint, typecheck, and production build. For visual changes, verify keyboard
navigation, console errors, reduced motion, and layouts at 375, 768, 1024, and
1440 px. Add tests beside future logic as `*.test.ts` or `*.test.tsx`.

## Commit & Pull Request Guidelines

No existing commit history defines a convention. Use short, imperative,
scope-aware messages, for example `docs: clarify local preview steps` or
`fix: restore hero image mapping`. Pull requests should explain the purpose,
list verification performed, and link related issues. Include before-and-after
screenshots for visible changes and call out regenerated or newly added assets.
