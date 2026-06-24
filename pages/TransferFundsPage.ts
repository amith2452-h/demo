import { expect, Page } from '@playwright/test';

export class TransferFundsPage {
  readonly page: Page;
  readonly transferFundsLocator = 'text=Transfer Funds';
  readonly amountLocator = '#amount';
  readonly fromAccountLocator = '#fromAccountId';
  readonly toAccountLocator = '#toAccountId';
  readonly transferButtonLocator = 'input[value="Transfer"]';
  readonly resultLocator = '#showResult';

  constructor(page: Page) {
    this.page = page;
  }

  async openTransferFunds() {
    await this.page.click(this.transferFundsLocator);
    await expect(this.page.locator(this.amountLocator)).toBeVisible();
  }

  async transfer(amount: string, fromIndex: number, toIndex: number) {
    await expect(this.page.locator(this.amountLocator)).toBeVisible();
    await this.page.fill(this.amountLocator, amount);
    await this.page.selectOption(this.fromAccountLocator, { index: fromIndex });
    await this.page.selectOption(this.toAccountLocator, { index: toIndex });
    await this.page.click(this.transferButtonLocator);
  }

  async expectSuccess() {
    await expect(this.page.locator(this.resultLocator)).toContainText('Transfer Complete!');
  }
}
