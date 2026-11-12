# ORCID update — 12 November 2026

The owner explicitly confirmed [ORCID 0000-0003-0711-4476](https://orcid.org/0000-0003-0711-4476) and requested missing academic information be added to the website. The public record was retrieved from the official ORCID v3 API. Its last-modified timestamp is 7 April 2026; it is a public, reviewed source, not a complete live CV or an authenticated account connection.

## Changes

- About/Contact: complete ORCID iD link; SciProfiles profile supplied by the ORCID record; `rel="me"` and Person `identifier`/`sameAs` metadata.
- Career: Research Engineer (`Ingénieur d’étude`), October 2022–March 2023, Université Bourgogne Franche-Comté / AS2M; Teaching Assistant, October 2019–March 2023, University of Franche-Comté / UFR-ST. Concurrent appointments retain their individual date ranges.
- Education: University Diploma (DU), Preparation for Scientific and Technological Training, IUT de Limoges, September 2012–August 2013.
- The owner explicitly chose ORCID for the conflicting existing entries: PRISME/WILO use **Research Assistant**, WILO begins in **March 2016**, and the M.Sc./B.Sc./DUT end in **August 2019/2017/2016** respectively. Month precision is preserved.
- Recognition: 36-month French Government doctoral fellowship, October 2019–October 2022; first-prize rank of the July 2020 “Breakthrough in Science” award, corroborated by FEMTO-ST’s official report.
- Publications: original French doctoral thesis title, author, 2023 defense year, DOI and catalogue record. Crossref independently identifies Yuning Lei, his ORCID, the dissertation type and the degree-awarding institution. The original four papers are retained, including the 2025 paper missing from ORCID.
- Conference contributions: the MARSS 2022 contribution, with four authors in verified order, is listed separately using the official technical programme. Archival publication, pages, DOI and peer-review status have not been established; these are not asserted.
- Projects: LicLoM / DAAD-PPP project 57698722, January 2024–December 2025; LiCoVac’s DFG project number 451242348 and official 2020–2025 funding term. The DFG record names Prof. Sergej Fatikow as grant applicant; Lei’s existing CV-supplied role label is retained without claiming he was the DFG applicant or that the project funding dates equal his appointment dates.
- The public CV derivative is regenerated from the updated About page, dated 12 November 2026. Original private source documents are unchanged.

## Files

Academic data: `src/data/profile.ts`, the new thesis and LicLoM Markdown records, and the reviewed LiCoVac/doctoral-project/defense-news references.

Rendering: `OrcidLink.astro`, `ConferenceContributions.astro`, About, Contact, Publications, shared Layout and CV components; thesis support in the collection schema, citation renderer and BibTeX helper.

Validation/docs: browser assertions, public CV PDF, README, editing guide and provenance notes. No dependencies, media, navigation structure or deployment configuration were changed. Existing local Teaser/news work is preserved.

## Verification boundaries

The ORCID page requires JavaScript and was not readable through the web parser, so the official public API was used. Crossref was also read through its official JSON endpoint. The `theses.fr` destination and API timed out in this environment; the catalogue identifier and URL are explicitly supplied by ORCID and corroborated by Crossref’s registered primary resource. No unverified thesis PDF link was created.

The owner resolved the differing CV/ORCID dates and job titles by explicitly answering **“这些条目以 ORCID 为准”** on 12 November 2026. These corrections are applied to the website and regenerated public CV. MARSS 2022 archival publication metadata remains `NEEDS_VERIFICATION`; its verified programme contribution is displayed. No emails, personal addresses, raw affiliation records, grant amounts, social metrics or additional scientific claims were imported.

## Validation and release

- `npm run check`: passed, 39 files, zero errors, warnings or hints.
- `npm run build`: passed, 19 static pages and five BibTeX endpoints; sitemap generated.
- `npm run verify:browser`: passed. Includes exact ORCID links and structured identity, five publication records, thesis `@phdthesis`/`school` export, the separately displayed programme contribution, three projects and funding identifiers, owner-confirmed role/date corrections, internal links/metadata, seven responsive widths (320/375/390/768/960/1024/1440px), keyboard/mobile/no-JavaScript behavior and automated WCAG A/AA checks. Existing activity/photo/Teaser checks still pass.
- `npm run cv:pdf`: passed. The final public derivative has four A4 pages, is tagged and contains no JavaScript. `pdfinfo`/`pdftotext` and `.preview/check-orcid-cv.mjs` checked its new records, five DOIs, approved professional email, and absence of phone numbers/internal placeholders. All four pages were rendered with `pdftoppm` and visually reviewed, including footer spacing.
- The final PDF is 364,924 bytes. Source and build SHA-256 are both `B5CB3DCCB8F0E986EFB9A97E4E69BEB8FD4358AF92C66B3E53B099B2006D0AD7`. Intermediate write-conflict versions and the original public derivative are preserved only in ignored preview storage. The generator now writes a verified PDF through a temporary file and rename; generation/build are serial.
- About/Contact screenshots at 375, 768, 1024 and 1440px, thesis/contribution views and PDF page renders are in ignored `.preview/orcid-review/`.
- `git diff --check`: passed, with normal Windows line-ending notices.

Only the MARSS 2022 archival publication details remain unverified; the owner resolved the prior date/title discrepancies explicitly. No commit, push or deployment was made. This content-update request does not approve publication.
