import { test, expect } from '@playwright/test';
import {locators} from '../support/locators';

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
    //console.log(`Page title is: ${title}`);
    await expect(page).toHaveTitle(title);
});

test('Login to site with incorrect credentials', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const loginField = await page.locator('#username').fill('incorrectUser');
    const passwordField = await page.locator('[type="password"]').fill('incorrectPassword');
    await page.locator('#signInBtn').click();
    // Check for error message  
    const errorMessage = await page.locator('.alert-danger').textContent();
    //console.log(`Error message is: ${errorMessage}`);         
    await expect(page.locator('.alert-danger')).toHaveText('Incorrect username/password.');
    // Check if the error message is visible    
    await expect(page.locator('.alert-danger')).toBeVisible();         
});

test('Login to site with correct credentials', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const loginField = await page.locator(locators.loginField).fill('rahulshettyacademy');
    const passwordField = await page.locator(locators.passwordField).fill('learning');
    await page.locator(locators.signInButton).click();
    // verify user has logged in to https://rahulshettyacademy.com/angularpractice/shop
    await expect(page).toHaveURL('https://rahulshettyacademy.com/angularpractice/shop');  
             
});

