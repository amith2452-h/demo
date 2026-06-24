import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoanPage extends BasePage {
  readonly requestLoanLocator = 'text=Request Loan';
  readonly amountLocator = '#amount';
  readonly downPaymentLocator = '#downPayment';
  readonly accountLocator = '#fromAccountId';
  readonly applyButtonLocator = 'input[value="Apply Now"]';
  readonly statusLocator = '#loanStatus';
  readonly approvedSectionLocator = '#loanRequestApproved';
  readonly newAccountIdLocator = '#newAccountId';

  constructor(page: Page) {
    super(page);
  }

  async openRequestLoan() {
    await this.page.click(this.requestLoanLocator);
  }

  async requestLoan(amount: string, downPayment: string, accountIndex: number) {
    await this.page.fill(this.amountLocator, amount);
    await this.page.waitForTimeout(3000);
    await this.page.fill(this.downPaymentLocator, downPayment);
    await this.page.waitForTimeout(3000);
    await this.page.selectOption(this.accountLocator, { index: accountIndex });
    await this.page.click(this.applyButtonLocator);
  }

  async getLoanStatus() {
    return (await this.page.locator(this.statusLocator).textContent())?.trim() ?? '';
  }

  async expectLoanStatusApprovedOrDenied() {
    await expect(this.page.locator(this.statusLocator)).toHaveText(/Approved|Denied/);
  }

  async expectLoanApprovedSectionVisible() {
    await expect(this.page.locator(this.approvedSectionLocator)).toBeVisible();
  }

  async getNewAccountId() {
    return (await this.page.locator(this.newAccountIdLocator).textContent())?.trim() ?? '';
  }
}
