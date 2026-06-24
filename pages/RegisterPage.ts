import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export interface CustomerDetails {
  firstName: string;
  lastName: string;
  addressStreet: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  ssn: string;
  username: string;
  password: string;
}

export class RegisterPage extends BasePage {
  readonly registerLink = 'text=Register';
  readonly firstNameLocator = '#customer\\.firstName';
  readonly lastNameLocator = '#customer\\.lastName';
  readonly addressStreetLocator = '#customer\\.address\\.street';
  readonly cityLocator = '#customer\\.address\\.city';
  readonly stateLocator = '#customer\\.address\\.state';
  readonly zipCodeLocator = '#customer\\.address\\.zipCode';
  readonly phoneNumberLocator = '#customer\\.phoneNumber';
  readonly ssnLocator = '#customer\\.ssn';
  readonly usernameLocator = '#customer\\.username';
  readonly passwordLocator = '#customer\\.password';
  readonly repeatedPasswordLocator = '#repeatedPassword';
  readonly registerButton = 'input[value="Register"]';
  readonly successMessage = 'text=Your account was created successfully';

  constructor(page: Page) {
    super(page);
  }

  async openRegistrationPage() {
    await this.page.click(this.registerLink);
  }

  async register(details: CustomerDetails) {
    await this.openRegistrationPage();
    await this.page.fill(this.firstNameLocator, details.firstName);
     await this.page.waitForTimeout(3000);
    await this.page.fill(this.lastNameLocator, details.lastName);
     await this.page.waitForTimeout(3000);
    await this.page.fill(this.addressStreetLocator, details.addressStreet);
     await this.page.waitForTimeout(3000);
    await this.page.fill(this.cityLocator, details.city);
     await this.page.waitForTimeout(3000);
    await this.page.fill(this.stateLocator, details.state);
     await this.page.waitForTimeout(3000);
    await this.page.fill(this.zipCodeLocator, details.zipCode);
     await this.page.waitForTimeout(3000);
    await this.page.fill(this.phoneNumberLocator, details.phoneNumber);
     await this.page.waitForTimeout(3000);
    await this.page.fill(this.ssnLocator, details.ssn);
     await this.page.waitForTimeout(3000);
    await this.page.fill(this.usernameLocator, details.username);
     await this.page.waitForTimeout(3000);
    await this.page.fill(this.passwordLocator, details.password);
     await this.page.waitForTimeout(3000);
    await this.page.fill(this.repeatedPasswordLocator, details.password);
    await this.page.click(this.registerButton);
  }

  async expectRegistrationSuccess() {
    await expect(this.page.locator(this.successMessage)).toBeVisible();
  }
}
