import { test } from '../fixtures';

test('Perform Fund Transfer in ParaBank', async ({ loginPage, transferFundsPage }) => {
  await loginPage.goto();
  await loginPage.login('john', 'demo');
  await loginPage.expectAccountsOverviewVisible();

  await transferFundsPage.openTransferFunds();
  await transferFundsPage.transfer('500', 0, 1);
  await transferFundsPage.expectSuccess();
});
