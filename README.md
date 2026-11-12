# Yuning Lei — academic website

Primary website: **https://ylei.de/** · Repository: `yuning-lei/yuning-lei.github.io`.

English is the default at **https://ylei.de/**. The complete Simplified Chinese site is at **https://ylei.de/zh/**. Every page has a visible language link to its counterpart, including research/project/publication details and the error page.

Academic portfolio for Yuning Lei, Ph.D., Research Associate at the University of Oldenburg, Germany.

## Stack

- Astro 7 with static HTML output and strict TypeScript
- Tailwind CSS 4 through the officially recommended `@tailwindcss/vite` plugin
- Validated Markdown collections for research, projects, publications and news
- GitHub Pages with the primary custom domain `https://ylei.de/`

Exact dependency versions are pinned in `package.json` and `package-lock.json`. Use Node.js 24 (also recorded in `.nvmrc`). No React or other client UI framework is needed. Browser JavaScript is limited to the mobile navigation, preserving the current anchor on language links, and the progressively enhanced activity filters/photo viewer. Language navigation also works without JavaScript. Inter and Manrope are served locally as Latin variable WOFF2 fonts, with their SIL Open Font License notices in `public/licenses/`; Chinese uses installed system CJK fonts without a font-service request.

## Local development

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro (normally `http://localhost:4321`).

```sh
npm run check
npm run build
npm run verify:build
npm run preview
```

The production site is generated in `dist/`. `npm run build` first clears that generated directory with a path-checked script, so removed pages and drafts cannot survive from a previous build; cleanup errors stop the build. Build output, dependency folders and local caches are ignored by Git. In a restricted environment, set `ASTRO_TELEMETRY_DISABLED=1` if Astro cannot write its user-level telemetry configuration. In PowerShell: `$env:ASTRO_TELEMETRY_DISABLED = '1'`.

For browser verification, keep `npm run preview` running and use `npm run verify:browser` in a second terminal. It checks primary routes, links, metadata, responsive overflow, keyboard/mobile navigation, navigation without JavaScript, the 404 page and automated WCAG A/AA rules. It saves desktop/mobile screenshots to the ignored `.preview/` folder. On Windows it uses installed Microsoft Edge. On other systems, install Playwright's Chromium with `npx playwright install chromium` first. `SITE_BROWSER_CHANNEL` and `SITE_PREVIEW_URL` can override the browser and preview URL. Automated accessibility checks do not replace manual review.

Run `npm run verify:bilingual` as well. It checks all 19 page pairs, English as the default for a Chinese browser, corresponding-page language links, Chinese copy, reciprocal metadata, internal links, responsive layouts, Chinese navigation/news/gallery controls, no-JavaScript language switching and Chinese WCAG A/AA checks. `npm run verify:build` independently checks the 38-page artifact and bilingual sitemap alternates; missing public Markdown translations stop the build.

## Pages and content

The pages are Home, Research, Publications, Projects, About / CV, Contact and News & activities, with a custom 404 page. Primary navigation follows `Research · Publications · Projects · About · Contact`; the name links to Home. The activity journal at `/news/` is linked from the homepage and footer. The design uses the exact warm palette in `AGENTS.md`, Inter body text, Manrope headings and a maximum content width of 1150px. The homepage prominently displays the owner's supplied silica-origami figure, with complete annotations, lossless responsive images and a full-original SVG link. No generated scientific imagery is used.

The Chinese routes reuse these page components through `src/pages/zh/[...path].astro`. Eighteen schema-validated Markdown translations live in `src/content/translations/` and reference the original records. `src/data/localized-profile.ts` holds Chinese display copy for the CV and conference contributions. Canonical scholarly metadata stays in the original collections: author order, publication years/statuses, identifiers, URLs and original citation titles are shared. Chinese publication and conference displays also show the original titles. No automatic language redirect or external translation service is used.

The journal presents seven owner-supplied activity groups from 2022–2026 with 20 local photographs, year navigation, category filters and a keyboard-accessible photo viewer. Without JavaScript, every activity remains readable and photo links open the full image. Text is written around Yuning Lei's participation, with institutional reports linked where available. Photographs preserve their full frames; metadata is removed and responsive derivatives load lazily. Image filenames and SHA-256 provenance are recorded in `docs/news-media.json`.

