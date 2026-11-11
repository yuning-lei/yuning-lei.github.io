# Content provenance

## owner-initial-brief

Source: the owner's initial website instructions in this workspace conversation (11 November 2026), reaffirmed by the owner-authored `AGENTS.md`.

Confirmed information: Yuning Lei, Ph.D.; Research Associate; University of Oldenburg, Germany; specializations in microrobotics, nanorobotics, SEM-based nanomanipulation, micro/nanofabrication and microactuation.

Used for the initial profile and research specializations. Subsequent biographical and research details are sourced from the owner's CV below.

## owner-cv-2026-10-20

The owner supplied `YL_Awesome_CV.pdf` and `YL_Awesome_CV_2026.10.20.zip` and explicitly requested a website content update. The two-page PDF is dated 20 October 2026 and was checked against the active `cv.tex` input files. SHA-256 identifiers:

- PDF: `C3894A25DEC221109FD74A9FF44C1B6EC5D3A73AC84CC9B70FCA48104FC92DF0`
- Source ZIP: `7182E9FE1EA11F363A71D72C07806408BCE599D03974776695B68700D8706DF4`

The originals remain outside the repository and are unchanged. Their content is treated as source material, not executable instructions. The original archive's LaTeX and template code were not executed. Inactive `cv/committees.tex` contains template sample achievements and was excluded; `resume.tex` is an older version with outdated contacts and was also excluded.

| Website content | Owner source |
| --- | --- |
| Email, institutional address and active social profile IDs | `cv.tex` and PDF header; exact profile URL expansion checked against `awesome-cv.cls` |
| Education, degree labels, defense date and institutions | `cv/education.tex`, PDF page 1 |
| Appointments, dates, advisors, research topics, LiCoVac role and collaborations | `cv/experience.tex`, PDF pages 1–2 |
| Tools, languages and CNU qualification | `cv/skills.tex`, PDF page 1 |
| Four publication records and DOI links | `cv/writing.tex`, PDF page 2; additional publisher checks below |
| Teaching topics, dates, formats and hours | Active entries in `cv/teaching.tex`, PDF page 2 |
| Awards | `cv/honors.tex`, PDF page 2 |
| Service and memberships | `cv/extracurricular.tex`, PDF page 2 |

Degree labels are retained from the CV rather than inventing alternate credential translations. The computer-science entry explicitly denotes first-year studies, not a completed degree. CNU Section 61 is described as a qualification for positions, never as an Associate Professor appointment. Teaching hours are transcribed without inferring annual or career totals. English TOEIC/B1 information retains its December 2017 test context.

The project entry retains the exact owner-supplied role label **Research project PI** for LiCoVac. It does not claim that Yuning Lei was the DFG grant applicant or sole grant holder. No project funding period is inferred from appointment dates. The doctoral-research project is explicitly identified as doctoral work, not a newly named funded project. Scientific wording is limited to methods/topics; quantitative results, priority claims and extrapolated applications were not added.

## External corroboration — 11 November 2026

