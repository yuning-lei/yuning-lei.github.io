# AGENTS.md — Yuning Lei Academic Website

This file provides standing instructions for AI coding agents working anywhere in this repository. Read it before planning, editing, reviewing, or publishing changes.

## 1. Project and purpose

- Repository: `yuning-lei/yuning-lei.github.io`
- Public website: `https://ylei.de/` (primary custom domain; GitHub Pages hosting).
- Owner: **Yuning Lei, Ph.D.**, Research Associate, University of Oldenburg, Germany.
- Focus: microrobotics, SEM-based nanomanipulation, micro/nanofabrication, microactuation, and related engineering research.
- Audience: researchers, academic collaborators, recruitment committees, and engineering professionals.
- Languages: professional, clear, concise **English by default**, with a complete **Simplified Chinese** version under `/zh/` and corresponding-page language links. Keep original scholarly citation metadata and verified names intact.
- Identity: **academic website + research portfolio**, with scientific credibility taking priority over visual spectacle.

## 2. Non-negotiable: academic accuracy

**Never fabricate, extrapolate, or embellish academic information.** This is a public academic record, not generic demo copy.

- Verify every publication's title, authors and author order, venue, year, DOI, publication status, and URLs against an authoritative source (publisher page/DOI record, the actual paper, the owner's CV, or material explicitly supplied or confirmed by the owner).
- Verify positions, affiliations, degrees, dates, awards, teaching responsibilities, collaborators, grants, and project roles from owner-approved sources before publishing.
- Do not infer an achievement, project outcome, quantitative performance figure, priority/"first" claim, or institutional endorsement from a research topic or draft.
- Distinguish **published**, **accepted**, **under review**, **submitted**, **in preparation**, and **unpublished** accurately. Never present a submitted manuscript as published or peer-reviewed. Ask before listing non-public manuscripts.
- Preserve technical units, numerical precision, scientific terminology, and qualification of experimental claims. Do not invent results, SEM conditions, dimensions, or citations.
- Do not invent quotations, endorsements, social-profile links, email addresses, DOIs, PDF URLs, or downloadable CV files.
- If required information cannot be verified, **leave it out of public-facing content** and report it as `NEEDS_VERIFICATION` in the task summary. Do not silently fill gaps with plausible guesses or generic filler.
- For verified content, prefer recording source links in structured metadata or a traceable project note; do not expose private source documents unnecessarily.
- Never publish private personal information, home address, family details, unpublished data, credentials, or confidential collaborator information.
- For substantive wording changes to scientific claims, preserve the author's intended meaning and request review.

## 3. Non-negotiable: scientific images and media

**Every scientific photograph, SEM micrograph, experimental figure, diagram, and research video must come from the owner's own work or from files explicitly provided by the owner.**

- Allowed sources: (a) images and media directly provided by Yuning Lei; (b) figures from his own papers, thesis, presentations, or research projects, **after verifying provenance and permission to reuse them on a public website**.
- Authorship alone does not guarantee republication rights: respect publisher licenses, co-author agreements, third-party elements, embargoes, and unpublished-work restrictions. Ask the owner when permission or disclosure status is unclear.
- **Do not** use stock photography, scraped images, random web-search images, third-party paper figures, generated scientific illustrations, or AI-generated SEM/microscopy images as substitutes for actual work.
- Never imply a decorative graphic or illustrative mockup is a genuine experiment or scientific result.
- If an approved image is missing, use a clean text-led layout, simple CSS-only non-scientific decoration, or a clearly labeled local development placeholder; do not publish a fake scientific image.
- Store approved media locally (`src/assets/` where image processing is useful, or `public/` when appropriate). Do not hotlink external images.
- Keep original scientific images intact. Avoid misleading edits, invented colorization, altered annotations, removed scale bars, or crops that change scientific interpretation. Standard lossless/responsive optimization is acceptable.
- Provide meaningful alt text, accurate captions, and attribution/license information when needed. Preserve scale-bar meaning and distinguish a schematic from an experimental image.
- Prefer lightweight, responsive images and optional user-initiated video playback; do not autoplay heavy media.

## 4. Visual identity — warm scientific minimalism

The website must use an **elegant warm palette**, replacing earlier navy/teal/cool-gray concepts. Aim for a restrained editorial academic appearance, not orange-heavy marketing design.

