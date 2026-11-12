import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Inspect the generated artifact independently of Astro's source configuration.
const origin = 'https://ylei.de';
const files = [];
async function collect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await collect(path);
    else files.push(path);
  }
}
await collect('dist');
const pages = files.filter(path => path.endsWith('.html'));
assert.ok(pages.length > 0, 'A built website is required');
const byUrl = new Map();
for (const file of pages) {
  const html = await readFile(file, 'utf8');
  const canonical = html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/g) || [];
  assert.equal(canonical.length, 1, `One canonical link: ${file}`);
  const url = canonical[0].match(/href="([^"]+)"/)[1];
  const chinese = new URL(url).pathname.startsWith('/zh/');
  assert.ok(html.includes(`<html lang="${chinese ? 'zh-CN' : 'en'}"`), `Correct document language: ${file}`);
  const alternates = new Map([...html.matchAll(/<link\b[^>]*rel="alternate"[^>]*>/g)].map(([tag]) => [tag.match(/hreflang="([^"]+)"/)?.[1], tag.match(/href="([^"]+)"/)?.[1]]));
  assert.equal(alternates.size, 3, `English, Chinese and default alternates: ${file}`);
  assert.equal(alternates.get(chinese ? 'zh-CN' : 'en'), url, `Self-referencing alternate: ${file}`);
  assert.equal(alternates.get('x-default'), alternates.get('en'), `English stays the default: ${file}`);
  assert.ok(new URL(alternates.get('zh-CN')).pathname.startsWith('/zh/'), `Chinese route: ${file}`);
  assert.ok(!new URL(alternates.get('en')).pathname.startsWith('/zh/'), `English route: ${file}`);
  byUrl.set(url, { html, file, chinese, alternates });
  assert.equal(new URL(url).origin, origin, `Canonical domain: ${file}`);
  assert.ok(html.includes(`property="og:url" content="${url}"`), `Open Graph URL: ${file}`);
  const personText = html.match(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)?.[1];
  assert.ok(personText, `Structured identity: ${file}`);
  const person = JSON.parse(personText);
  assert.equal(person.url, `${origin}/`, `Person homepage: ${file}`);
  assert.equal(person['@id'], `${origin}/#person`, `Person identifier: ${file}`);
  assert.doesNotMatch(html, /https?:\/\/yuning-lei\.github\.io(?:[\/"\s]|$)/, `No legacy website URLs: ${file}`);
}
for (const [url, page] of byUrl) {
  for (const language of ['en', 'zh-CN']) {
    const target = page.alternates.get(language);
    assert.ok(byUrl.has(target), `Translation exists: ${url} → ${target}`);
    assert.equal(byUrl.get(target).alternates.get(page.chinese ? 'zh-CN' : 'en'), url, `Reciprocal translation: ${url}`);
  }
}
const englishPages = [...byUrl.values()].filter(page => !page.chinese).length;
assert.equal(pages.length, englishPages * 2, 'Every English page has one Chinese counterpart');
assert.ok(byUrl.has(`${origin}/`) && byUrl.has(`${origin}/zh/`), 'Both homepages exist');
const sitemaps = files.filter(path => /(?:^|[\\/])sitemap[^\\/]*\.xml$/.test(path));
assert.ok(sitemaps.length >= 2, 'Sitemap index and entries exist');
for (const file of sitemaps) {
  const xml = await readFile(file, 'utf8');
  const locations = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  assert.ok(locations.length > 0, `Nonempty sitemap: ${file}`);
  for (const [, url] of locations) assert.equal(new URL(url).origin, origin, `Sitemap domain: ${file}`);
  if (!file.endsWith('sitemap-index.xml')) {
    assert.ok(xml.includes('hreflang="en"') && xml.includes('hreflang="zh-CN"'), `Bilingual sitemap alternates: ${file}`);
    assert.doesNotMatch(xml, /<loc>[^<]*404(?:\.html|\/)<\/loc>/, 'Error pages remain out of the sitemap');
  }
}
assert.equal((await readFile('dist/CNAME', 'utf8')).trim(), 'ylei.de', 'Custom domain copied into the artifact');
assert.ok((await readFile('dist/robots.txt', 'utf8')).includes(`Sitemap: ${origin}/sitemap-index.xml`), 'Robots points to the primary sitemap');
console.log(`PASS: ${pages.length} HTML pages / ${englishPages} language pairs, reciprocal hreflang/default metadata, bilingual sitemaps, canonical/Open Graph/Person URLs, robots.txt and CNAME use ${origin}/.`);
