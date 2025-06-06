const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');

setDefaultTimeout(30000); // Increase to 30 seconds

// Before each scenario
Before(async function () {
  // Launch browser
  this.browser = await chromium.launch({ headless: false });
  // Create new context
  this.context = await this.browser.newContext();
  // Create new page
  this.page = await this.context.newPage();
  // Initialize LoginPage
  this.loginPage = new LoginPage(this.page);
});

// After each scenario
After(async function () {
  // Close browser
  await this.browser.close();
});