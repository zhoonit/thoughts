# Lectures

A lecture platform that aggregates per-project **notes** ([Docusaurus](https://docusaurus.io/)) and **slides** ([Vite](https://vite.dev/) + Reveal.js) into a single static site with a generated landing page.

## Prerequisites

Tool versions are pinned in [`.tool-versions`](.tool-versions) (managed via [asdf](https://asdf-vm.com/)):

- [Bun](https://bun.sh/) 1.3.14
- Node.js 26.3.1

Install dependencies for the whole workspace:

```bash
bun install
```

## Project layout

```
projects/
  <project-slug>/
    notes/    # Docusaurus site (optional)
    slides/   # Vite + Reveal.js site (optional)
```

Each project may have `notes/`, `slides/`, or both. The build auto-discovers every project under `projects/`.

## Building

The top-level build compiles every project's notes and slides into `dist/` and generates the landing page (`dist/index.html`):

```bash
bun run build
```

### Setting the base URL

When the site is **not** served from the domain root (e.g. GitHub Pages serves this repo at `https://zhoonit.github.io/thoughts/`), pass the served sub-path via the `BASE_URL` env var. It is normalized to always have a leading and trailing slash, and is propagated to the Docusaurus `baseUrl` and Vite `base`, as well as the landing-page links.

```bash
BASE_URL="/thoughts/" bun run build
```

Without `BASE_URL`, the site builds for the domain root (`/`).

Output is written to `dist/`.

## Local development

To work on a single project with live reload, run its dev server directly:

```bash
# Notes (Docusaurus, http://localhost:3000)
bun run --cwd projects/<project-slug>/notes dev

# Slides (Vite, http://localhost:5173)
bun run --cwd projects/<project-slug>/slides dev
```

## Tests

```bash
bun run test
```
