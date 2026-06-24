import fs from 'fs';
import path from 'path';
import { Page } from '@playwright/test';

const SCREENSHOT_BASE = path.resolve(process.cwd(), 'test-results', 'screenshots');

export function screenshotPath(testName: string, suffix = 'png') {
  const sanitized = testName.replace(/[^a-zA-Z0-9-_ ]/g, '_').replace(/\s+/g, '_');
  return path.join(SCREENSHOT_BASE, `${sanitized}.${suffix}`);
}

export async function saveScreenshot(page: Page, testName: string) {
  const filePath = screenshotPath(testName);
  await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
  await page.screenshot({ path: filePath, fullPage: true });
  return filePath;
}

export async function saveNamedScreenshot(page: Page, fileName: string) {
  const sanitized = fileName.replace(/[^a-zA-Z0-9-_ ]/g, '_').replace(/\s+/g, '_');
  const filePath = path.join(SCREENSHOT_BASE, `${sanitized}.png`);
  await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
  await page.screenshot({ path: filePath, fullPage: true });
  return filePath;
}
