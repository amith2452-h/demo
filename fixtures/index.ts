import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TransferFundsPage } from '../pages/TransferFundsPage';
import { LoanPage } from '../pages/LoanPage';
import { RegisterPage } from '../pages/RegisterPage';

export type Fixtures = {
  loginPage: LoginPage;
  transferFundsPage: TransferFundsPage;
  loanPage: LoanPage;
  registerPage: RegisterPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  transferFundsPage: async ({ page }, use) => {
    await use(new TransferFundsPage(page));
  },

  loanPage: async ({ page }, use) => {
    await use(new LoanPage(page));
  },

  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
});

export { expect } from '@playwright/test';
