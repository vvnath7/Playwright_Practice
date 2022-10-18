import { test, expect, chromium } from '@playwright/test';

test('basic test', async ({ page }) => {
    await page.goto('https://playwright.dev');
    const title = page.title;
    await page.click("text=Get started");
    await expect(page.locator('//*[@id="__docusaurus"]/div[2]/div/main/div/div/div[1]/div/article/div[2]/header/h1')).toHaveText('Installation');
  });