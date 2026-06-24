import { test } from '../fixtures';

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login('john', 'demo');
  await loginPage.expectAccountsOverviewVisible();
});

test('Negative Scenario - Blank Amount', async ({ transferFundsPage }) => {
  await transferFundsPage.openTransferFunds();
  await transferFundsPage.page.fill('#amount', '');
  await transferFundsPage.page.click('input[value="Transfer"]');
});

// test.skip('Negative Scenario - Zero Amount', async ({ transferFundsPage }) => {
//   await transferFundsPage.openTransferFunds();
//   await transferFundsPage.page.fill('#amount', '0');
//   await transferFundsPage.page.click('input[value="Transfer"]');
//   // TODO: add assertion for zero amount validation once app behavior is confirmed.
// });

// test.skip('Negative Scenario - Negative Amount', async ({ transferFundsPage }) => {
//   await transferFundsPage.openTransferFunds();
//   await transferFundsPage.page.fill('#amount', '-500');
//   await transferFundsPage.page.click('input[value="Transfer"]');
//   // TODO: add assertion for negative amount validation once app behavior is confirmed.
// });

// test.skip('Negative Scenario - Alphabetic Amount', async ({ transferFundsPage }) => {
//   await transferFundsPage.openTransferFunds();
//   await transferFundsPage.page.fill('#amount', 'abc');
//   await transferFundsPage.page.click('input[value="Transfer"]');
//   // TODO: add assertion for alphabetic amount validation once app behavior is confirmed.
// });

// test.skip('Negative Scenario - Special Characters', async ({ transferFundsPage }) => {
//   await transferFundsPage.openTransferFunds();
//   await transferFundsPage.page.fill('#amount', '@#$');
//   await transferFundsPage.page.click('input[value="Transfer"]');
//   // TODO: add assertion for special character validation once app behavior is confirmed.
// });

// test.skip('Negative Scenario - Same Source and Destination Account', async ({ transferFundsPage }) => {
//   await transferFundsPage.openTransferFunds();
//   await transferFundsPage.page.fill('#amount', '500');
//   await transferFundsPage.page.selectOption('#fromAccountId', { index: 0 });
//   await transferFundsPage.page.selectOption('#toAccountId', { index: 0 });
//   await transferFundsPage.page.click('input[value="Transfer"]');
//   // TODO: add assertion for same-account validation once app behavior is confirmed.
// });

// test.skip('Negative Scenario - Insufficient Balance', async ({ transferFundsPage }) => {
//   await transferFundsPage.openTransferFunds();
//   await transferFundsPage.page.fill('#amount', '99999999');
//   await transferFundsPage.page.selectOption('#fromAccountId', { index: 0 });
//   await transferFundsPage.page.selectOption('#toAccountId', { index: 1 });
//   await transferFundsPage.page.click('input[value="Transfer"]');
//   // TODO: add assertion for insufficient balance validation once app behavior is confirmed.
// });
