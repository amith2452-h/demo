import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/login');

  await page.locator('#username').clear();
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');

  const loginButton = page.locator("//button[@type='submit']");
  if (await loginButton.isEnabled()) {
    await loginButton.click();
  }

  await page.waitForTimeout(2000);

  await expect(page.locator('#flash'))
    .toContainText('You logged into a secure area!');

});