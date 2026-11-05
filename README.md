# venkatagopi-perumalla.github.io

Source of my personal portfolio: **[venkatagopi-perumalla.github.io](https://venkatagopi-perumalla.github.io)**

Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion and Three.js. The 3D character is made from primitives in code, with no model files.

## How it ships

Every push to `main` runs the [GitHub Actions pipeline](.github/workflows/deploy.yml):

1. `npm ci` — clean, reproducible install from the lockfile
2. `npm run lint` — ESLint
3. `npm run build` — TypeScript type-check and production build
4. Checks the build output, then publishes it to GitHub Pages

Pull requests run the same checks without deploying.

## Updating content

All text, links, skills, jobs, courses and numbers live in [`src/content.ts`](src/content.ts). Edit it on GitHub, commit, and the site redeploys in about two minutes.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in dist/
```
