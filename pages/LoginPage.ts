import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly usernameLocator = 'input[name="username"]';
  readonly passwordLocator = 'input[name="password"]';
  readonly loginButtonLocator = 'input[value="Log In"]';
  readonly logoutLink = 'text=Log Out';
  readonly accountsOverviewText = 'text=Accounts Overview';

  constructor(page: Page) {
    super(page);
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameLocator, username);
    await this.page.waitForTimeout(3000);
    await this.page.fill(this.passwordLocator, password);
    await this.page.waitForTimeout(3000);
    await this.page.click(this.loginButtonLocator);
  }

  async logout() {
    await this.page.click(this.logoutLink);
  }

  async expectAccountsOverviewVisible() {
    await expect(this.page.locator(this.accountsOverviewText).first()).toBeVisible();
  }
}
