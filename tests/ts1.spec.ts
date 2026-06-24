import { test, expect } from '@playwright/test';

test('SauceDemo E2E Test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await expect(page).toHaveURL(/inventory/);
  await page.click('text=Add to cart');
  await page.click('.shopping_cart_link');

  await expect(page.locator('.cart_item')).toBeVisible();
  await page.click('#checkout');

  await page.fill('#first-name', 'Amith');
  await page.fill('#last-name', 'H');
  await page.fill('#postal-code', '560001');

  await page.click('#continue');
  await page.click('#finish');

  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');

  console.log('E2E Test Passed');

});