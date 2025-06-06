class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.emailInput = '#email';
    this.passwordInput = '#password';
    this.submitButton = 'button[type="submit"]';
  }

  async goto() {
    await this.page.goto('http://localhost:5500/src/');
  }

  async fillCredentials(email, password) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
  }

  async submit() {
    await this.page.click(this.submitButton);
  }

  async isOnDashboard() {
    await this.page.waitForURL(/dashboard/);
  }

  async getWelcomeMessage() {
    // Wait for the message to be visible before returning it
    await this.page.waitForSelector('.message', { state: 'visible', timeout: 10000 });
    return this.page.locator('.message');
  }

  async getErrorMessage() {
    await this.page.waitForSelector('.error-message', { state: 'visible', timeout: 10000 });
    return this.page.locator('.error-message');
  }
}

module.exports = { LoginPage };

