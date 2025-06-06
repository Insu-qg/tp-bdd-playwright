const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('je suis sur la page de connexion', async function () {
  await this.loginPage.goto();
});

When('je saisis un email {string} et un mot de passe {string}', async function (email, password) {
  await this.loginPage.fillCredentials(email, password);
});

When('je clique sur le bouton de connexion', async function () {
  await this.loginPage.submit();
});

Then('je dois être redirigé vers le tableau de bord', async function () {
  await this.loginPage.isOnDashboard();
});

Then('je dois voir un message {string}', async function (message) {
  const welcomeMessage = await this.loginPage.getWelcomeMessage();
  await expect(welcomeMessage).toHaveText(message);
});

Then('je dois voir un message d\'erreur {string}', async function (message) {
  const errorMessage = await this.loginPage.getErrorMessage();
  await expect(errorMessage).toHaveText(message);
});