class LunchappAuth {
  constructor(page) {
    this.page = page;
  }

  //Login form testing
  async navigateLoginForm() {
    await this.page.goto("https://lunch.devbstaging.com/login-password");
  }

  async Authentication(Email, Password) {
    await this.page.locator('[aria-label="Email"]').click();
    await this.page.locator('[aria-label="Email"]').fill(Email);
    await this.page.locator('[aria-label="Password"]').click();
    await this.page.locator('[aria-label="Password"]').fill(Password);
    await this.page.locator('button:has-text("Login")').click();
  }
}

module.exports = { LunchappAuth: LunchappAuth };