See [the content guide](docs/content-guide.md) for editing instructions. Draft entries stay local and generate no public listings or detail pages. Homepage selections use reviewed `featured` entries; publications are grouped by year and include actual BibTeX downloads. The current content includes four papers, a doctoral thesis, four separate conference contributions (ICRA 2023, MARSS 2022, ISOT 2021 and JJCR 2021), three projects and CV/teaching/service records. The owner's October 2026 CV, confirmed ORCID, supplied official conference programmes and private ICRA presentation confirmation provide the academic sources. Source records and remaining `NEEDS_VERIFICATION` items are in [content provenance](docs/content-provenance.md); see also [the CV update note](docs/cv-update.md) and [the ORCID update](docs/orcid-update.md). No academic facts or media have been invented.

The downloadable `public/files/yuning-lei-cv.pdf` is a public derivative of the reviewed website profile, excluding the original's mobile number and ambiguous presentation dates. It now includes the owner-confirmed ORCID iD `0000-0003-0711-4476`, the verified thesis and the separately identified ICRA 2023 / MARSS 2022 / ISOT 2021 / JJCR 2021 contributions. The original PDF, LaTeX archive and private ICRA source documents are not public assets. To refresh the derivative, keep the local preview running, run `npm run cv:pdf`, inspect the PDF, then rebuild. This requires the existing local browser tools; GitHub Pages builds use the tracked PDF and need no browser or LaTeX installation.

The Chinese derivative is `public/files/yuning-lei-cv-zh.pdf`, generated with `npm run cv:pdf -- --locale=zh`. Both are tagged five-page PDFs. Generate each sequentially, inspect the text/fonts/pages, then rebuild; never run a build concurrently with CV generation. About pages link to both language downloads.

ORCID is linked on About and Contact and recorded in the site's `rel="me"` and Person structured metadata. This is a static, reviewed import; browsers and GitHub Actions do not call ORCID. Local raw API snapshots remain in ignored `.preview/` storage, while traceable source IDs and hashes are recorded in the content documentation.

The doctoral thesis links to the owner's [HAL record, version 1](https://theses.hal.science/tel-04146180v1). The thesis page includes its bilingual titles, English manuscript language, defense/deposit dates and verified academic metadata. The original DOI identifier is retained in BibTeX, but its unavailable link is hidden; BibTeX and the public CV use HAL as the reading URL. No unverified direct PDF download or externally sourced scientific figure is added. The official HAL API is used only for source review, with no runtime integration.

Sprint 1 scope, decisions and validation are recorded in [the sprint note](docs/sprint-1.md).

The layout includes semantic landmarks, a skip link, keyboard focus styles, active navigation, a mobile menu with Escape support, reduced-motion preferences, per-page titles/descriptions, canonical URLs, social metadata, a sitemap and `robots.txt`. Verify final content and accessibility again as real material is added.

## GitHub Pages deployment

The workflow in `.github/workflows/pages.yml` checks types, builds and verifies the generated primary-domain metadata on pull requests. On pushes to `main` (or a manual workflow run on `main`), it builds and deploys `dist/` to GitHub Pages. Deploy jobs use the `github-pages` environment and scoped Pages permissions. The build verification checks every generated page's canonical/Open Graph/Person URLs, sitemap locations, robots.txt and the CNAME artifact.

**Pushing `main` can trigger publication. Obtain the owner's approval before pushing or deploying.** The owner authorized the earlier CV release on 11 November 2026 and the `ylei.de` migration with the prepared portfolio updates on 12 November 2026. Future external changes still follow the approval rule in `AGENTS.md`.

The complete Chinese version and corresponding-page language controls were explicitly requested with direct publication authorization on 12 November 2026. Scope and verification are recorded in [the bilingual-site note](docs/bilingual-site.md).

After approval:

1. In the repository, open **Settings → Pages → Build and deployment** and select **GitHub Actions** as the source. Keep **Custom domain** set to `ylei.de`; enable **Enforce HTTPS** when GitHub has provisioned the certificate.
2. Review the content provenance and outstanding verification items. Commit and push the approved source and lockfile to `main`.
3. Check the workflow result and the HTTPS response at **https://ylei.de/**.

The repository remains a GitHub user-site repository. `astro.config.mjs` uses `site: 'https://ylei.de'` and no repository-name base path; the shared layout derives canonical, Open Graph and structured identity URLs from that setting. `public/robots.txt` points to the new sitemap and `public/CNAME` records `ylei.de` in the generated artifact.

GitHub Pages uses its repository **Custom domain** setting for Actions deployments; the CNAME artifact documents the intended domain and is checked for consistency. The old `yuning-lei.github.io` hostname remains the GitHub Pages/DNS target. The `www.ylei.de` CNAME should point to `yuning-lei.github.io`, with the apex configured as the primary website. See [the custom-domain note](docs/custom-domain.md) and [GitHub's domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site). Source publication alone is not evidence that deployment and certificate provisioning succeeded.
