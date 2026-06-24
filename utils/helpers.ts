import { Page, expect } from '@playwright/test';

/**
 * Clicks an element and waits for it to be stable.
 */
export async function safeClick(page: Page, selector: string, options?: { timeout?: number }) {
  const locator = page.locator(selector);
  await locator.waitFor({ state: 'visible', timeout: options?.timeout ?? 5000 });
  await locator.click();
}

/**
 * Fills an input after ensuring it's visible and enabled.
 */
export async function safeFill(page: Page, selector: string, value: string, options?: { timeout?: number }) {
  const locator = page.locator(selector);
  await locator.waitFor({ state: 'visible', timeout: options?.timeout ?? 5000 });
  await locator.fill(value);
}

/**
 * Selects an option by index.
 */
export async function selectByIndex(page: Page, selector: string, index: number, options?: { timeout?: number }) {
  const locator = page.locator(selector);
  await locator.waitFor({ state: 'attached', timeout: options?.timeout ?? 5000 });
  await locator.selectOption({ index });
}

/**
 * Waits for a selector to contain text (regex or string).
 */
export async function waitForText(page: Page, selector: string, text: string | RegExp, options?: { timeout?: number }) {
  await expect(page.locator(selector)).toHaveText(text, { timeout: options?.timeout ?? 5000 });
}

/**
 * Convenience: navigate to baseUrl + path
 */
export async function goto(page: Page, baseUrl: string, path = '/') {
  await page.goto(`${baseUrl}${path}`);
}
