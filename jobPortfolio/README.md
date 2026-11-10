# Jibin Poulose: Portfolio

Personal portfolio site in English and French, built with [Astro](https://astro.build) and deployed to GitHub Pages by GitHub Actions.

## Pages

| URL | Page |
|---|---|
| `/` | Home: hero, highlights, expertise, featured projects, field notes, experience, contact |
| `/projects` | All projects, with Hardware / Firmware / Software / Data filters |
| `/projects/<slug>` | One page per project |
| `/skills` | Full skills list |
| `/field-notes` | Debugging stories |
| `/fr/...` | The same pages in French |

## Where things live

```
src/content/projects/en/<slug>.md   project, English  (card + its own page)
src/content/projects/fr/<slug>.md   project, French   (same <slug>)
src/data/site.js                    all other text (EN + FR), contact links
src/views/                          page layouts, shared by EN and FR
src/components/                     cards, diagram, contact block, icons
src/styles/global.css               design
public/                             favicon, main.js, resume PDF
../.github/workflows/deploy-job.yml build + publish when jobPortfolio/ changes (repo root)
```

## Add a project

1. Copy any file in `src/content/projects/en/` to a new name, for example `my-project.md`.
2. Edit the front matter:

   ```yaml
   title: "My project"
   tag: "Industrial"                 # small label on the card
   icon: "chip"                      # any id from src/components/Icons.astro, without "i-"
   cats: ["hw", "fw"]                # hw, fw, sw, db (drives the filters)
   chips: ["STM32", "FreeRTOS"]
   summary: "One or two sentences for the card."
   order: 11                         # position in the list
   featured: true                    # optional: show on the home page (max 3)
   ```

3. Write the case study below the `---` in Markdown (`## headings`, lists, **bold**).
4. Make the French copy with the same file name in `src/content/projects/fr/`.
5. Commit and push. The site rebuilds itself.

Skills, field notes, highlights and experience are edited in `src/data/site.js`. Each has an `en` and an `fr` version.

## Run locally (optional)

```
npm install
npm run dev        # http://localhost:4321, live reload
npm run build      # output in dist/
```

## Publish with GitHub Pages

This folder sits in the `portfolio` repo next to `brandPortfolio/`. The site is served at https://jibinp.github.io/portfolio, so `astro.config.mjs` sets `base: '/portfolio'`.

- Internal links: use `href(lang, '/path')` from `src/lib/i18n.js`. Files in `public/`: use `asset('/file')`. Both add the base.
- Links inside project Markdown must start with `/portfolio/`.
- One-time setup: in the repo, **Settings → Pages → Source** = **GitHub Actions**.
- Every push to `main` that changes `jobPortfolio/` rebuilds the site in about a minute.

## Before going live

- [ ] Email, LinkedIn and GitHub links in `src/data/site.js` (`contact`)
- [ ] Resume PDF at `public/Jibin_Poulose_Resume.pdf`
- [ ] Start date, official job title, previous roles, degree and university (`experience` in `site.js`, both languages)
- [x] GitHub username in `astro.config.mjs` (jibinp)

## Content rules

- Never name clients or colleagues. Describe the domain instead.
- No client source code, schematics or documents.
- Only real numbers that can be backed up in an interview.
