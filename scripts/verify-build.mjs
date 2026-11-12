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
for (const file of pages) {
  const html = await readFile(file, 'utf8');
  const canonical = html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/g) || [];
  assert.equal(canonical.length, 1, `One canonical link: ${file}`);
  const url = canonical[0].match(/href="([^"]+)"/)[1];
  assert.equal(new URL(url).origin, origin, `Canonical domain: ${file}`);
  assert.ok(html.includes(`property="og:url" content="${url}"`), `Open Graph URL: ${file}`);
  const personText = html.match(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)?.[1];
  assert.ok(personText, `Structured identity: ${file}`);
  const person = JSON.parse(personText);
  assert.equal(person.url, `${origin}/`, `Person homepage: ${file}`);
  assert.equal(person['@id'], `${origin}/#person`, `Person identifier: ${file}`);
  assert.doesNotMatch(html, /https?:\/\/yuning-lei\.github\.io(?:[\/"\s]|$)/, `No legacy website URLs: ${file}`);
}
const sitemaps = files.filter(path => /(?:^|[\\/])sitemap[^\\/]*\.xml$/.test(path));
assert.ok(sitemaps.length >= 2, 'Sitemap index and entries exist');
for (const file of sitemaps) {
  const xml = await readFile(file, 'utf8');
  const locations = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  assert.ok(locations.length > 0, `Nonempty sitemap: ${file}`);
  for (const [, url] of locations) assert.equal(new URL(url).origin, origin, `Sitemap domain: ${file}`);
}
assert.equal((await readFile('dist/CNAME', 'utf8')).trim(), 'ylei.de', 'Custom domain copied into the artifact');
assert.ok((await readFile('dist/robots.txt', 'utf8')).includes(`Sitemap: ${origin}/sitemap-index.xml`), 'Robots points to the primary sitemap');
console.log(`PASS: ${pages.length} HTML pages, ${sitemaps.length} sitemaps, canonical/Open Graph/Person URLs, robots.txt and CNAME use ${origin}/.`);
