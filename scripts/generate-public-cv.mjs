import { chromium } from '@playwright/test';
import { mkdir, rename, writeFile } from 'node:fs/promises';

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
  const pdf = await page.pdf({
    format: 'A4',
    preferCSSPageSize: true,
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: '<div style="font-size:8px;color:#5D534B;width:100%;margin:0 15mm;display:flex;justify-content:space-between"><span>Yuning Lei · Curriculum vitae</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>',
    tagged: true,
    outline: true,
  });
  if (pdf.length < 1024 || pdf.subarray(0, 5).toString() !== '%PDF-' || !pdf.toString('latin1').trimEnd().endsWith('%%EOF')) {
    throw new Error('Refusing to replace the public CV with an incomplete PDF.');
  }
  // Finish and validate the PDF before replacing the public file. Keep generation
  // and the subsequent static build sequential, especially in a synced checkout.
  await mkdir('.preview', { recursive: true });
  const temporary = `.preview/cv-generated-${process.pid}.pdf`;
  await writeFile(temporary, pdf, { flag: 'wx' });
  await rename(temporary, 'public/files/yuning-lei-cv.pdf');
  console.log('Generated public/files/yuning-lei-cv.pdf from the reviewed About page. Rebuild to include it in dist/.');
} finally {
  await browser.close();
}
