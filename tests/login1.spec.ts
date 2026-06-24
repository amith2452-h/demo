import { test } from '@playwright/test';

test('Login Test', async ({ page }) => {

  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.setViewportSize({
    width: 1920,
    height: 1080
  });

  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');
  await page.click('#submit');

  await page.waitForTimeout(3000);

  console.log('Login Successful');

});