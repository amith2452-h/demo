import { test, expect } from '@playwright/test';

test('Window Handling Example', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/windows');

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.click('text=Click Here')
    ]);

    await newPage.waitForLoadState();
    await page.waitForTimeout(3000); // 3-second delay

    console.log('Child Window Title:', await newPage.title());

    await expect(newPage.locator('h3')).toHaveText('New Window');

    await newPage.close();
});