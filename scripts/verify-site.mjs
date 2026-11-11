import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';

await mkdir('.preview', { recursive: true });
const channel = process.env.SITE_BROWSER_CHANNEL || (process.platform === 'win32' ? 'msedge' : undefined);
const browser = await chromium.launch({ channel, headless: true });
const base = process.env.SITE_PREVIEW_URL || 'http://127.0.0.1:4321';
const routes = ['/', '/research/', '/publications/', '/projects/', '/about/', '/contact/'];
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
    assert.equal(await page.locator('.site-header [aria-current="page"]').count(), 1, `One current page link on ${route}`);
    assert.deepEqual(await page.locator('#primary-nav a').allTextContents(), ['Research', 'Publications', 'Projects', 'About', 'Contact']);
    assert.doesNotMatch(await page.locator('main').innerText(), /Content placeholder|Project details to come|Publication list in preparation|To be added/i, `No public draft content on ${route}`);
    assert.equal(await page.locator('meta[name="description"]').count(), 1);
    assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), 'https://yuning-lei.github.io' + route);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `No desktop overflow on ${route}`);
    const accessibility = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
    assert.deepEqual(accessibility.violations.map(({ id, nodes }) => ({ id, elements: nodes.map(node => node.target) })), [], `Accessibility on ${route}`);
    for (const href of await page.locator('a[href^="/"]').evaluateAll(elements => [...new Set(elements.map(el => el.getAttribute('href')))])) {
      const linked = await page.request.get(base + href);
      assert.equal(linked.status(), 200, `Internal link ${href} from ${route}`);
    }
  }
  await page.goto(base + '/publications/');
  assert.equal(await page.locator('.entry-row').count(), 4, 'Four CV publications');
  assert.deepEqual(await page.locator('.publication-year > h2').allTextContents(), ['2025', '2024', '2022']);
  for (const href of await page.locator('a[download$=".bib"]').evaluateAll(elements => elements.map(el => el.getAttribute('href')))) {
    const citation = await page.request.get(base + href);
    assert.equal(citation.status(), 200, `Downloadable BibTeX: ${href}`);
    assert.match(await citation.text(), /^@(article|inproceedings)\{/);
    assert.match(await citation.text(), /doi = \{10\./);
  }
  await page.goto(base + '/projects/');
  assert.equal(await page.locator('.entry-row').count(), 2, 'Two CV-supported projects');
  await page.goto(base + '/about/');
  assert.equal(await page.locator('.profile-portrait').evaluate(img => img.complete && img.naturalWidth > 0), true, 'Owner-provided portrait loads');
  const cv = await page.request.get(base + '/files/yuning-lei-cv.pdf');
  assert.equal(cv.status(), 200, 'Public CV download');
  assert.equal((await cv.body()).subarray(0, 5).toString(), '%PDF-');
  assert.match(await page.locator('main').innerText(), /24 March 2023/);
  await page.screenshot({ path: '.preview/about-desktop.png', fullPage: true });
  await page.goto(base);
  await page.evaluate(() => document.fonts.ready);
  assert.equal(await page.evaluate(() => document.fonts.check('16px Inter') && document.fonts.check('16px Manrope')), true, 'Local fonts load');
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
  const notFound = await page.goto(base + '/does-not-exist/');
  assert.equal(notFound.status(), 404);
  assert.match(await page.locator('h1').innerText(), /out of scale/);
  const noJs = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const noJsPage = await noJs.newPage();
  await noJsPage.goto(base);
  assert.equal(await noJsPage.locator('#primary-nav').isVisible(), true, 'Navigation works without JavaScript');
  await noJs.close();
  assert.deepEqual(failures, [], 'No browser errors');
  console.log('PASS: six routes, four CV publications, two projects, BibTeX/PDF downloads, portrait, internal links, SEO, 320/375/390/768/960/1024/1440px layouts, local fonts, keyboard/mobile and no-JavaScript navigation, draft exclusion, sitemap, 404 and automated WCAG A/AA checks.');
} finally {
  await browser.close();
}
