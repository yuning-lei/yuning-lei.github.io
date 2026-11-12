// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';

export default defineConfig({
  site: 'https://ylei.de',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap({
    // Keep explicitly noindex pages out of the sitemap. Drafts have no generated routes.
    filter(page) {
      const path = new URL(page).pathname;
      const file = new URL(`./dist${path.endsWith('/') ? `${path}index.html` : path}`, import.meta.url);
      return !/<meta\b[^>]*name="robots"[^>]*content="noindex\b/.test(readFileSync(file, 'utf8'));
    },
  })],
  vite: { plugins: [tailwindcss()] },
});