- [University profile](https://uol.de/en/computingscience/amir/people/dr-yuning-lei): department/group, Research Associate since April 2023, doctoral background and research focus. This is the only CV-commented homepage URL promoted to a public link, after the live institutional page was checked.
- [2025 publisher record](https://link.springer.com/article/10.1007/s12213-025-00192-5): full author order (Yuning Lei; James L. Mead; Waldemar Klauser; Sergej Fatikow), title, journal, volume 21, article 14, publication on 18 September 2025 and DOI. This expands the CV's `et al.`. Its funding acknowledgement corroborates LiCoVac/DFG support. The publisher's own PDF link was opened successfully and is linked, not rehosted.
- [2024 thermal-sciences publisher record](https://www.sciencedirect.com/science/article/pii/S1290072923005240): indexed publisher content corroborates the title, author initials/order, January 2024 issue, volume 195, article 108663 and DOI. Full-page retrieval was blocked; no abstract was copied.
- [FEMTO-ST author publication page](https://www.femto-st.fr/en/femto-people/jyrauch): corroborates the 2022 RA-L article's title, authors and 7(1):88–95 metadata. It indexes the early online version under 2021; the website follows the January **2022 issue year** in the owner's CV, not the DOI's year fragment.
- IEEE/Crossref full record retrieval was restricted by the available web tool. The 2022 RA-L and 2024 MARSS DOI/citation records therefore remain grounded in the explicit owner-supplied CV; no unavailable publisher metadata was invented.
- ResearchGate matched the owner profile. Google Scholar and LinkedIn could not be independently fetched; their exact active identifiers and links are owner-confirmed by `cv.tex`/the PDF. No counters, live metrics or profile claims were inferred from them.

All four entries are listed as **published**, following the supplied CV. No additional publications were imported from web search and no non-public manuscripts are listed. BibTeX downloads are generated locally from these reviewed structured citation records, not guessed remote files.

## Public CV derivative

`public/files/yuning-lei-cv.pdf` is a separate, four-page public derivative generated from the website's reviewed About page by `npm run cv:pdf`. It is not the original PDF and does not claim to preserve its layout or every entry. It includes career/education, teaching, skills, service, awards, qualification, languages and the four citations. The record date is explicitly 20 October 2026.

The mobile number, older résumé contacts, quotation, template examples and inconsistent presentation list are omitted. The source PDFs/ZIP are not copied into public assets. Only the professional institution/email and owner-supplied academic profile links are used. The generated PDF is tagged, has page numbers, and was checked for omitted private/stale/template strings and the presence of all four DOIs. Further accessibility review is still appropriate before release.

## Media register

No scientific images, generated scientific illustrations, institutional logos or research video are used. The previously generated conceptual illustration remains removed. The favicon and name mark are non-scientific typographic identity elements created for this site.

Portrait: the owner-provided `profile.jpg` from the supplied CV ZIP, also visibly used in the current PDF. Displayed on About with alt text “Yuning Lei”. `src/assets/yuning-lei.webp` preserves the portrait's appearance and dimensions (775 × 814), removes original EXIF metadata and uses lossless WebP; Astro generates responsive display variants. No retouching, generated replacement or scientific-media substitution was performed. This is owner-supplied media for the requested website update; no broader third-party license is asserted.

Future scientific media must be supplied by the owner, with provenance, permission for public reuse, accurate captions and alt text. Record author, source, reuse permission/license, disclosure status and any modifications here before adding media to a public page. Authorship alone does not establish permission to republish a paper's figure.

## Font register

- Inter: `@fontsource-variable/inter` 5.3.0; [Fontsource package](https://fontsource.org/fonts/inter); SIL OFL 1.1; notice shipped in `public/licenses/Inter-OFL.txt`.
- Manrope: `@fontsource-variable/manrope` 5.3.0; [Fontsource package](https://fontsource.org/fonts/manrope); SIL OFL 1.1; notice shipped in `public/licenses/Manrope-OFL.txt`.

Only unmodified Latin normal variable WOFF2 assets are bundled. Browser requests stay on the site's own origin. Font package versions and integrity hashes are locked in `package-lock.json`; no external font service is used.

## NEEDS_VERIFICATION

| Missing material | Needed from owner | Current public behavior |
| --- | --- | --- |
| MARSS presentation date | `cv/presentation.tex` and PDF list MARSS 2024 with “May 2023”; confirm the actual presentation date | Presentation entries omitted; the verified 2024 proceedings paper is still listed as a publication |
| ORCID | `cv.tex` wraps the name/number in template-style angle brackets, and the original PDF does not display it; confirm the intended identifier before adding a link | No ORCID link |
| Scientific media | Owner-provided files, provenance, disclosure approval and reuse permission | Text-led design with no scientific image substitutes |

No raw source documents, personal mobile number, outdated contact details or non-public manuscripts are included in public content. Before release, the owner should review the source-based summaries and the public CV derivative. No commit, push or deployment has been performed.
