import { test, expect } from '@playwright/test';

test('First Playwright Test', async ({ page, browser }) => {
    const context = await browser.newContext();
    const newPage = await context.newPage();
    await newPage.goto('https://example.com');
    await page.goto('https://example.com');
});    

test('Navigate to gootle.com', async ({ page }) => {
    await page.goto('https://www.google.com');
    // Check if the title contains "Google"
    const title = await page.title();
    console.log(`Page title is: ${title}`);
    await expect(page).toHaveTitle(title);
});