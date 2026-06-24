import { test } from '../fixtures';

test('Transfer Funds in ParaBank', async ({ loginPage, transferFundsPage }) => {
  test.setTimeout(120000);

  await loginPage.goto();
  await loginPage.login('user1780878793314', 'demo123');
  await loginPage.expectAccountsOverviewVisible();

  await transferFundsPage.openTransferFunds();
  await transferFundsPage.transfer('1000', 0, 1);
  await transferFundsPage.expectSuccess();

  await loginPage.logout();
});
