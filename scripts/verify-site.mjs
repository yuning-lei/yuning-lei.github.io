import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { verifyNews } from './verify-news.mjs';

await mkdir('.preview', { recursive: true });
const channel = process.env.SITE_BROWSER_CHANNEL || (process.platform === 'win32' ? 'msedge' : undefined);
const browser = await chromium.launch({ channel, headless: true });
const base = process.env.SITE_PREVIEW_URL || 'http://127.0.0.1:4321';
const routes = ['/', '/research/', '/publications/', '/projects/', '/about/', '/contact/', '/news/'];
const failures = [];
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  page.on('pageerror', error => failures.push(error.message));
  for (const route of routes) {
    const response = await page.goto(base + route);
    assert.equal(response.status(), 200, route);
    assert.equal(await page.locator('h1').count(), 1, `One h1 on ${route}`);
    assert.equal(await page.locator('main').count(), 1, `One main landmark on ${route}`);
    assert.equal(await page.locator('.site-header [aria-current="page"]').count(), route === '/news/' ? 0 : 1, `Current primary page link on ${route}`);
    if (route === '/news/') assert.equal(await page.locator('.site-footer [aria-current="page"]').getAttribute('href'), '/news/');
    assert.deepEqual(await page.locator('#primary-nav a').allTextContents(), ['Research', 'Publications', 'Projects', 'About', 'Contact']);
    assert.doesNotMatch(await page.locator('main').innerText(), /Content placeholder|Project details to come|Publication list in preparation|To be added/i, `No public draft content on ${route}`);
    assert.equal(await page.locator('meta[name="description"]').count(), 1);
    assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), 'https://ylei.de' + route);
    assert.equal(await page.locator('meta[property="og:url"]').getAttribute('content'), 'https://ylei.de' + route);
    assert.equal(await page.locator('link[rel="me"]').getAttribute('href'), 'https://orcid.org/0000-0003-0711-4476', 'Confirmed ORCID metadata');
    const person = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent());
    assert.equal(person.identifier.value, '0000-0003-0711-4476');
    assert.equal(person.url, 'https://ylei.de/');
    assert.equal(person['@id'], 'https://ylei.de/#person');
    assert.ok(person.sameAs.includes('https://orcid.org/0000-0003-0711-4476'), 'Structured identity includes the owner-confirmed ORCID');
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `No desktop overflow on ${route}`);
    const accessibility = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
    assert.deepEqual(accessibility.violations.map(({ id, nodes }) => ({ id, elements: nodes.map(node => node.target) })), [], `Accessibility on ${route}`);
    for (const href of await page.locator('a[href^="/"]').evaluateAll(elements => [...new Set(elements.map(el => el.getAttribute('href')))])) {
      const linked = await page.request.get(base + href);
      assert.equal(linked.status(), 200, `Internal link ${href} from ${route}`);
    }
  }
  await verifyNews({ page, base });
  await page.goto(base + '/publications/');
  assert.equal(await page.locator('.entry-row').count(), 5, 'Four papers plus the HAL-verified doctoral thesis');
  assert.deepEqual(await page.locator('.publication-year > h2').allTextContents(), ['2025', '2024', '2023', '2022']);
  assert.equal(await page.locator('#conference-contributions .conference-contribution').count(), 4, 'ICRA 2023, MARSS 2022, ISOT 2021 and JJCR 2021 contributions are listed separately');
  const icra = page.locator('#conference-contributions .conference-contribution').filter({ hasText: 'Large-Workspace Polyarticulated Micro-Structures Based-On Folded Silica for Tethered Nanorobotics' });
  assert.equal(await icra.count(), 1, 'ICRA 2023 presentation appears once among conference contributions');
  assert.match(await icra.locator('.eyebrow').innerText(), /Oral presentation · 2023/i);
  assert.equal(await icra.locator('.contribution-authors').innerText(), 'Yuning Lei; Cédric Clévy; Jean-Yves Rauch; Philippe Lutz');
  assert.match(await icra.innerText(), /1 June 2023, 15:30–15:40/);
  assert.match(await icra.innerText(), /Sensing and Control session \(ThBT4\.4\)/);
  assert.match(await icra.innerText(), /2022 IEEE Robotics and Automation Letters article/);
  assert.equal(await icra.getByRole('link', { name: 'Related journal article' }).getAttribute('href'), '/publications/folded-silica-nanorobotics-2022/');
  assert.equal(await icra.getByRole('link', { name: 'Official programme (PDF)' }).count(), 0, 'Private sources are not misrepresented as a public programme');
  const isot = page.locator('#conference-contributions .conference-contribution').filter({ hasText: 'Improving Optothermal Activation Effect of Micro Bilayer Cantilever with FIB Milling Gap' });
  assert.equal(await isot.count(), 1, 'ISOT 2021 report appears once');
  assert.equal(await isot.locator('.contribution-authors').innerText(), 'Yuning Lei; Cédric Clévy; Jean-Yves Rauch; Philippe Lutz');
  assert.match(await isot.innerText(), /4 November 2021 at 17:05/);
  assert.match(await isot.innerText(), /Emerging photonic concepts/);
  assert.equal(await isot.getByRole('link', { name: 'Official programme (PDF)' }).getAttribute('href'), 'https://isot2021.sciencesconf.org/data/pages/programme_isot_2021.pdf');
  const jjcr = page.locator('#conference-contributions .conference-contribution').filter({ hasText: 'Nanorobotic Origami Unfolded at the Tip of an Optical Fiber' });
  assert.equal(await jjcr.count(), 1, 'JJCR 2021 talk appears once with the programme title');
  assert.equal(await jjcr.locator('.contribution-authors').innerText(), 'Speaker: Yuning Lei', 'Programme names the speaker without establishing a coauthor list');
  assert.match(await jjcr.innerText(), /12 October 2021, scheduled for 10:15/);
  assert.match(await jjcr.innerText(), /Paris, France/);
  assert.equal(await jjcr.getByRole('link', { name: 'Official programme', exact: true }).getAttribute('href'), 'https://jjcr2021.sciencesconf.org/resource/page/id/8.html?lang=fr');
  for (const href of await page.locator('a[download$=".bib"]').evaluateAll(elements => elements.map(el => el.getAttribute('href')))) {
    const citation = await page.request.get(base + href);
    assert.equal(citation.status(), 200, `Downloadable BibTeX: ${href}`);
    assert.match(await citation.text(), /^@(article|inproceedings|phdthesis)\{/);
    assert.match(await citation.text(), /doi = \{10\./);
  }
  const thesisBib = await (await page.request.get(base + '/publications/nanorobotic-origami-thesis-2023.bib')).text();
  assert.match(thesisBib, /^@phdthesis\{/);
  assert.match(thesisBib, /school = \{Université Bourgogne Franche-Comté\}/);
  assert.match(thesisBib, /number = \{2023UBFCD012\}/);
  assert.match(thesisBib, /url = \{https:\/\/theses\.hal\.science\/tel-04146180v1\}/);
  assert.match(thesisBib, /hal_id = \{tel-04146180\}/);
  assert.match(thesisBib, /hal_version = \{v1\}/);
  assert.doesNotMatch(thesisBib, /https:\/\/(?:www\.)?theses\.fr|https:\/\/doi\.org\/10\.70675/);
  assert.doesNotMatch(thesisBib, /journal =|booktitle =/);
  await page.goto(base + '/publications/nanorobotic-origami-thesis-2023/');
  assert.equal(await page.getByRole('link', { name: 'HAL record', exact: true }).getAttribute('href'), 'https://theses.hal.science/tel-04146180v1');
  assert.equal(await page.getByRole('link', { name: 'DOI', exact: true }).count(), 0, 'Unavailable catalogue DOI button is hidden');
  assert.equal(await page.getByRole('link', { name: 'PDF at HAL', exact: true }).count(), 0, 'Unverified direct PDF is not promoted');
  assert.match(await page.locator('main').innerText(), /29 June 2023/);
  assert.match(await page.locator('main').innerText(), /Language: English/);
  assert.equal(await page.locator('a[href*="theses.fr"], a[href^="https://doi.org/10.70675/"]').count(), 0, 'Unavailable thesis links are absent');
  const thesisAccessibility = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
  assert.deepEqual(thesisAccessibility.violations.map(({ id, nodes }) => ({ id, elements: nodes.map(node => node.target) })), [], 'Updated thesis page accessibility');
  await page.goto(base + '/projects/nanorobotic-origami/');
  assert.ok(await page.locator('a[href="https://theses.hal.science/tel-04146180v1"]').count() > 0, 'Doctoral project reaches HAL');
  const doctoralProjects = [
    { id: 'dynabot', title: 'DyNaBot', anr: 'ANR-21-CE10-0016' },
    { id: 'colamir', title: 'COLAMIR', anr: 'ANR-16-CE10-0009' },
  ];
  for (const { id, title, anr } of doctoralProjects) {
    const href = `/projects/${id}/`;
    assert.equal(await page.getByRole('link', { name: title, exact: true }).getAttribute('href'), href);
    const response = await page.request.get(base + href);
    assert.equal(response.status(), 200, `Project detail for ${title}`);
    const html = await response.text();
    assert.ok(html.includes(`href="https://anr.fr/Project-${anr}"`), `ANR record for ${title}`);
    assert.ok(html.includes('href="/projects/nanorobotic-origami/"'), `Doctoral research link from ${title}`);
  }
  assert.match(await page.locator('.prose').innerText(), /I also attended COLAMIR project meetings/);
  await page.goto(base + '/projects/');
  assert.equal(await page.locator('.entry-row').count(), 8, 'All reviewed research projects are listed');
  await page.goto(base + '/projects/liclom/');
  assert.match(await page.locator('.detail-role').innerText(), /Project manager and proposal author/);
  assert.match(await page.locator('.prose').innerText(), /I wrote the successful DAAD-PPP proposal.*Prof\. Sergej Fatikow was the principal investigator/);
  assert.match(await page.locator('main').innerText(), /57698722/);
  assert.match(await page.locator('main').innerText(), /January 2024 – December 2025/);
  for (const id of ['daad-finland', 'daad-hong-kong']) {
    const response = await page.goto(`${base}/projects/${id}/`);
    assert.equal(response.status(), 200, `Project detail for ${id}`);
    assert.equal(await page.locator('.detail-role').innerText(), 'Project manager, University of Oldenburg');
    assert.match(await page.locator('.prose').innerText(), /supervis(e|ed) research activities at Oldenburg/);
  }
  await page.goto(base + '/projects/ensign/');
  assert.match(await page.locator('.detail-role').innerText(), /Project manager and institutional contact, University of Oldenburg/);
  assert.match(await page.locator('.prose').innerText(), /coordinated by Aarhus University/);
  assert.equal(await page.getByRole('link', { name: 'European Commission CORDIS project record' }).getAttribute('href'), 'https://cordis.europa.eu/project/id/101086226');
  await page.goto(base + '/projects/licovac/');
  assert.match(await page.locator('main').innerText(), /451242348/);
  assert.match(await page.locator('main').innerText(), /grant applicant/);
  await page.goto(base + '/about/');
  const orcid = page.getByRole('link', { name: 'ORCID iD 0000-0003-0711-4476', exact: true });
  assert.equal(await orcid.getAttribute('href'), 'https://orcid.org/0000-0003-0711-4476');
  assert.match(await page.locator('main').innerText(), /Research Engineer \(Ingénieur d’étude\)/);
  assert.match(await page.locator('main').innerText(), /Teaching Assistant/);
  assert.match(await page.locator('main').innerText(), /IUT de Limoges/);
  assert.match(await page.locator('main').innerText(), /French Government Doctoral Fellowship/);
  const teaching = page.locator('#teaching');
  assert.equal(await teaching.locator('.cv-entry').count(), 8, 'Eight owner-confirmed teaching records');
  assert.equal(await teaching.locator('a[href^="https://"]').count(), 8, 'Course and programme links are available');
  const fuzzy = teaching.locator('.cv-entry').first();
  assert.match(await fuzzy.innerText(), /Fuzzy-control and Artificial Neural Networks/);
  assert.match(await fuzzy.innerText(), /Winter semester 2025\/26 – present/);
  assert.match(await fuzzy.innerText(), /Tutorials · 2 h × 6 sessions per semester/);
  assert.equal(await fuzzy.getByRole('link').getAttribute('href'), 'https://uol.de/en/computingscience/amir/teaching/lecture-fuzzy-control-and-artificial-neural-networks');
  const experience = await page.locator('#experience').innerText();
  assert.match(experience, /Attended COLAMIR project meetings/);
  assert.match(experience, /March 2016 – September 2017/);
  assert.equal(await page.locator('#experience h3').filter({ hasText: /^Research Assistant$/ }).count(), 2, 'Owner-confirmed ORCID titles for PRISME/WILO');
  const education = await page.locator('#education').innerText();
  for (const period of ['September 2017 – August 2019', 'September 2016 – August 2017', 'September 2014 – August 2016']) assert.ok(education.includes(period), 'Owner-confirmed ORCID education dates');
  assert.equal(await page.locator('.profile-portrait').evaluate(img => img.complete && img.naturalWidth > 0), true, 'Owner-provided portrait loads');
  const cv = await page.request.get(base + '/files/yuning-lei-cv.pdf');
  assert.equal(cv.status(), 200, 'Public CV download');
  assert.equal((await cv.body()).subarray(0, 5).toString(), '%PDF-');
  assert.match(await page.locator('main').innerText(), /24 March 2023/);
  await page.screenshot({ path: '.preview/about-desktop.png', fullPage: true });
  await page.goto(base);
  await page.evaluate(() => document.fonts.ready);
  assert.equal(await page.evaluate(() => document.fonts.check('16px Inter') && document.fonts.check('16px Manrope')), true, 'Local fonts load');
  assert.equal(await page.locator('.featured-work-image').evaluate(img => img.complete && img.naturalWidth > 0), true, 'Featured scientific figure loads');
  assert.match(await page.locator('.featured-work').innerText(), /sub-50 µm/);
  assert.match(await page.locator('.featured-work').innerText(), /20 µm/);
  const originalFigure = await page.request.get(base + '/media/silica-origami-teaser.svg');
  assert.equal(originalFigure.status(), 200, 'Full original figure is available');
  assert.match(await originalFigure.text(), /<svg\b/, 'Original link returns SVG artwork');
  await page.screenshot({ path: '.preview/home-desktop.png', fullPage: true });
  await page.keyboard.press('Tab');
  assert.equal(await page.locator(':focus').innerText(), 'Skip to content');
  await page.keyboard.press('Enter');
  assert.equal(await page.locator(':focus').getAttribute('id'), 'main-content');

  for (const width of [320, 375, 390, 768, 960, 1024]) {
    await page.setViewportSize({ width, height: 844 });
    for (const route of routes) {
      await page.goto(base + route);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `No overflow on ${route} at ${width}px`);
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base);
  const menu = page.getByRole('button', { name: 'Menu' });
  const mobileAccessibility = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
  assert.deepEqual(mobileAccessibility.violations.map(({ id, nodes }) => ({ id, elements: nodes.map(node => node.target) })), [], 'Mobile accessibility');
  assert.equal(await page.locator('#primary-nav').isVisible(), false);
  await menu.click();
  assert.equal(await menu.getAttribute('aria-expanded'), 'true');
  assert.equal(await page.locator('#primary-nav').isVisible(), true);
  await page.keyboard.press('Escape');
  assert.equal(await menu.getAttribute('aria-expanded'), 'false');
  assert.equal(await menu.evaluate(el => el === document.activeElement), true);
  await menu.click();
  await page.locator('#primary-nav').getByRole('link', { name: 'Research', exact: true }).click();
  await page.waitForURL('**/research/');
  assert.equal(await menu.getAttribute('aria-expanded'), 'false');
  await page.goto(base);
  await page.screenshot({ path: '.preview/home-mobile.png', fullPage: true });
  await page.goto(base + '/research/micro-nanorobotics/');
  assert.equal(await page.locator('meta[name="robots"]').count(), 0, 'Reviewed research is indexable');
  for (const draft of ['/projects/project-placeholder/', '/publications/publication-placeholder/']) {
    const response = await page.goto(base + draft);
    assert.equal(response.status(), 404, `Draft is not publicly generated: ${draft}`);
  }
  const sitemap = await (await page.request.get(base + '/sitemap-0.xml')).text();
  assert.doesNotMatch(sitemap, /project-placeholder|publication-placeholder/);
  assert.ok([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].every(([, url]) => new URL(url).origin === 'https://ylei.de'), 'Primary-domain sitemap URLs');
  // CNAME is verified in the build artifact; Astro preview treats extensionless
  // paths as page routes when trailingSlash is "always".
  assert.match(await (await page.request.get(base + '/robots.txt')).text(), /Sitemap: https:\/\/ylei\.de\/sitemap-index\.xml/);
  const notFound = await page.goto(base + '/does-not-exist/');
  assert.equal(notFound.status(), 404);
  assert.match(await page.locator('h1').innerText(), /out of scale/);
  const noJs = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const noJsPage = await noJs.newPage();
  await noJsPage.goto(base);
  assert.equal(await noJsPage.locator('#primary-nav').isVisible(), true, 'Navigation works without JavaScript');
  await noJsPage.goto(base + '/news/');
  assert.equal(await noJsPage.locator('.activity-entry:visible').count(), 7, 'All activities available without JavaScript');
  assert.equal(await noJsPage.locator('[data-news-filters]').isVisible(), false, 'No inactive filter controls without JavaScript');
  const noJsPhoto = noJsPage.locator('[data-gallery-item]').first();
  const noJsHref = await noJsPhoto.getAttribute('href');
  await noJsPhoto.click();
  await noJsPage.waitForURL(base + noJsHref);
  assert.equal(await noJsPage.locator('img').evaluate(image => image.complete && image.naturalWidth > 0), true, 'Full photo links work without JavaScript');
  await noJs.close();
  assert.deepEqual(failures, [], 'No browser errors');
  console.log('PASS: seven primary routes, ORCID links/structured identity, five publications including the doctoral thesis, separate ICRA 2023 / MARSS 2022 / ISOT 2021 / JJCR 2021 contributions, eight projects including collaboration roles and funding records, BibTeX/PDF downloads, seven activities / 20 photos, gallery filters/keyboard/focus/no-JS behavior, portrait/Teaser, internal links, SEO, 320/375/390/768/960/1024/1440px layouts, local fonts, mobile navigation, drafts, sitemap, 404 and automated WCAG A/AA checks.');
} finally {
  await browser.close();
}
