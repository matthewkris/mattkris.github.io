# mattkris.github.io

Static GitHub Pages site with precompiled Tailwind CSS.

## Development

Install dependencies:

```bash
npm install
```

Compile Tailwind CSS to `index.css`:

```bash
npm run build:css
```

Watch and recompile while editing:

```bash
npm run watch:css
```

Before pushing changes to GitHub Pages, run `npm run build:css` so the generated `index.css` is up to date.