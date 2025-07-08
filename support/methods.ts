import { test, expect } from '@playwright/test';
import {locatorsClientApp} from '../support/locators';

export async function loginWithValidCredentials(page) {
    await page.locator(locatorsClientApp.emailField).fill('test312315017@mail.com');
    await page.locator(locatorsClientApp.passwordField).fill('Password123*');
    await page.locator(locatorsClientApp.registerButton).click();

    await expect(page).toHaveURL('https://rahulshettyacademy.com/client/dashboard/dash');
}