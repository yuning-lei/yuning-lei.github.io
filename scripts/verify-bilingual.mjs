import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const base = process.env.SITE_PREVIEW_URL || 'http://127.0.0.1:4321';
const channel = process.env.SITE_BROWSER_CHANNEL || (process.platform === 'win32' ? 'msedge' : undefined);
const english = [];
async function collect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) { if (file !== join('dist', 'zh')) await collect(file); }
    else if (file.endsWith('.html')) {
      const html = await readFile(file, 'utf8');
      english.push(new URL(html.match(/rel="canonical" href="([^"]+)"/)[1]).pathname);
    }
  }
}
await collect('dist');
await mkdir('.preview/bilingual-review', { recursive: true });
const chinesePath = path => path === '/404.html' ? '/zh/404/' : `/zh${path}`;
const primary = ['/', '/research/', '/publications/', '/projects/', '/about/', '/contact/', '/news/'];
const browser = await chromium.launch({ channel, headless: true });
const issues = [];
try {
  const context = await browser.newContext({ locale: 'zh-CN', viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  page.on('pageerror', error => issues.push(error.message));
  await page.goto(base + '/');
  assert.equal(new URL(page.url()).pathname, '/', 'A Chinese browser still receives the default English URL');
  assert.equal(await page.locator('html').getAttribute('lang'), 'en');
  const links = new Set();
  for (const route of english) {
    await page.goto(base + route);
    const language = page.locator('[data-language-switch]');
    assert.equal(await language.isVisible(), true, `Visible language control: ${route}`);
    assert.equal(await language.getAttribute('href'), chinesePath(route), `Corresponding Chinese URL: ${route}`);
    await language.click();
    await page.waitForURL(base + chinesePath(route));
    assert.equal(await page.locator('html').getAttribute('lang'), 'zh-CN');
    assert.equal(await page.locator('h1').count(), 1);
    assert.match(await page.locator('main').innerText(), /[\u3400-\u9fff]/, 'Chinese page copy');
    assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), 'https://ylei.de' + chinesePath(route));
    assert.equal(await page.locator('[data-language-switch]').getAttribute('href'), route);
    assert.equal(await page.locator('[data-language-switch]').getAttribute('lang'), 'en');
    if (await page.locator('.prose').count()) assert.match(await page.locator('.prose').innerText(), /[\u3400-\u9fff]/, `Translated detail body: ${route}`);
    for (const href of await page.locator('a[href^="/"]').evaluateAll(items => items.map(link => link.getAttribute('href')))) {
      links.add(href.split('#')[0]);
      if (!/\.[a-z]+(?:\?|$)/.test(href) && !href.startsWith('/media/') && !href.startsWith('/_astro/') && !href.startsWith('/files/') && !await page.locator(`[data-language-switch][href="${href}"]`).count()) assert.ok(href.startsWith('/zh/'), `Chinese navigation stays Chinese: ${href}`);
    }
    const audit = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
    assert.deepEqual(audit.violations.map(({ id, nodes }) => ({ id, elements: nodes.map(node => node.target) })), [], `Chinese accessibility: ${route}`);
    for (const width of [375, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${route} at ${width}px`);
    }
    await page.locator('[data-language-switch]').click();
    await page.waitForURL(base + route);
    assert.equal(await page.locator('html').getAttribute('lang'), 'en');
  }
  for (const href of links) {
    const response = await page.request.get(base + href);
    assert.ok(response.ok() || href === '/404.html' && response.status() === 404, `Working bilingual link: ${href}`);
  }
  for (const width of [320, 768, 1024]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of primary) {
      await page.goto(base + chinesePath(path));
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `Chinese layout at ${width}px: ${path}`);
      assert.ok(await page.locator('[data-language-switch]').isVisible());
    }
  }
  await page.setViewportSize({ width: 375, height: 900 });
  await page.goto(base + '/zh/projects/nanorobotic-origami/');
  const menu = page.getByRole('button', { name: '菜单', exact: true });
  await menu.click();
  assert.equal(await menu.getAttribute('aria-expanded'), 'true');
  assert.deepEqual(await page.locator('#primary-nav a').allTextContents(), ['研究方向', '学术成果', '研究项目', '关于我', '联系']);
  await page.keyboard.press('Escape');
  assert.equal(await menu.getAttribute('aria-expanded'), 'false');
  assert.ok(await menu.evaluate(el => el === document.activeElement));
  await page.goto(base + '/zh/news/#marss-2024');
  await page.locator('[data-news-filter="Conference"]').click();
  assert.equal(await page.locator('.activity-entry:visible').count(), 1);
  assert.equal(await page.locator('[data-news-count]').innerText(), '1 项活动');
  const photos = page.locator('#marss-2024 [data-gallery-item]');
  await photos.first().click();
  const viewer = page.getByRole('dialog');
  assert.ok(await viewer.isVisible());
  await viewer.getByRole('button', { name: '下一张照片', exact: true }).click();
  assert.equal(await viewer.locator('[data-photo-position]').innerText(), '2 / 5');
  assert.match(await viewer.locator('figcaption').innerText(), /[\u3400-\u9fff]/);
  await page.keyboard.press('Escape');
  assert.ok(await photos.first().evaluate(el => el === document.activeElement));
  assert.equal(await page.locator('[data-language-switch]').getAttribute('href'), '/news/#marss-2024');
  await page.locator('[data-language-switch]').click();
  await page.waitForURL(base + '/news/#marss-2024');
  await page.goto(base + '/zh/about/#education');
  assert.equal(await page.locator('[data-language-switch]').getAttribute('href'), '/about/#education');
  assert.match(await page.locator('#education').innerText(), /2017 年 9 月—2019 年 8 月/);
  assert.match(await page.locator('#experience').innerText(), /2016 年 3 月—2017 年 9 月/);
  assert.match(await page.locator('main').innerText(), /副教授岗位的任职资格/);
  await page.goto(base + '/zh/publications/');
  assert.equal(await page.locator('.entry-row').count(), 5);
  assert.equal(await page.locator('.conference-contribution').count(), 4);
  assert.match(await page.locator('.conference-contribution').last().innerText(), /报告人：Yuning Lei/);
  await page.screenshot({ path: '.preview/bilingual-review/publications-zh-mobile.png', fullPage: true });
  for (const width of [375, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto(base + '/zh/');
    await page.evaluate(() => document.fonts.ready);
    const hero = page.locator('.featured-work-image');
    await hero.scrollIntoViewIfNeeded();
    await hero.evaluate(image => image.decode());
    assert.ok(await hero.evaluate(image => image.complete && image.naturalWidth > 0), 'Chinese scientific figure loads at each viewport');
    await page.evaluate(() => { scrollTo(0, 0); return new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))); });
    await page.screenshot({ path: `.preview/bilingual-review/home-zh-${width}.png`, fullPage: true });
  }
  const noJs = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 375, height: 900 } });
  const simple = await noJs.newPage();
  await simple.goto(base + '/zh/projects/licovac/');
  assert.ok(await simple.locator('#primary-nav').isVisible());
  await simple.locator('[data-language-switch]').click();
  await simple.waitForURL(base + '/projects/licovac/');
  await simple.goto(base + '/zh/news/');
  assert.equal(await simple.locator('.activity-entry:visible').count(), 7);
  assert.equal(await simple.locator('[data-gallery-item]').count(), 20);
  for (const alt of await simple.locator('[data-gallery-item] img').evaluateAll(images => images.map(img => img.alt))) assert.match(alt, /[\u3400-\u9fff]/);
  await noJs.close();
  assert.deepEqual(issues, [], 'No bilingual runtime errors');
  console.log(`PASS: ${english.length} English/Chinese page pairs, default English, corresponding language links, Chinese body copy/metadata, internal links, 320/375/768/1024/1440px layouts, keyboard/no-JS navigation, localized gallery/filters, preserved anchors, reviewed CV dates, original citations and Chinese WCAG A/AA checks.`);
} finally { await browser.close(); }
