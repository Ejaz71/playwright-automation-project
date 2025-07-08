import { register } from "module"

export const locators = {
  // Login Page Locators        
    loginField: '#username',    
    passwordField: '[type="password"]',
    signInButton: '#signInBtn',     
    // Error Message Locators       
    errorMessage: '.alert-danger',
    // Success Message Locators     
    successMessage: '.alert-success',
    // Navigation Locators  
    homeLink: 'a[href="/angularpractice/shop"]',
    // Product Locators
    productCard: '.card',
}

export const locatorsClientApp = {
    // Login Page Locators  

    registerLink: 'a.text-reset',
    firstNameField: 'input#firstName',
    lastNameField: 'input#lastName',
    emailField: 'input#userEmail',
    phoneNumerField: 'input#userMobile',
    occupationField: '[formcontrolname="occupation"]',
    doctorOccupationField: 'select option[value="1: Doctor"]',
    genderRadioButton: 'input[type="radio"][value="Male"]',
    passwordField: 'input#userPassword',
    confirmPasswordField: 'input#confirmPassword',
    consentCheckbox: 'input[type="checkbox"]',
    registerButton: 'input#login',

    successfulLoginMessage: 'div.login-section-wrapper > div > h1',

    // Login Page Locators for existing account
    signOutButton: 'ul li button',
}

