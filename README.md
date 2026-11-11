# yuning-lei.github.io
Yuning Lei's personal page

Academic portfolio for Yuning Lei, Ph.D., Research Associate at the University of Oldenburg, Germany.

## Stack

- Astro 7 with static HTML output and strict TypeScript
- Tailwind CSS 4 through the officially recommended `@tailwindcss/vite` plugin
- Validated Markdown collections for research, projects and publications
- GitHub Pages at `https://yuning-lei.github.io/`

Exact dependency versions are pinned in `package.json` and `package-lock.json`. Use Node.js 24 (also recorded in `.nvmrc`). No React or other client UI framework is needed. The mobile navigation is the only application JavaScript shipped to the browser. Inter and Manrope are served locally as Latin variable WOFF2 fonts, with their SIL Open Font License notices in `public/licenses/`.

## Local development

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro (normally `http://localhost:4321`).

```sh
npm run check
npm run build
npm run preview
```

The production site is generated in `dist/`. `npm run build` first clears that generated directory with a path-checked script, so removed pages and drafts cannot survive from a previous build; cleanup errors stop the build. Build output, dependency folders and local caches are ignored by Git. In a restricted environment, set `ASTRO_TELEMETRY_DISABLED=1` if Astro cannot write its user-level telemetry configuration. In PowerShell: `$env:ASTRO_TELEMETRY_DISABLED = '1'`.

For browser verification, keep `npm run preview` running and use `npm run verify:browser` in a second terminal. It checks primary routes, links, metadata, responsive overflow, keyboard/mobile navigation, navigation without JavaScript, the 404 page and automated WCAG A/AA rules. It saves desktop/mobile screenshots to the ignored `.preview/` folder. On Windows it uses installed Microsoft Edge. On other systems, install Playwright's Chromium with `npx playwright install chromium` first. `SITE_BROWSER_CHANNEL` and `SITE_PREVIEW_URL` can override the browser and preview URL. Automated accessibility checks do not replace manual review.

## Pages and content

The pages are Home, Research, Publications, Projects, About / CV and Contact, with a custom 404 page. Primary navigation follows `Research · Publications · Projects · About · Contact`; the name links to Home. The design uses the exact warm palette in `AGENTS.md`, Inter body text, Manrope headings and a maximum content width of 1150px. The homepage is text-led; no generated scientific imagery is used.

See [the content guide](docs/content-guide.md) for editing instructions. Draft entries stay local and generate no public listings or detail pages. Homepage selections use reviewed `featured` entries; publications are grouped by year and include actual BibTeX downloads. The current content includes four publications, two projects, CV/teaching/service records, an owner-supplied portrait and professional contacts from the owner's October 2026 CV. Source records and remaining `NEEDS_VERIFICATION` items are in [content provenance](docs/content-provenance.md); see also [the CV update note](docs/cv-update.md). No academic facts or media have been invented.

The downloadable `public/files/yuning-lei-cv.pdf` is a public derivative of the reviewed website profile, excluding the original's mobile number and ambiguous presentation/ORCID entries. The original PDF and LaTeX archive are not public assets. To refresh the derivative, keep the local preview running, run `npm run cv:pdf`, inspect the PDF, then rebuild. This requires the existing local browser tools; GitHub Pages builds use the tracked PDF and need no browser or LaTeX installation.

Sprint 1 scope, decisions and validation are recorded in [the sprint note](docs/sprint-1.md).

The layout includes semantic landmarks, a skip link, keyboard focus styles, active navigation, a mobile menu with Escape support, reduced-motion preferences, per-page titles/descriptions, canonical URLs, social metadata, a sitemap and `robots.txt`. Verify final content and accessibility again as real material is added.

## GitHub Pages deployment

The workflow in `.github/workflows/pages.yml` checks types and builds pull requests without deploying them. On pushes to `main` (or a manual workflow run on `main`), it builds and deploys `dist/` to GitHub Pages. Deploy jobs use the `github-pages` environment and scoped Pages permissions.

**Pushing `main` can trigger publication. Obtain the owner's approval before pushing or deploying.** The owner authorized publication of the current version on 11 November 2026. Future external changes still follow the approval rule in `AGENTS.md`.

After approval:

1. In the repository, open **Settings → Pages → Build and deployment** and select **GitHub Actions** as the source.
2. Review the content provenance and outstanding verification items. Commit and push the approved source and lockfile to `main`.
3. Check the workflow result. The intended public URL is `https://yuning-lei.github.io/`.

This is a GitHub user site, so `astro.config.mjs` has `site: 'https://yuning-lei.github.io'` and no repository-name base path. Check the repository's Actions tab for build/deployment results; source publication alone is not evidence that the site deployment succeeded.
