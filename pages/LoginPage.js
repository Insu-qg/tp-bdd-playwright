class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.selectors = {
      email: '#email',
      password: '#password',
      submitButton: 'button[type="submit"]',
      welcomeMessage: '.message',
      errorMessage: '.error-message'
    };
  }

  async goto() {
    await this.page.goto('http://localhost:5500/src/');
  }

  async fillCredentials(email, password) {
    await this.page.fill(this.selectors.email, email);
    await this.page.fill(this.selectors.password, password);
  }

  async submit() {
    await this.page.click(this.selectors.submitButton);
  }

  async isOnDashboard() {
    await this.page.waitForURL(/dashboard/);
  }

  async getWelcomeMessage() {
    // Wait for the message to be visible before returning it
    await this.page.waitForSelector(this.selectors.welcomeMessage, { 
      state: 'visible', 
      timeout: 10000 
    });
    return this.page.locator(this.selectors.welcomeMessage);
  }

  async getErrorMessage() {
    await this.page.waitForSelector(this.selectors.errorMessage, { 
      state: 'visible', 
      timeout: 10000 
    });
    return this.page.locator(this.selectors.errorMessage);
  }
}

module.exports = { LoginPage };

