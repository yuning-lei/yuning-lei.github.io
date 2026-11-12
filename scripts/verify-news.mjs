import assert from 'node:assert/strict';
import AxeBuilder from '@axe-core/playwright';

export async function verifyNews({ page, base }) {
  await page.goto(base);
  const highlights = page.locator('.activity-highlight-link');
  assert.equal(await highlights.count(), 3, 'Three homepage activity highlights');
  const destinations = await highlights.evaluateAll(links => links.map(link => link.hash.slice(1)));
  await page.goto(base + '/news/');
  assert.equal(await page.locator('.activity-entry').count(), 7, 'Seven sourced activity groups');
  assert.deepEqual(await page.locator('.journal-year-heading h2').allTextContents(), ['2026', '2024', '2023', '2022']);
  assert.equal(await page.locator('[data-gallery-item]').count(), 20, 'All 20 supplied event photographs are accessible');
  assert.equal(await page.locator('#phd-defense-2023 time').getAttribute('datetime'), '2023-03-24', 'Owner-confirmed defense date');
  assert.equal(await page.locator('#micronora-2022 time').getAttribute('datetime'), '2022-09', 'Award retains verified month precision');
  for (const id of destinations) assert.equal(await page.locator(`#${id}`).count(), 1, `Home link reaches activity ${id}`);
  for (const image of await page.locator('[data-gallery-item] img').all()) {
    await image.scrollIntoViewIfNeeded();
    await image.evaluate(image => image.decode());
    assert.ok((await image.getAttribute('alt')).length > 10, 'Meaningful event photo alt text');
  }
  for (const link of await page.locator('.activity-photo-link').all()) {
    const ratio = await link.locator('img').evaluate(image => {
      const { width, height } = image.getBoundingClientRect();
      return Math.abs(width / height - image.naturalWidth / image.naturalHeight);
    });
    assert.ok(ratio < .01, 'Full lead photo frame is preserved');
  }
  for (const href of await page.locator('[data-gallery-item]').evaluateAll(links => links.map(link => link.getAttribute('href')))) {
    const response = await page.request.get(base + href);
    assert.equal(response.status(), 200, 'Full photo is available');
    assert.match(response.headers()['content-type'], /image\/webp/);
  }
  const filters = page.getByRole('group', { name: 'Filter activities', exact: true });
  for (const [label, activities, years] of [
    ['Research visits', 4, ['2026', '2024', '2023']],
    ['Conferences', 1, ['2024']],
    ['Milestones', 2, ['2023', '2022']],
  ]) {
    await filters.getByRole('button', { name: label, exact: true }).click();
    assert.equal(await page.locator('.activity-entry:visible').count(), activities, label);
    assert.deepEqual(await page.locator('.journal-year:not([hidden]) h2').allTextContents(), years, 'Empty years are hidden');
    assert.equal(await filters.locator('[aria-pressed="true"]').innerText(), label, 'Filter announces selected state');
  }
  // A direct home-style anchor reveals a previously filtered activity.
  await page.evaluate(() => { location.hash = 'mcgill-2026'; });
  await page.waitForFunction(() => !document.getElementById('mcgill-2026').hidden);
  assert.equal(await page.locator('.activity-entry:visible').count(), 7, 'Deep links restore the activity after filtering');
  await page.goto(base + '/news/#marss-2024');
  const trigger = page.locator('#marss-2024 [data-gallery-item]').first();
  await trigger.focus();
  await page.keyboard.press('Enter');
  const viewer = page.getByRole('dialog');
  assert.equal(await viewer.isVisible(), true, 'Gallery opens with the keyboard');
  assert.equal(await viewer.locator('[data-photo-position]').innerText(), '1 / 5');
  assert.equal(await page.locator(':focus').getAttribute('aria-label'), 'Close photo viewer');
  await viewer.locator('img').evaluate(image => image.decode());
  assert.ok(await viewer.locator('img').evaluate(image => Math.abs(image.clientWidth / image.clientHeight - image.naturalWidth / image.naturalHeight) < .01), 'Viewer preserves the complete image aspect ratio');
  const scan = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
  assert.deepEqual(scan.violations.map(({ id, nodes }) => ({ id, elements: nodes.map(node => node.target) })), [], 'Photo viewer accessibility');
  await page.keyboard.press('ArrowRight');
  assert.equal(await viewer.locator('[data-photo-position]').innerText(), '2 / 5');
  await viewer.getByRole('button', { name: 'Next photo' }).click();
  assert.equal(await viewer.locator('[data-photo-position]').innerText(), '3 / 5');
  await page.keyboard.press('ArrowLeft');
  assert.equal(await viewer.locator('[data-photo-position]').innerText(), '2 / 5');
  for (let index = 0; index < 5; index++) {
    await page.keyboard.press('Tab');
    assert.equal(await page.locator(':focus').evaluate(element => Boolean(element.closest('dialog'))), true, 'Modal focus stays in the photo viewer');
  }
  await page.keyboard.press('Escape');
  assert.equal(await viewer.isVisible(), false, 'Escape closes the viewer');
  assert.equal(await trigger.evaluate(element => element === document.activeElement), true, 'Focus returns to the triggering photo');
  await page.goto(base + '/news/#mcgill-2026');
  await page.locator('#mcgill-2026 [data-gallery-item]').click();
  assert.equal(await viewer.getByRole('button', { name: 'Next photo' }).isVisible(), false, 'Single-image entries hide unavailable controls');
  await viewer.getByRole('button', { name: 'Close photo viewer' }).click();
  const desktop = page.viewportSize();
  await page.setViewportSize({ width: 375, height: 844 });
  await page.goto(base + '/news/#micronora-2022');
  const mobileScan = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
  assert.deepEqual(mobileScan.violations.map(({ id, nodes }) => ({ id, elements: nodes.map(node => node.target) })), [], 'Mobile journal accessibility');
  await page.locator('#micronora-2022 [data-gallery-item]').first().click();
  await viewer.locator('img').evaluate(image => image.decode());
  await viewer.getByRole('button', { name: 'Next photo' }).click();
  await viewer.locator('img').evaluate(image => image.decode());
  assert.equal(await viewer.locator('[data-photo-position]').innerText(), '2 / 5', 'Mobile viewer photo navigation');
  assert.ok(await viewer.locator('img').evaluate(image => Math.abs(image.clientWidth / image.clientHeight - image.naturalWidth / image.naturalHeight) < .01), 'Portrait photo aspect ratio is preserved on mobile');
  const bounds = await viewer.boundingBox();
  assert.ok(bounds.x >= 0 && bounds.x + bounds.width <= 375 && bounds.height <= 844, 'Photo dialog fits the mobile viewport');
  await viewer.getByRole('button', { name: 'Close photo viewer' }).click();
  await page.setViewportSize(desktop);
}
