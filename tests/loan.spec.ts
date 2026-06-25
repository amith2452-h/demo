import { test } from '../fixtures';

test('Verify Loan Approval in ParaBank - Chrome', async ({ loginPage, loanPage }) => {
  test.setTimeout(120000);
  await loginPage.goto();
  await loanPage.page.waitForTimeout(3000);

  await loginPage.login('john', 'demo');
  await loanPage.page.waitForTimeout(3000);

  await loginPage.expectAccountsOverviewVisible();
  await loanPage.page.waitForTimeout(3000);

  await loanPage.openRequestLoan();
  await loanPage.page.waitForTimeout(3000);

  await loanPage.requestLoan('100', '100', 0);
  await loanPage.page.waitForTimeout(3000);

  await loanPage.expectLoanStatusApprovedOrDenied();
  await loanPage.page.waitForTimeout(3000);

  const status = await loanPage.getLoanStatus();
  console.log(`Loan Status: ${status}`);

  if (status === 'Approved') {
    await loanPage.expectLoanApprovedSectionVisible();

    const loanAccountNo = await loanPage.getNewAccountId();
    console.log(`Loan Approved. New Account Number: ${loanAccountNo}`);
  
  } else {
    console.log('Loan Denied due to insufficient funds.');
    await loanPage.page.waitForTimeout(3000);
  }
});