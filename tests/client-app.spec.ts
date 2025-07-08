import { test, expect } from '@playwright/test';
import {locatorsClientApp} from '../support/locators';
import { loginWithValidCredentials } from '../support/methods';

test.describe('Client Application Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://rahulshettyacademy.com/client/', {
            waitUntil: 'domcontentloaded',
        });
    });

    test('register an account', async ({ page }) => {
        //await page.goto('https://rahulshettyacademy.com/client/');

        await page.locator(locatorsClientApp.registerLink).click();
        await page.locator(locatorsClientApp.firstNameField).fill('Johnny123');
        await page.locator(locatorsClientApp.lastNameField).fill('Do212x');
        await page.locator(locatorsClientApp.emailField).fill('test312315017@mail.com');
        await page.locator(locatorsClientApp.phoneNumerField).fill('2237567890');
        await page.locator(locatorsClientApp.occupationField).selectOption({ label: 'Doctor' });
        // Ensure the gender radio button is visible before interacting
        const genderRadio = page.locator(locatorsClientApp.genderRadioButton);
        await genderRadio.scrollIntoViewIfNeeded();
        await expect(genderRadio).toBeVisible();
        await genderRadio.check();
        await page.locator(locatorsClientApp.passwordField).fill('Password123*');
        await page.locator(locatorsClientApp.confirmPasswordField).fill('Password123*'); 
        await page.locator(locatorsClientApp.consentCheckbox).check();
        await page.locator(locatorsClientApp.registerButton).click();

        await expect(page.locator(locatorsClientApp.successfulLoginMessage)).toHaveText('Account Created Successfully');

        
    });

    test('login with existing account', async ({ page }) => {
        await loginWithValidCredentials(page);
    });

    test.only('show all products', async ({ page }) => {
        await loginWithValidCredentials(page);
        await page.waitForEvent('load'); // Ensure the page is fully loaded
        const allProducts = await page.locator(locatorsClientApp.productCard).allTextContents();
        // Log all products to the console
        console.log('All Products:', allProducts);
    });
});