import { test } from '@playwright/test';

test('Handle Radio Buttons', async ({ page }) => {
  await page.goto('https://artoftesting.com/samplesiteforselenium');
  await page.setViewportSize({ width: 1920, height: 1080 });

  const maleRadio = page.locator('#male');
  const femaleRadio = page.locator('#female');

  if (!(await maleRadio.isChecked())) {
    await maleRadio.check();
    console.log('Male Radio Button Selected');
  }

  await page.waitForTimeout(2000);

  if (!(await femaleRadio.isChecked())) {
    await femaleRadio.check();
    console.log('Female Radio Button Selected');
  }

  await page.waitForTimeout(2000);
});