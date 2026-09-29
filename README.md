# Legacy Piece Guide

An independent English guide to the Roblox game Legacy Piece by Gwynn's Shrine.

Website: https://legacy-piece.github.io/

## Local development

```bash
npm ci
npm run dev
```

## Checks and build

```bash
npm run typecheck
npm run lint
npm run build:site
```

To create a ZIP of the built static site, run:

```bash
npm run package
```

The archive is written to `release/legacy-piece-guide.zip`. Its root contains
`index.html` and the other files from `out/`, ready to extract at a web root.
The command requires the system `zip` utility (included with macOS).

## GitHub Pages

The [deployment workflow](.github/workflows/deploy.yml) builds the site and publishes `out/` to GitHub Pages on pushes to `main` or manual runs. Enable GitHub Pages with **GitHub Actions** as the source for this repository.
