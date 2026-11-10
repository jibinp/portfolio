# Portfolio

One repo, two sites.

| Folder | What it is | Live at |
|---|---|---|
| [`jobPortfolio/`](jobPortfolio/) | Job portfolio: experience, projects and skills, for recruiters and LinkedIn. Astro, English and French. | https://jibinp.github.io/portfolio |
| [`brandPortfolio/`](brandPortfolio/) | Brand site for freelance or company work. Not started yet. | — |

## Deploys

- `jobPortfolio/` deploys to GitHub Pages through `.github/workflows/deploy-job.yml`. It runs only when files in `jobPortfolio/` change.
- `brandPortfolio/` will deploy separately (for example Netlify or Vercel with base directory `brandPortfolio`, on its own domain).

## Run the job site locally

```sh
cd jobPortfolio
npm install
npm run dev
```
