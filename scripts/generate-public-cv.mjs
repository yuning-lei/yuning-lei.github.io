import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

// Print the reviewed public profile, never the private source PDF or LaTeX archive.
const channel = process.env.SITE_BROWSER_CHANNEL || (process.platform === 'win32' ? 'msedge' : undefined);
const base = process.env.SITE_PREVIEW_URL || 'http://127.0.0.1:4321';
const browser = await chromium.launch({ channel, headless: true });
try {
  const page = await browser.newPage();
  const response = await page.goto(`${base}/about/`);
  if (!response?.ok()) throw new Error('Start the local site preview before generating the public CV.');
  await page.evaluate(() => document.fonts.ready);
  await page.emulateMedia({ media: 'print' });
  await mkdir('public/files', { recursive: true });
  await page.pdf({
    path: 'public/files/yuning-lei-cv.pdf',
    format: 'A4',
    preferCSSPageSize: true,
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: '<div style="font-size:8px;color:#5D534B;width:100%;margin:0 15mm;display:flex;justify-content:space-between"><span>Yuning Lei · Curriculum vitae</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>',
    tagged: true,
    outline: true,
  });
  console.log('Generated public/files/yuning-lei-cv.pdf from the reviewed About page. Rebuild to include it in dist/.');
} finally {
  await browser.close();
}
