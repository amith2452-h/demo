import { test } from '@playwright/test';

test('Select Dropdown Value', async ({ page }) => {
  await page.goto('https://artoftesting.com/samplesiteforselenium');
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.selectOption('#testingDropdown', { label: 'Manual Testing' });
  console.log('Manual Testing Selected');
  await page.waitForTimeout(3000);
});