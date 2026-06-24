import { test, expect } from '@playwright/test';

test('Search And Open Product Test', async ({ page, context }) => {

  await page.goto('https://www.flipkart.com', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  const closeBtn = page.locator("button:has-text('✕')");
  if (await closeBtn.count() > 0) {
    await closeBtn.click();
  }

  await page.fill("input[name='q']", 'iPhone 15');
  await page.press("input[name='q']", 'Enter');

  await page.waitForSelector('text=Apple iPhone 15');

  const [productPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('text=Apple iPhone 15 (Black, 128 GB)')
  ]);

  await productPage.waitForLoadState('domcontentloaded');
  await expect(productPage).toHaveURL(/flipkart/);

});