| Token | Hex | Role |
| --- | --- | --- |
| `--color-bg` | `#FCFAF7` | Warm off-white page background |
| `--color-surface` | `#F5EFE7` | Cream cards and alternating sections |
| `--color-ink` | `#2F2823` | Deep warm charcoal headings and strong text |
| `--color-text` | `#5D534B` | Body text / muted warm gray |
| `--color-accent` | `#A34427` | Terracotta links and primary actions |
| `--color-accent-hover` | `#87371F` | Hover/focus emphasis |
| `--color-secondary-accent` | `#B58B53` | Muted brass, used sparingly |
| `--color-border` | `#E6D9CB` | Warm subtle dividers and borders |

- Prefer warm off-white backgrounds to pure white; use charcoal text, terracotta accents, and subtle brass details.
- Use **Inter** for interface/body text and **Manrope** for headings, or an equivalently restrained pair if already adopted by the project. Avoid introducing more font families without a reason.
- Keep a clear hierarchy, comfortable reading widths (~720–800px for prose), and a maximum overall content width around 1150px.
- Use restrained corner radii, subtle borders, generous whitespace, and minimal motion. Avoid excessive gradients, glassmorphism, background particles, and artificial scientific motifs.
- Check actual foreground/background combinations against WCAG AA contrast requirements; do not use muted brass for small low-contrast text.
- Design mobile-first; provide accessible focus states and respect `prefers-reduced-motion`.
- A dark theme is optional and must not compromise the approved warm light theme.

## 5. Information architecture

Primary navigation: **Research · Publications · Projects · About · Contact**. The name/logo links to Home.

- **Home:** concise academic introduction, research themes, selected projects, verified featured publications, and contact links.
- **Research:** long-term research directions, experimental methods, and scientifically grounded descriptions.
- **Publications:** complete verified metadata, grouped by year; DOI/PDF/BibTeX links only when real.
- **Projects:** specific projects, user-approved scientific media, methods, results, and associated outputs.
- **About / CV:** education, research appointments, teaching, skills, and a working CV download if the file has been provided.
- **Contact:** verified professional contact details and verified scholarly profiles.

Separate **research areas** (ongoing expertise) from **projects** (specific work). Prefer reusable project/publication cards, but keep publication lists easy to scan. No empty sections, fake testimonials, fake counters, or non-functional buttons.

## 6. Engineering conventions

- Prefer **Astro static site generation**, **TypeScript** when helpful, and **Tailwind CSS 4** via its supported Vite integration. Check existing dependencies and follow current official documentation rather than blindly upgrading.
- Use Astro Content Collections with schema validation for publications and projects; keep scholarly data separate from UI components.
- Build reusable accessible components (header, footer, section headings, research/project/publication cards) rather than duplicating layouts.
- Minimize client-side JavaScript; no database, authentication, CMS, or large client-side framework unless clearly necessary and approved.
- Configure GitHub Pages for the primary custom domain `https://ylei.de/`, without a repository-name base path. Keep Astro `site`, `public/CNAME`, robots/sitemap URLs and deployment checks consistent. The repository remains `yuning-lei/yuning-lei.github.io`.
- Use semantic HTML, accessible menus, keyboard interaction, meaningful metadata, SEO, and Open Graph previews.
- Keep responsive layouts functional at approximately 375, 768, 1024, and 1440 px; avoid horizontal scrolling.
- Keep dependencies minimal, follow repository conventions, and do not introduce new infrastructure without explaining why.

## 7. Agent workflow and approval gates

1. **Inspect first:** review repository state, existing components, data, assets, package scripts, and this file before changing anything.
2. **Plan:** for multi-file or structural changes, outline proposed files, content sources, potential risks, and acceptance criteria before implementation.
3. **Implement the approved scope only:** do not silently replace existing content, redesign unrelated pages, or import external images.
4. **Validate:** run available lint/typecheck/build commands; check internal links, media provenance, responsive behavior, and accessibility where possible. Report commands actually run and their results; never claim unexecuted tests passed.
5. **Review facts and imagery:** explicitly flag unverified claims, missing licenses, unpublished material, and placeholder media before any public release.
6. **Summarize:** list changed files, key decisions, validations, and anything requiring owner input.
7. **Approval:** do not commit, push, merge, publish/deploy, or make other external changes without explicit owner approval. Local preparation and previews are allowed.

### Definition of done

A change is complete only when it respects the warm design system, does not introduce invented academic facts or unauthorized media, passes relevant available checks, has no knowingly broken user-facing links, and clearly reports any remaining verification or approval needs.
