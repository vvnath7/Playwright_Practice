import { test, expect, chromium, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://playwright.dev');
});

test('basic test', async ({ page }) => {
    await page.click("text=Get started");
    await expect(page.locator('//*[@id="__docusaurus"]/div[2]/div/main/div/div/div[1]/div/article/div[2]/header/h1')).toHaveText('Installation');
  });

  test('basic test 2', async ({ page }) => {
   await page.click("text=API");
   await expect(page.locator('//*[@id="__docusaurus"]/div[2]/div/main/div/div/div[1]/div/article/div[2]/header/h1')).toHaveText('Playwright Library');
  });