import { test, expect } from '@playwright/test';

test('SauceDemo E2E Test', async ({ page }) => {
    test.setTimeout(120000);

  // Open website
  await page.goto('https://www.saucedemo.com/');

  await page.waitForTimeout(3000);

  // Login
  await page.fill('#user-name', 'standard_user');

  await page.waitForTimeout(3000);

  await page.fill('#password', 'secret_sauce');

  await page.waitForTimeout(3000);

  await page.click('#login-button');

  await page.waitForTimeout(3000);

  // Verify inventory page
  await expect(page).toHaveURL(/inventory/);

  // Add product
  await page.click('text=Add to cart');

 

  // Open cart
  await page.click('.shopping_cart_link');

  await page.waitForTimeout(3000);

  // Checkout
  await page.click('#checkout');

  await page.waitForTimeout(3000);

  // Fill details
  await page.fill('#first-name', 'Amith');

  await page.fill('#last-name', 'H');

  await page.fill('#postal-code', '560001');

  await page.waitForTimeout(3000);

  // Continue
  await page.click('#continue');

  await page.waitForTimeout(3000);

  // Finish
  await page.click('#finish');

  await page.waitForTimeout(3000);

  // Verify success
  await expect(page.locator('.complete-header'))
    .toHaveText('Thank you for your order!');

});