import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
    await page.goto('https://ndtv.com');
    const title = page.title;
    await expect(title).toBe("Google1");
  });